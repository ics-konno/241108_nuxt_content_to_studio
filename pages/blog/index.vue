<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";
import type { QueryBuilderParams } from "@nuxt/content";

const query: QueryBuilderParams = {
  sort: { date: -1 },
};
</script>

<template>
  <main>
    <TagLinks />
    <ContentList v-slot="{ list }" :query="query" path="/blog">
      <ul class="list">
        <li v-for="article in list" :key="article._path" class="list_item">
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          <span class="date">{{ parseDate(article.date) }}</span>
          <div v-for="tag in article.tag" :key="tag" class="list_item_tag">
            {{ tag }}
          </div>
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
.list_item {
  display: flex;
  align-items: center;
  gap: 8px;
  .list_item_tag {
    font-size: 0.75rem;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 2px 4px;
  }
}
</style>
