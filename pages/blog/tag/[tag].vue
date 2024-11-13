<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";
const route = useRoute();
const query: QueryBuilderParams = queryContent("blog")
  .where({
    tag: {
      $contains: route.params.tag ?? [],
    },
  })
  .sort([{ date: -1 }]);
const { data } = await useAsyncData("tag", () => query.find());
</script>

<template>
  <main>
    <ArticleList :list="data" />
  </main>
</template>

<style scoped></style>
