<script setup>
const { defaultTransition } = useTailwind();

const props = defineProps(["hashtag"]);
</script>

<template>
  <div
    class="px-4 border-b-1 py-4 border-black/30 dark:border-white/30 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10"
    :class="[defaultTransition]"
  >
    <p class="text-lg flex flex-col">
      <span class="font-semibold">#{{ hashtag.tag }}</span
      ><span class="text-sm opacity-70">{{ hashtag.count }} tweets</span>
    </p>
  </div>
</template>
