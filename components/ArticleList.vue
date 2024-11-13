<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";
defineProps<{
  query: QueryBuilderParams;
}>();
</script>

<template>
  <ContentList v-slot="{ list }" :query="query" path="/blog">
    <TagLinks />
    <ul class="list">
      <li v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        <span class="date">{{ parseDate(article.date) }}</span>
      </li>
    </ul>
  </ContentList>
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
