<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <div class="counter">
    <span>{{ count }}</span>
    <button @click="count++">+1</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
