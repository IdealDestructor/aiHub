import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomePage.vue'),
        meta: {
            title: 'AI 助手集合 | 首页',
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutPage.vue'),
        meta: {
            title: 'AI 助手集合 | 关于我们',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFoundPage.vue'),
        meta: {
            title: '页面未找到',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

// 路由标题处理
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'AIHub'
    next()
})

export default router
