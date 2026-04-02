<script setup>
import BirthdayCard from "../components/BirthdayCard.vue";
</script>

<template>
  <div class="dashboard-content">
    <section class="carusel-section">
      <h2>Upcoming Birthdays</h2>
      <div class="birthday-carousel">
        <BirthdayCard />
        <BirthdayCard />
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard-content {
  border: 1px solid green;
}
</style>
