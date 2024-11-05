<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="box">
    {{ props.text }}
  </div>
</template>

<style scoped>
.box {
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid #000;
}
</style>
