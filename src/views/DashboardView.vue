<script setup>
import BirthdayCard from "../components/BirthdayCard.vue";
</script>

<template>
  <div class="dashboard-content">
    <div class="birthday-carousel">
      <BirthdayCard />
      <BirthdayCard />
      <BirthdayCard />
    </div>

    <hr />
  </div>
</template>

<style scoped>
.dashboard-content {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: solid 1px darkgray;
}
</style>
