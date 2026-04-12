<script setup></script>

<template>
  <div class="suggestion-card">
    <h3 class="suggestion-title">World of Warcraft Poster</h3>

    <div class="suggestion-content">
      <p class="suggestion-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        voluptate.
      </p>

      <section class="suggestion-actions">
        <p class="suggestion-price">$19.99</p>
        <a href="https://displate.com/displate/5721669" class="suggestion-link">
          View Product
        </a>
      </section>
    </div>
  </div>
</template>

<style scoped>
.suggestion-card {
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  align-self: center;
  max-width: 600px;
}

.suggestion-title {
  justify-content: center;
  align-self: start;
  margin-bottom: 10px;
}

.suggestion-content {
  display: flex;
  gap: 10px;
}

.suggestion-description {
  flex: 1;
}

.suggestion-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.suggestion-price {
  font-weight: bold;
}
</style>
