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

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  width: 100%;
}
</style>
