<script setup lang="ts">
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  author: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const { name, username, profilePicture } = props.author;
</script>

<template>
  <div class="flex items-center gap-x-4">
    <Avatar class="w-14 h-14" />
    <div class="flex flex-col flex-1">
      <h1 class="font-semibold">{{ name }}</h1>
      <p class="text-sm opacity-80">{{ createdAt }}</p>
    </div>
    <div
      class="flex justify-center items-center min-w-14 min-h-14 rounded-full hover:bg-white/20 cursor-pointer"
    >
      <EllipsisHorizontalIcon class="w-6 h-6" />
    </div>
  </div>
</template>
