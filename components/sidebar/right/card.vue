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
    class="border-1 py-4 text-black bg-white dark:bg-zinc-900 dark:text-white rounded-3xl flex flex-col"
    :class="[defaultTransition, border]"
  >
    <h1
      class="px-6 text-2xl font-semibold border-b-1 pb-4 dark:border-white/30 border-black/30"
    >
      {{ title }}
    </h1>
    <slot></slot>
    <div
      class="capitalize text-blue-500 hover:bg-blue-500/20 cursor-pointer px-4 py-1 rounded-md max-w-fit mx-4 mt-4"
    >
      Show More
    </div>
  </div>
</template>
