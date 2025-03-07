<template>
  <div class="particle-container">
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// 创建canvas引用
const particleCanvas = ref(null);
let ctx = null;
let animationFrameId = null;

// 粒子系统配置
const config = {
  particleCount: 100,
  particleColor: 'rgba(123, 97, 255, 0.8)',
  lineColor: 'rgba(123, 97, 255, 0.15)',
  particleRadius: 1.5,
  lineWidth: 0.5,
  lineDistance: 150,
  speed: 0.5
};

// 粒子类
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * config.speed * 2 - config.speed;
    this.vy = Math.random() * config.speed * 2 - config.speed;
    this.radius = Math.random() * config.particleRadius + 0.5;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = config.particleColor;
    ctx.fill();
  }

  update() {
    // 边界检测
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }

    // 更新位置
    this.x += this.vx;
    this.y += this.vy;
  }
}

// 粒子数组
let particles = [];

// 初始化粒子
function initParticles() {
  particles = [];
  for (let i = 0; i < config.particleCount; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particles.push(new Particle(x, y));
  }
}

// 绘制粒子之间的连线
function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.lineDistance) {
        // 根据距离计算线条透明度
        const opacity = 1 - (distance / config.lineDistance);
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = config.lineColor.replace('0.15', opacity * 0.15);
        ctx.lineWidth = config.lineWidth;
        ctx.stroke();
      }
    }
  }
}

// 动画循环
function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // 更新和绘制所有粒子
  for (const particle of particles) {
    particle.update();
    particle.draw();
  }

  // 绘制粒子之间的连线
  drawLines();

  // 请求下一帧动画
  animationFrameId = requestAnimationFrame(animate);
}

// 调整画布大小
function resizeCanvas() {
  if (particleCanvas.value) {
    particleCanvas.value.width = window.innerWidth;
    particleCanvas.value.height = window.innerHeight;
    initParticles(); // 重新初始化粒子
  }
}

// 组件挂载时初始化
onMounted(() => {
  if (particleCanvas.value) {
    ctx = particleCanvas.value.getContext('2d');
    resizeCanvas();
    animate();

    // 监听窗口大小变化
    window.addEventListener('resize', resizeCanvas);
  }
});

// 组件卸载时清理
onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('resize', resizeCanvas);
});
</script>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>