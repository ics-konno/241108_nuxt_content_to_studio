<script setup lang="ts"></script>

<template>
  <ContentNavigation>
    <template #default="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" class="link">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </template>
  </ContentNavigation>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
  padding: 0;
}

.link {
  color: inherit;
}
.router-link-active {
  font-weight: bold;
}
</style>
