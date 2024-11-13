<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";
const route = useRoute();
const query: QueryBuilderParams = {
  sort: [{ date: -1 }],
  where: {
    tag: {
      $contains: route.params.tag,
    },
  },
};
</script>

<template>
  <main>
    <ArticleList :query="query" />
  </main>
</template>

<style scoped></style>
