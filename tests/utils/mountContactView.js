import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/main/ContactView.vue";

export async function mountContactView(routeName, params = {}) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/contact/create",
        name: "create",
        component: ContactView,
      },
      {
        path: "/contact/view/:id",
        name: "view",
        component: ContactView,
      },
    ],
  });

  await router.push({ name: routeName, params });
  await router.isReady();

  return mount(ContactView, {
    global: {
      plugins: [router],
    },
  });
}
