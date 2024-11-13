<script setup lang="ts"></script>

<template>
  <main>
    <ContentList v-slot="{ list }" path="/blog">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      </div>
    </ContentList>
  </main>
</template>

<style scoped>
main {
  padding: 16px;
}
</style>
