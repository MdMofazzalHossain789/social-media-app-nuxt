<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const { border, defaultTransition } = useTailwind();
</script>

<template>
  <div
    class="px-6 py-4 text-black bg-white dark:bg-zinc-900 dark:text-white rounded-3xl flex flex-col gap-y-4"
    :class="[defaultTransition, border]"
  >
    <h1 class="text-2xl font-semibold">{{ title }}</h1>
    <slot></slot>
    <div
      class="capitalize text-blue-500 hover:bg-blue-500/20 cursor-pointer px-4 py-2 rounded-md"
    >
      Show More
    </div>
  </div>
</template>
