<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
}
</style>
