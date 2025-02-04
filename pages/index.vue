<script setup lang="ts">
const { data } = await useAsyncData("index", () =>
  queryCollection("blog").first(),
);
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>
    <h1>Page not found</h1>
  </div>
</template>

<style scoped></style>
