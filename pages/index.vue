<script setup lang="ts">
const { data } = await useAsyncData("index", () =>
  queryCollection("docs").path("/").first(),
);
const { data: all } = await useAsyncData("all", () =>
  queryCollection("docs").all(),
);

const { data: blog } = await useAsyncData("all2", () =>
  queryCollectionNavigation("blog"),
);
</script>

<template>
  <div>{{ JSON.stringify(all) }}</div>
  <div>{{ JSON.stringify(blog) }}</div>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>
    <h1>Page not found</h1>
  </div>
</template>

<style scoped></style>
