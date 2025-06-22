<script setup>
const { defaultTransition } = useTailwind();

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="px-4 border-b-1 py-4 border-black/30 dark:border-white/30 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-between"
    :class="[defaultTransition]"
  >
    <div class="flex items-center lg:gap-x-1 xl:gap-x-4">
      <NuxtImg
        :src="profile.avatar"
        class="w-12 h-12 rounded-full bg-gray-500"
      ></NuxtImg>
      <div class="hidden xl:block">
        <h1 class="hidden xl:block">{{ profile.name }}</h1>
        <p class="opacity-70 lowercase">@{{ profile.username }}</p>
      </div>
    </div>
    <div
      class="bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full xl"
    >
      <button class="px-4 py-2 cursor-pointer group">Follow</button>
    </div>
  </div>
</template>
