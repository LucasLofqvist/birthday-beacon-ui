<script setup>
import logo from "../assets/icons/logo.PNG";
import menu from "../assets/icons/menu-burger.svg";
</script>

<template>
  <header class="header">
    <img :src="logo" alt="Birthday beacon logo" id="logo" />
    <h1>Birthday Beacon</h1>
    <button id="menu-btn">
      <img :src="menu" alt="Menu icon" />
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid darkgray;
  border-radius: 4px;
  font-size: 12px;
  padding: 5px;
}

#logo {
  height: 50px;
  width: 50px;
}

#menu-btn {
  height: 30px;
  width: 30px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition:
    transform 0.1s ease,
    background 0.1s ease;
  -webkit-tap-highlight-color: transparent;
}

#menu-btn:active {
  transform: scale(0.95);
  background: rgba(211, 211, 211, 0.5);
}
</style>
