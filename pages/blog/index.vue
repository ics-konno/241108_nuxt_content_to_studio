<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";
import { parseDate } from "../../utils/parseDate";

const query: QueryBuilderParams = {
  sort: [{ date: -1 }],
};
</script>

<template>
  <main>
    <ContentList v-slot="{ list }" :query="query" path="/blog">
      <ul class="list">
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          <span class="date">{{ parseDate(article.date) }}</span>
        </li>
      </ul>
    </ContentList>
  </main>
</template>

<style scoped>
.list {
  display: grid;
  gap: 0.5rem;
}
.date {
  font-size: 0.8rem;
  color: #555;
  margin-left: 0.75rem;
}
</style>
