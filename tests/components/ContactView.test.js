import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { describe, it, expect } from "vitest";

import ContactView from "../../src/views/main/ContactView.vue";

describe("ContactView", () => {
  it("renders create mode title", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/contact/create",
          name: "create",
          component: ContactView,
        },
      ],
    });

    router.push("/contact/create");
    await router.isReady();

    const wrapper = mount(ContactView, {
      global: {
        plugins: [router],
      },
    });

    const title = wrapper.find('[data-test="contact-title"]').text();

    expect(title).toBe("New Contact");
  });
});
