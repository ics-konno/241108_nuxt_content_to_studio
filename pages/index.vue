<script setup lang="ts">
const { data } = await useAsyncData("index", () =>
  queryCollection("docs").path("/").first(),
);
const { data: all } = await useAsyncData("all", () =>
  queryCollection("docs").all(),
);
</script>

<template>
  <div>{{ JSON.stringify(all) }}</div>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>
    <h1>Page not found</h1>
  </div>
</template>

<style scoped></style>
