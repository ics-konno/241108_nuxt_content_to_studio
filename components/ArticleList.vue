<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";
import type { ParsedContent } from "@nuxt/content";
const props = defineProps<{
  list: ParsedContent[];
}>();
</script>

<template>
  <TagLinks />
  <ul class="list">
    <li v-for="article in props.list" :key="article._path">
      <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      <span class="date">{{ parseDate(article.date) }}</span>
    </li>
  </ul>
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
