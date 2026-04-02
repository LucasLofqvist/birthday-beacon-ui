<script setup>
import Header from "../components/Header.vue";
</script>

<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <router-view />
    </main>

    <!-- Maybe add Footer later -->
  </div>
</template>

<style scoped></style>
