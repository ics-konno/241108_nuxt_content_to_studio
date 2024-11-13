<script setup lang="ts">
const { data } = await useAsyncData("tag", () =>
  queryContent("blog").where({ $exists: "tag" }).find(),
);
const tags = computed(() =>
  data.value
    .map((article) => article.tag)
    .flat()
    .filter((tag) => !!tag),
);
</script>

<template>
  <ul>
    <li><NuxtLink to="/blog">All</NuxtLink></li>
    <li v-for="tag in tags" :key="tag">
      <NuxtLink :to="`/blog/tag/${tag}`">{{ tag }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  list-style: none;
  gap: 12px;
  li {
    border: 1px solid #333;
    border-radius: 12px;
    transition: 0.2s;
    a {
      display: inline-block;
      padding: 4px 8px;
      text-decoration: none;
      color: #333;
    }
  }
  li:has(a:hover) {
    background-color: #ccc;
  }
}
</style>
