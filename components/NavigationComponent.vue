<script setup lang="ts"></script>

<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>

<style scoped></style>
