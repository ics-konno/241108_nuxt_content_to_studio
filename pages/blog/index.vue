<script setup lang="ts">
const query = queryContent("blog").sort([{ date: -1 }]);
const { data } = await useAsyncData("blog", () => query.find());
</script>

<template>
  <main>
    <ArticleList :list="data" />
  </main>
</template>

<style scoped></style>
