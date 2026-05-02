<script setup>
import { ref } from "vue";
import logo from "../../assets/icons/logo.PNG";
import eye_on from "../../assets/icons/eye-on.svg";
import eye_off from "../../assets/icons/eye-off.svg";

const isHidden = ref(true);
</script>

<template>
  <div id="login-container">
    <div id="header">
      <h1 alt="Title">Birthday Beacon</h1>
      <img :src="logo" alt="Birthday beacon logo" id="logo" />
    </div>

    <form>
      <input type="email" placeholder="Email" />
      <input :type="isHidden ? 'password' : 'text'" placeholder="Password" />

      <button type="button" @click="isHidden = !isHidden" id="hidden-btn">
        <img
          v-bind:src="isHidden ? eye_off : eye_on"
          alt="Visibility toggle"
          id="eye"
        />
      </button>

      <button type="submit" id="login-btn">Login</button>
    </form>

    <hr />

    <section id="account-section">
      <p>
        Don't have an account?
        <!-- <router-link to="/register">
            Register here.
        </router-link> -->
        <a href="/register">Register here</a>
      </p>
      <!-- <router-link to="/forgot-password">
        Forgot password?
      </router-link> -->
      <p>
        Forgot your password?
        <a href="/forgot-password">Reset password</a>
      </p>
    </section>
  </div>
</template>

<style scoped>
#login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#header h1 {
  font-size: 2rem;
}

#logo {
  width: 150px;
  height: 150px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 0.75rem;
  margin: 1rem;
  width: 15rem;
}

#eye {
  width: 1rem;
  height: 1rem;
}

#hidden-btn {
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 1rem;
}

#login-btn {
  padding: 0.5rem 1rem;
  width: 7rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  color: rgb(120, 119, 119);
}

hr {
  width: 85%;
  border: 1px solid lightgrey;
  margin: 2rem 0;
}

#account-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
