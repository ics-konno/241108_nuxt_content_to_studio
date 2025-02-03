<script setup lang="ts">
const { data } = await useAsyncData("test", () =>
  queryCollection("test").first(),
);
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>

<style scoped></style>
