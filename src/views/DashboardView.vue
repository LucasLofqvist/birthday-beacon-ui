<script setup>
import BirthdayCard from "../components/BirthdayCard.vue";
import SuggestionCard from "../components/SuggestionCard.vue";
import SavedList from "../components/SavedList.vue";

import edit from "../assets/icons/edit-pen.svg";
import profile from "../assets/icons/profile-placeholder.svg";
</script>

<template>
  <div class="dashboard-content">
    <div class="birthday-carousel">
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
    </div>

    <hr />

    <section id="main-container">
      <section id="main-header">
        <h2 id="contact-name">Contacts name</h2>

        <div id="contact-actions">
          <img :src="edit" alt="Button for editing contact" id="edit-button" />
          <img :src="profile" alt="Contact profile image" id="profile-image" />
        </div>
      </section>

      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />

      <SavedList />
    </section>
  </div>
</template>

<style scoped>
.dashboard-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.carusel-title {
  justify-self: center;
}

.birthday-carousel {
  width: 100%;
  display: flex;
  margin: 20px 0 20px 0;
  align-items: center;
  justify-content: space-around;
}

hr {
  width: 95%;
  align-self: center;
  border: solid 1px darkgray;
}

#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

#main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

#contact-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

#edit-button {
  width: 20px;
  height: 20px;
}

#profile-image {
  width: 30px;
  height: 30px;
}
</style>
