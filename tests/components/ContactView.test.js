import { mountContactView } from "../utils/mountContactView";
import { describe, it, expect } from "vitest";

import ContactView from "../../src/views/main/ContactView.vue";

describe("ContactView", () => {
  it("renders title in create mode", async () => {
    const wrapper = await mountContactView("create");

    const title = wrapper.find('[data-testid="contact-title"]').text();

    expect(title).toBe("New Contact");
  });

  // !!! This test does not take fetched data into account, so will hafto change when that is implemented. !!!
  it("renders title in view mode", async () => {
    const wrapper = await mountContactView("view", { id: 1 });

    const title = wrapper.find('[data-testid="contact-title"]').text();

    expect(title).toContain("Bob Smith");
  });

  it("disables form elements in view mode", async () => {
    const wrapper = await mountContactView("view", { id: 1 });

    const surnameInput = wrapper.find("#surname");
    const lastnameInput = wrapper.find("#lastname");
    const dateInput = wrapper.find("#dateOfBirth");
    const genderSelect = wrapper.find("#gender");
    const minGiftInput = wrapper.find("#minGiftCost");
    const maxGiftInput = wrapper.find("#maxGiftCost");

    const intrestInputs = wrapper.findAll('[data-testid="interest-input"]');

    expect(surnameInput.element.disabled).toBe(true);
    expect(lastnameInput.element.disabled).toBe(true);
    expect(dateInput.element.disabled).toBe(true);
    expect(genderSelect.element.disabled).toBe(true);
    expect(minGiftInput.element.disabled).toBe(true);
    expect(maxGiftInput.element.disabled).toBe(true);

    intrestInputs.forEach((input) => {
      expect(input.element.disabled).toBe(true);
    });
  });

  it("toggles from view to edit mode when edit button is clicked", async () => {
    const wrapper = await mountContactView("view", { id: 1 });

    const button = wrapper.find('[data-testid="edit-btn"]');

    await button.trigger("click");

    const surnameInput = wrapper.find("#surname");

    expect(surnameInput.element.disabled).toBe(false);
  });
});
