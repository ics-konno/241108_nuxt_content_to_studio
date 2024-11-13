<script setup lang="ts"></script>

<template>
  <main class="article">
    <div>
      <NuxtLink class="back" to="/blog">←もどる</NuxtLink>
    </div>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <h1 class="title">{{ doc.title }}</h1>
          <p class="date">{{ parseDate(doc.date) }}</p>
          <ContentRenderer :value="doc">
            <ContentRendererMarkdown :value="doc" />
          </ContentRenderer>
        </article>
      </template>
      <template #not-found> <h1>記事が見つかりませんでした</h1></template>
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
