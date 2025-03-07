<template>
    <div class="about-page">
        <h1>关于 AIHub</h1>
        <div class="about-content">
            <p>AIHub是一个精心整理的人工智能工具导航平台，旨在帮助用户快速发现和使用各类优质 AI 工具。</p>
            <p>我们的目标是让每个人都能便捷地找到适合自己需求的 AI 助手，从而提高工作和学习效率。</p>

            <h2>我们的特色</h2>
            <ul>
                <li>精选优质AI工具，覆盖聊天、图像、视频、音频等多个领域</li>
                <li>直观的分类系统，让您快速定位所需工具</li>
                <li>个性化收藏功能，保存您常用的AI助手</li>
                <li>响应式设计，在任何设备上都有良好的浏览体验</li>
            </ul>

            <p>如有任何建议或合作意向，欢迎联系我们。</p>

            <div class="back-btn">
                <router-link to="/" class="btn primary">返回首页</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-page {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        text-align: center;
        color: white;
        text-shadow: 0 0 15px rgba(109, 90, 255, 0.6);
    }

    h2 {
        font-size: 1.8rem;
        margin: 2rem 0 1rem;
        color: white;
    }

    .about-content {
        background: rgba(30, 32, 56, 0.6);
        border-radius: 16px;
        padding: 2rem;
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
    }

    p {
        margin-bottom: 1.5rem;
        line-height: 1.7;
        font-size: 1.1rem;
    }

    ul {
        margin-bottom: 2rem;
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.8rem;
        line-height: 1.6;
    }

    .back-btn {
        margin-top: 2rem;
        text-align: center;
    }

    .btn {
        display: inline-block;
        padding: 0.8rem 1.8rem;
        border-radius: 8px;
        text-decoration: none;
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
</style>
