import { createRouter, createWebHistory } from "vue-router";

// 添加隐私政策路由
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import AboutPage from "../views/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue"),
    meta: {
      title: "AIHub | 一站式 AI 工具平台",
    },
  },
  {
    path: "/aiHub",
    name: "aiHub",
    component: () => import("../views/HomePage.vue"),
    meta: {
      title: "AIHub | 一站式 AI 工具平台",
    },
  },
  {
    path: "/about",
    name: "aboutUs",
    component: AboutPage,
    meta: {
      title: "AIHub | 关于",
    },
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    meta: {
      title: "AIHub | 隐私政策",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFoundPage.vue"),
    meta: {
      title: "页面未找到",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 路由标题处理
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "AIHub";
  next();
});

export default router;
