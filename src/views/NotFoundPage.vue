<template>
    <div class="not-found">
        <div class="content">
            <h1>404</h1>
            <h2>页面未找到</h2>
            <p>您访问的页面可能已被移除或暂时不可用。</p>
            <router-link to="/" class="btn primary">返回首页</router-link>
        </div>
    </div>
</template>

<style scoped>
    .not-found {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .content {
        background: rgba(30, 32, 56, 0.6);
        padding: 3rem;
        border-radius: 16px;
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        max-width: 600px;
    }

    h1 {
        font-size: 6rem;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
        text-shadow: 0 0 20px rgba(109, 90, 255, 0.8);
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: white;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        color: var(--text-secondary);
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
