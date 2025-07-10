<script setup lang="ts">
import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex items-center justify-around gap-x-4 pt-2">
    <div
      class="flex justify-center items-center min-w-14 min-h-14 rounded-full hover:bg-white/20 cursor-pointer"
    >
      <HeartIcon class="w-6 h-6" />
    </div>
    <div
      class="flex justify-center items-center w-14 min-h-14 rounded-full hover:bg-white/20 cursor-pointer"
    >
      <ChatBubbleBottomCenterIcon class="w-6 h-6" />
    </div>
    <div
      class="flex justify-center items-center min-w-14 min-h-14 rounded-full hover:bg-white/20 cursor-pointer"
    >
      <ShareIcon class="w-6 h-6" />
    </div>
  </div>
</template>
