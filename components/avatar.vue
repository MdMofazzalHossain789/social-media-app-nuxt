<script setup>
const props = defineProps({
  class: {
    type: String,
    default: "w-12 h-12",
  },
});
</script>

<template>
  <div class="rounded-full bg-gray-500" :class="class"></div>
</template>
