<script setup>
import { computed, reactive } from "vue";

//The contact, contactsName and contactAge probably does not need to be reactive
//as they should be stored in a db and fetched when needed.
const contact = reactive({
  surname: "Bob",
  lastname: "Smith",
  dateOfBirth: "",
  gender: "",
  minGiftCost: 0,
  maxGiftCost: 0,
  interests: ["Movies", "Cooking", "Traveling"],
});

const addInterest = () => {
  if (
    contact.interests.length < 10 &&
    contact.interests[contact.interests.length - 1].trim() !== ""
  ) {
    contact.interests.push("");
  }
};

const removeInterest = (index) => {
  contact.interests.splice(index, 1);
};

//Ensures that contactName or "New contact" is rendered
const contactName = computed(() => {
  if (contact.surname !== "") {
    return `${contact.surname} ${contact.lastname}`;
  }
  return "New contact";
});

//Calculates contacts age based on date of birth
const contactAge = computed(() => {
  if (contact.dateOfBirth !== "") {
    const contactsDate = new Date(contact.dateOfBirth);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Months are zero-based
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
    return contact.minGiftCost;
  },
  set(value) {
    if (value < 0) {
      value = 0;
    }
    contact.minGiftCost = value;
    if (contact.maxGiftCost < value) {
      contact.maxGiftCost = value;
    }
  },
});

const maxGiftCost = computed({
  get() {
    return contact.maxGiftCost;
  },
  set(value) {
    if (value < 0) {
      value = 0;
    }
    contact.maxGiftCost = value;
    if (contact.minGiftCost > value) {
      contact.minGiftCost = value;
    }
  },
});

//Used to limit the DoB input options
const maxDate = new Date().toISOString().split("T")[0];
</script>

<template>
  <div class="contact-container">
    <h1 class="contact-title">
      {{
        contact.dateOfBirth !== ""
          ? `${contactName} - ${contactAge}`
          : contactName
      }}
    </h1>
    <form class="contact-form" @submit.prevent>
      <!-- Left section: contact details -->
      <section class="left-section">
        <div class="form-group">
          <label for="surname">Surname *</label>
          <input v-model="contact.surname" type="text" id="surname" />
        </div>

        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input v-model="contact.lastname" type="text" id="lastname" />
        </div>

        <div class="form-group">
          <label for="dateOfBirth">Date of birth *</label>
          <input
            v-model="contact.dateOfBirth"
            type="date"
            id="dateOfBirth"
            :max="maxDate"
          />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select v-model="contact.gender" id="gender">
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
          />
        </div>

        <div class="form-group">
          <label for="maxGiftCost">Max-gift cost</label>
          <input
            v-model.lazy.number="maxGiftCost"
            type="number"
            id="maxGiftCost"
            :min="minGiftCost"
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
              />
              <button
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
    </form>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

.contact-title {
  margin-bottom: 20px;
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
</style>
