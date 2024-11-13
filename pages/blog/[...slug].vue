<script setup lang="ts"></script>

<template>
  <main>
    <div>
      <NuxtLink class="back" to="/blog">←もどる</NuxtLink>
    </div>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="title">{{ doc.title }}</h1>
        <p class="date">{{ parseDate(doc.date) }}</p>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<style scoped>
.back {
  text-decoration: none;
}

.title {
  text-align: center;
}
.date {
  text-align: right;
  color: #555;
}
</style>
