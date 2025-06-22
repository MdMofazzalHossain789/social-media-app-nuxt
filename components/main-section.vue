<script setup>
const { border } = useTailwind();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="md:border-x w-full h-full overflow-y-auto" :class="border">
    <div class="px-4 bg-white/90 dark:bg-zinc-900/90">
      <h1 class="text-xl font-bold py-4">{{ title }}</h1>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
