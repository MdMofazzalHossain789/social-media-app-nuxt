<script setup>
const prop = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="px-4 py-2 text-xl font-semibold">{{ title }}</div>
</template>
