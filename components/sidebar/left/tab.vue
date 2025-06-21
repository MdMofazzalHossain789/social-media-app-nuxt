<script setup>
const { defaultTransition } = useTailwind();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const activeClass = computed(() => {
  return props.active ? "font-semibold" : "text-opacity-80";
});
</script>

<template>
  <div
    class="flex items-center gap-x-4 w-min rounded-md hover:bg-black/10 dark:hover:bg-white/10 px-2 py-1 cursor-pointer"
    :class="[defaultTransition, activeClass]"
  >
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="text-xl hidden xl:block">
      <slot name="label"></slot>
    </div>
  </div>
</template>
