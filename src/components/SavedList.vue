<script setup>
import { ref } from "vue";

// Place holders for now, will be replaced with actual data from backend
const items = ref([
  {
    itemId: 1,
    title: "World of Warcraft Poster",
    price: "$19.99",
    link: "https://displate.com/displate/5721669",
  },
  {
    itemId: 2,
    title: "Skyrim Map Poster",
    price: "$24.99",
    link: "N/A",
  },
  {
    itemId: 3,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 4,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 5,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 6,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 7,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 8,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 9,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 10,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
  {
    itemId: 11,
    title: "Cyberpunk 2077 Print",
    price: "$29.99",
    link: "N/A",
  },
]);
</script>

<template>
  <div class="ranked-list">
    <div
      v-for="(item, index) in items.slice(0, 10)"
      :key="item.itemId"
      class="ranked-item"
    >
      <div class="row">
        <div class="rank">#{{ index + 1 }}</div>

        <div class="title">
          {{ item.title }}
        </div>

        <div class="price">
          {{ item.price }}
        </div>

        <a class="link" :href="item.link" target="_blank"> View </a>
      </div>

      <hr v-if="index !== 9" />
    </div>
  </div>
</template>

<style scoped>
.ranked-list {
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin-top: 30px;
  max-width: 600px;
  width: 100%;
}

.ranked-item {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
}

.rank {
  font-weight: bold;
  min-width: 40px;
}

.title {
  flex: 1;
}

.price {
  font-weight: bold;
  min-width: 80px;
  text-align: right;
}

.link {
  margin-left: 10px;
  text-decoration: underline;
}

hr {
  width: 95%;
  margin: 0 auto;
  border: none;
  border-top: 1px solid #ccc;
}
</style>
