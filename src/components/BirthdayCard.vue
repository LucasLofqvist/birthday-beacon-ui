<script setup></script>

<template>
  <div class="birthday-card">
    <section class="time-of-event">
      <h2 class="month">Jan</h2>
      <h3 class="date">15</h3>
    </section>
    <section class="event-details">
      <p class="contacts-name">
        John Doe'ssaddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </p>
      <p class="event-type">Birthday</p>
    </section>
  </div>
</template>

<style scoped>
.birthday-card {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
}

.time-of-event {
  background-color: lightcoral;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 5px;
  border-top-left-radius: 10px;
}

.month {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  align-self: center;
  justify-self: center;
}

.date {
  font-size: 3rem;
  font-weight: bold;
  align-self: center;
  justify-self: center;
}

.event-details {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100px;
  border-bottom-right-radius: 10px;
}

.contacts-name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.event-type {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
</style>
