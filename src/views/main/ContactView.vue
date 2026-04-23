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
  interests: "",
});

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
    <form class="contact-form">
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
          <label for="interests">Interests</label>
          <textarea
            v-model="contact.interests"
            id="interests"
            class="interests-textarea"
            placeholder="Interest 1, Interest 2, Interest 3, etc."
          ></textarea>
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

.interests-textarea {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  height: 425px;
  font-family: inherit;
}

@media (max-width: 500px) {
  .interests-textarea {
    height: 250px;
  }
}
</style>
