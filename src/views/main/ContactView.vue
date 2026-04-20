<script setup>
import { ref } from "vue";

const contactName = ref("Contact Name");
const contactAge = ref(30);

const contact = ref({
  surname: "",
  lastname: "",
  dateOfBirth: "",
  gender: "",
  maxGiftCost: "",
  minGiftCost: "",
  interests: "",
});
</script>

<template>
  <div class="contact-container">
    <h1 class="contact-title">{{ contactName }} - {{ contactAge }}</h1>
    <form class="contact-form">
      <!-- Left section: contact details -->
      <section class="left-section">
        <div class="form-group">
          <label for="surname">Surname</label>
          <input v-model="contact.surname" type="text" id="surname" />
        </div>

        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input v-model="contact.lastname" type="text" id="lastname" />
        </div>

        <div class="form-group">
          <label for="dateOfBirth">Date of birth</label>
          <input v-model="contact.dateOfBirth" type="date" id="dateOfBirth" />
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
          <label for="maxGiftCost">Max-gift cost</label>
          <input v-model="contact.maxGiftCost" type="number" id="maxGiftCost" />
        </div>

        <div class="form-group">
          <label for="minGiftCost">Min-gift cost</label>
          <input v-model="contact.minGiftCost" type="number" id="minGiftCost" />
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
