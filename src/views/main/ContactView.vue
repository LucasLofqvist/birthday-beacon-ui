<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import edit from "../../assets/icons/edit-pen.svg";

const route = useRoute();
//Mode create or view, will be able to go from view to edit through a button.
const mode = ref(route.name === "create" ? "create" : "view");

// Simulated contact data fetching
function fetchContact() {
  return {
    surname: "Bob",
    lastname: "Smith",
    dateOfBirth: "1991-05-15",
    gender: "male",
    minGiftCost: 100,
    maxGiftCost: 500,
    interests: ["Movies", "Cooking", "Traveling"],
  };
}

function emptyContact() {
  return {
    surname: "",
    lastname: "",
    dateOfBirth: "",
    gender: "",
    minGiftCost: 0,
    maxGiftCost: 0,
    interests: [""],
  };
}

const contact = ref(mode.value === "create" ? emptyContact() : fetchContact());

const addInterest = () => {
  if (
    contact.value.interests.length < 10 &&
    contact.value.interests[contact.value.interests.length - 1].trim() !== ""
  ) {
    contact.value.interests.push("");
  }
};

const removeInterest = (index) => {
  contact.value.interests.splice(index, 1);
};

const saveContact = () => {
  // Logic to be added later
  console.log("Saving contact:", contact.value);
};

const deleteContact = () => {
  // Logic to be added later
  console.log("Deleting contact");
};

//Ensures that contactName or "New contact" is rendered
const viewTitle = computed(() => {
  if (mode.value === "view" || mode.value === "edit") {
    return `${contact.value.surname} ${contact.value.lastname}`;
  }
  return "New Contact";
});

//Calculates contacts age based on date of birth
const contactAge = computed(() => {
  if (mode.value === "view" || mode.value === "edit") {
    const contactsDate = new Date(contact.value.dateOfBirth);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    let age = currentYear - contactsDate.getFullYear();
    if (
      currentMonth < contactsDate.getMonth() + 1 ||
      (currentMonth === contactsDate.getMonth() + 1 &&
        currentDay < contactsDate.getDate())
    ) {
      age--;
    }
    return age;
  }
});

const minGiftCost = computed({
  get() {
    return contact.value.minGiftCost;
  },
  set(value) {
    if (value < 0) {
      value = 0;
    }
    contact.value.minGiftCost = value;
    if (contact.value.maxGiftCost < value) {
      contact.value.maxGiftCost = value;
    }
  },
});

const maxGiftCost = computed({
  get() {
    return contact.value.maxGiftCost;
  },
  set(value) {
    if (value < 0) {
      value = 0;
    }
    contact.value.maxGiftCost = value;
    if (contact.value.minGiftCost > value) {
      contact.value.minGiftCost = value;
    }
  },
});

//Used to limit the DoB input options
const maxDate = new Date().toISOString().split("T")[0];
</script>

<template>
  <div class="contact-container">
    <div class="header-section">
      <h1 class="contact-title" data-testid="contact-title">
        {{
          mode === "view" || mode === "edit"
            ? `${viewTitle} - ${contactAge}`
            : viewTitle
        }}
      </h1>
      <button
        v-if="mode === 'view' || mode === 'edit'"
        @click="mode === 'view' ? (mode = 'edit') : (mode = 'view')"
        class="edit-btn"
        :class="{ active: mode === 'edit' }"
        title="Edit contact"
      >
        <img :src="edit" alt="Edit" />
      </button>
    </div>
    <form class="contact-form" @submit.prevent="saveContact">
      <!-- Left section: contact details -->
      <section class="left-section">
        <div class="form-group">
          <label for="surname">Surname *</label>
          <input
            v-model="contact.surname"
            type="text"
            id="surname"
            :disabled="mode === 'view'"
          />
        </div>

        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input
            v-model="contact.lastname"
            type="text"
            id="lastname"
            :disabled="mode === 'view'"
          />
        </div>

        <div class="form-group">
          <label for="dateOfBirth">Date of birth *</label>
          <input
            v-model="contact.dateOfBirth"
            type="date"
            id="dateOfBirth"
            :max="maxDate"
            :disabled="mode === 'view'"
          />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select
            v-model="contact.gender"
            id="gender"
            :disabled="mode === 'view'"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="minGiftCost">Min-gift cost</label>
          <input
            v-model.lazy.number="minGiftCost"
            type="number"
            id="minGiftCost"
            :min="0"
            :disabled="mode === 'view'"
          />
        </div>

        <div class="form-group">
          <label for="maxGiftCost">Max-gift cost</label>
          <input
            v-model.lazy.number="maxGiftCost"
            type="number"
            id="maxGiftCost"
            :min="minGiftCost"
            :disabled="mode === 'view'"
          />
        </div>
      </section>

      <!-- Right section: interests -->
      <section class="right-section">
        <div class="form-group interests-group">
          <label>Interests</label>
          <div class="interests-container">
            <div
              v-for="(interest, index) in contact.interests"
              :key="index"
              class="interest-field-wrapper"
            >
              <input
                v-model="contact.interests[index]"
                type="text"
                :placeholder="`Interest ${index + 1}`"
                class="interest-input"
                data-testid="interest-input"
                :disabled="mode === 'view'"
              />
              <button
                v-if="mode === 'create' || mode === 'edit'"
                type="button"
                @click.prevent="removeInterest(index)"
                :disabled="contact.interests.length <= 1"
                class="remove-interest-btn"
              >
                Remove
              </button>
            </div>
          </div>
          <button
            v-if="
              (mode === 'create' || mode === 'edit') &&
              contact.interests.length < 10
            "
            type="button"
            @click.prevent="addInterest()"
            :disabled="
              contact.interests.length >= 10 ||
              contact.interests[contact.interests.length - 1].trim() === ''
            "
            class="add-interest-btn"
          >
            Add Interest
          </button>
        </div>
      </section>
      <section class="bottom-section">
        <button
          v-if="mode === 'create' || mode === 'edit'"
          type="submit"
          class="save-btn"
        >
          Save {{ mode === "create" ? "Contact" : "Changes" }}
        </button>
      </section>
    </form>

    <button
      v-if="mode === 'edit'"
      type="button"
      @click.prevent="deleteContact"
      class="delete-btn"
    >
      Delete Contact
    </button>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 16px;
}

.contact-title {
  margin: 0;
  flex: 1;
}

.edit-btn {
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.2s;
}

.edit-btn.active {
  transform: scale(0.9);
  box-shadow:
    inset 2px 2px 6px rgba(0, 0, 0, 0.25),
    inset -2px -2px 6px rgba(255, 255, 255, 0.7);
}

.edit-btn img {
  width: 26px;
  height: 26px;
}

.contact-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.right-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group select {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.interests-group {
  flex: 1;
}

.interests-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.interest-field-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
}

.interest-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.remove-interest-btn,
.add-interest-btn {
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.remove-interest-btn:hover:not(:disabled),
.add-interest-btn:hover:not(:disabled) {
  background-color: #e0e0e0;
}

.remove-interest-btn:disabled,
.add-interest-btn:disabled {
  background-color: #f5f5f5;
  border-color: #ddd;
  cursor: not-allowed;
  opacity: 0.6;
}

.add-interest-btn {
  margin-top: 8px;
}

.bottom-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 15px;
  flex-basis: 100%;
  width: 100%;
}

.save-btn {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  min-width: 140px;
}

.save-btn {
  background-color: #2196f3;
  color: white;
}

.save-btn:hover {
  background-color: #0b7dda;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #da190b;
}
</style>
