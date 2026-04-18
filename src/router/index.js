import { createRouter, createWebHistory } from "vue-router";

// Layouts
import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

// Main Views
import DashboardView from "../views/main/DashboardView.vue";

// Auth Views
import LoginView from "../views/auth/LoginView.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: DashboardView,
      },
      // I will add more routes later, contacts, settings, etc.
    ],
  },
  {
    path: "/login",
    component: AuthLayout,
    children: [
      {
        path: "",
        component: LoginView,
      },
      // Here I will add routes like register later.
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
