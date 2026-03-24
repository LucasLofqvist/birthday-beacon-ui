<script setup>
import { ref } from "vue";

const isHidden = ref(true);
</script>

<template>
  <form>
    <input type="email" placeholder="Email" />
    <input :type="isHidden ? 'password' : 'text'" placeholder="Password" />

    <section>
      <button type="submit">Login</button>
      <!-- <img src="" alt=""> Replace hidden-button with image later -->
      <button type="button" @click="isHidden = !isHidden">
        {{ isHidden ? "Show" : "Hide" }}
      </button>
    </section>

    <section>
      <p>
        Don't have an account?
        <!-- <router-link to="/register">
            Register here.
        </router-link> -->
        <a href="/register">Register here.</a>
      </p>
      <!-- <router-link to="/forgot-password">
        Forgot password?
      </router-link> -->
      <a href="/forgot-password">Forgot password?</a>
    </section>
  </form>
</template>

<style></style>
