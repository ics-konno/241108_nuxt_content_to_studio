<script setup lang="ts">
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation(),
);
</script>

<template>
  <ul>
    <li v-for="link of navigation" :key="link._path">
      <NuxtLink :to="link._path" class="link">{{ link.title }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
  padding: 0;
}

.link {
  color: inherit;
}
.router-link-active {
  font-weight: bold;
}
</style>
