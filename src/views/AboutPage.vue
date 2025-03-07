<template>
  <div class="about-page">
    <AppHeader />
    <div class="about-hero"><h1>关于</h1></div>

    <div class="about-section">
      <h2>我们的使命</h2>
      <p>
        在人工智能迅速发展的时代，优质AI工具层出不穷，但分散在互联网各处。AIHub致力于解决这一问题，我们的使命是：
      </p>
      <div class="mission-points">
        <div class="mission-point">
          <div class="mission-icon">🔍</div>
          <div class="mission-text">
            整合优质AI工具资源，让用户轻松发现所需服务
          </div>
        </div>
        <div class="mission-point">
          <div class="mission-icon">🚀</div>
          <div class="mission-text">
            降低AI技术应用门槛，助力个人和企业提升效率
          </div>
        </div>
        <div class="mission-point">
          <div class="mission-icon">🌐</div>
          <div class="mission-text">
            构建开放共享平台，促进AI社区资源共享与协作
          </div>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>平台特色</h2>
      <div class="features">
        <div class="feature">
          <h3>精选AI工具</h3>
          <p>严格筛选市场上最优质的AI工具，确保每个推荐都具有实用价值</p>
        </div>
        <div class="feature">
          <h3>分类导航</h3>
          <p>根据功能和应用场景进行科学分类，让您快速找到合适的工具</p>
        </div>
        <div class="feature">
          <h3>实时更新</h3>
          <p>持续关注AI领域动态，及时更新最新、最热门的AI工具</p>
        </div>
        <div class="feature">
          <h3>开源共建</h3>
          <p>平台代码完全开源，欢迎社区贡献优质AI工具资源</p>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>技术实现</h2>
      <p>AIHub采用现代前端技术栈构建，追求简洁高效的用户体验：</p>
      <div class="tech-stack">
        <div class="tech">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            alt="Vue.js"
          />
          <span>Vue.js</span>
        </div>
        <div class="tech">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <span>JavaScript</span>
        </div>
        <div class="tech">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <span>CSS3</span>
        </div>
        <div class="tech">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          <span>GitHub</span>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>开发团队</h2>
      <p>
        AIHub由一群热爱AI技术的开发者共同创建和维护，我们欢迎所有人参与到这个项目中来。
      </p>
      <div class="team">
        <div class="team-member">
          <img
            src="https://github.com/IdealDestructor.png"
            alt="Francis"
            class="avatar"
          />
          <h3>Francis</h3>
          <p>项目创始人 & 主要维护者</p>
          <div class="social-links">
            <a href="https://github.com/IdealDestructor" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
        <!-- 可以添加更多团队成员 -->
      </div>
    </div>

    <div class="about-section">
      <h2>参与贡献</h2>
      <p>AIHub是一个开源项目，我们鼓励并欢迎各种形式的贡献：</p>
      <ul class="contribution-list">
        <li>提交优质AI工具信息</li>
        <li>优化用户界面和体验</li>
        <li>完善功能和修复问题</li>
        <li>提供使用反馈和建议</li>
      </ul>
      <div class="github-link">
        <a
          href="https://github.com/IdealDestructor/aiHub"
          target="_blank"
          class="btn primary"
        >
          <i class="fab fa-github"></i> GitHub仓库
        </a>
      </div>
    </div>

    <div class="about-section">
      <h2>未来规划</h2>
      <p>我们计划在未来添加更多功能来丰富平台体验：</p>
      <div class="roadmap">
        <div class="roadmap-item">
          <div class="roadmap-icon">📊</div>
          <div class="roadmap-content">
            <h3>工具评分与评论</h3>
            <p>允许用户对AI工具进行评分和评论，分享使用体验</p>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-icon">🔖</div>
          <div class="roadmap-content">
            <h3>个人收藏功能</h3>
            <p>支持用户收藏常用工具，打造个性化导航</p>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-icon">📱</div>
          <div class="roadmap-content">
            <h3>移动应用</h3>
            <p>开发移动端应用，随时随地访问AI工具</p>
          </div>
        </div>
      </div>
    </div>

    <div class="back-btn">
      <router-link to="/" class="btn primary">
        <i class="fas fa-arrow-left"></i> 返回首页
      </router-link>
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

.about-hero {
  margin-top: 4.5rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
    text-align: center;
  }
}

.tagline {
  font-size: 1.4rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

.about-section {
  margin-bottom: 4rem;
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.about-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.8rem;
}

.about-section p {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.mission-points {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.mission-point {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--bg-primary);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.mission-point:hover {
  transform: translateY(-5px);
}

.mission-icon {
  font-size: 2rem;
  line-height: 1;
}

.mission-text {
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--text-primary);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.feature {
  padding: 1.5rem;
  background-color: var(--bg-primary);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: var(--primary-color);
}

.feature p {
  margin-bottom: 0;
  line-height: 1.5;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.tech {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.tech img {
  width: 50px;
  height: 50px;
}

.tech span {
  color: var(--text-secondary);
}

.team {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary-color);
}

.team-member h3 {
  margin: 0.8rem 0 0.2rem;
  color: var(--text-primary);
}

.team-member p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-links a {
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: color 0.2s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}

.contribution-list {
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

.contribution-list li {
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
}

.github-link {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.roadmap {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.roadmap-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--bg-primary);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.roadmap-item:hover {
  transform: translateX(10px);
}

.roadmap-icon {
  font-size: 2rem;
  line-height: 1;
}

.roadmap-content h3 {
  margin: 0 0 0.5rem;
  color: var(--primary-color);
}

.roadmap-content p {
  margin: 0;
  line-height: 1.5;
}

.back-btn {
  margin-top: 3rem;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  transition: var(--transition);
}

.primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
}

.primary:hover {
  background-color: #5646e0;
  box-shadow: var(--glow);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .mission-points,
  .features {
    grid-template-columns: 1fr;
  }

  .about-section {
    padding: 1.5rem;
  }
}
</style>
