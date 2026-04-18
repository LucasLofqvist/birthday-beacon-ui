<script setup>
import save from "../assets/icons/save.svg";
import refresh from "../assets/icons/refresh.svg";
</script>

<template>
  <div class="suggestion-container">
    <div class="suggestion-card">
      <h3 class="suggestion-title">World of Warcraft Poster</h3>

      <div class="suggestion-content">
        <p class="suggestion-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolorem expedita eius facere minima corporis aut sed rerum illo ipsam
          exercitationem doloribus ad, quasi ratione commodi dolor aspernatur
          natus quia!
        </p>

        <section class="suggestion-info">
          <p class="suggestion-price">$19.99</p>
          <a
            href="https://displate.com/displate/5721669"
            class="suggestion-link"
          >
            View Product
          </a>
        </section>
      </div>
    </div>
    <section class="suggestion-actions">
      <button class="suggestion-action-button">
        <img :src="save" alt="Save" />
      </button>
      <button class="suggestion-action-button">
        <img :src="refresh" alt="Refresh" />
      </button>
    </section>
  </div>
</template>

<style scoped>
.suggestion-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
}

.suggestion-card {
  display: flex;
  flex-direction: column;
  border: solid 2px black;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  align-self: center;
  min-width: 300px;
  min-height: 100px;
}

.suggestion-title {
  justify-content: center;
  align-self: start;
  margin-bottom: 10px;
}

.suggestion-content {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.suggestion-description {
  max-width: 400px;
  max-height: 100px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  overflow: scroll;
}

.suggestion-info {
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
}

.suggestion-price {
  font-weight: bold;
  font-size: 1.7rem;
}

.suggestion-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.suggestion-action-button {
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.suggestion-action-button img {
  width: 30px;
  height: 30px;
}
</style>
