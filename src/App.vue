<template>
    <div class="app">
        <div class="container">
            <router-view />
            <footer>
                <p>© {{ new Date().getFullYear() }} AIHub | 所有链接指向各自的官方网站</p>
                <nav class="footer-nav">
                    <router-link to="/">首页</router-link>
                    <router-link to="/about">关于我们</router-link>
                </nav>
            </footer>
        </div>
        <ToastNotification v-bind="toastStore.toast" />
    </div>
</template>

<script setup>
    import { useToastStore } from './stores/toastStore'
    import ToastNotification from './components/ToastNotification.vue'

    const toastStore = useToastStore()
</script>

<style scoped>
    .app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .container {
        max-width: var(--container-width);
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 1;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    footer {
        margin-top: auto;
        text-align: center;
        padding: 1rem;
        color: var(--text-secondary);
        font-size: 0.9rem;
        border-top: 1px solid rgba(99, 102, 241, 0.1);
        padding-top: 2rem;
        margin-top: 2rem;
    }

    .footer-nav {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }

    .footer-nav a {
        color: var(--text-secondary);
        text-decoration: none;
        transition: var(--transition);
    }

    .footer-nav a:hover {
        color: var(--primary-color);
    }

    :root {
        --container-width: 1440px;
    }

    @media (min-width: 1920px) {
        :root {
            --container-width: 1680px;
        }
    }
</style>
