<script setup lang="ts">
import { parseDate } from "~/utils/parseDate";
</script>

<template>
  <ul v-if="data" class="list">
    <li v-for="article in data" :key="article.path" class="list_item">
      <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
      <span class="date">{{ parseDate(article.date) }}</span>
      <div v-for="tag in article.tag" :key="tag" class="list_item_tag">
        {{ tag }}
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
