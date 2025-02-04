<script setup lang="ts">
const { data } = await useAsyncData("example", () =>
  queryCollection("example").first(),
);
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>

<style scoped></style>
