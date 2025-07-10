<script setup lang="ts">
import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div
    class="w-full flex flex-col gap-y-4 p-4 border-b border-gray-500/70 animate-pulse"
  >
    <div class="flex items-center gap-x-4">
      <div>
        <div class="w-14 h-14 rounded-full bg-gray-500 animate-pulse"></div>
      </div>
      <div class="w-full flex flex-col gap-y-2">
        <div class="w-2/5 bg-gray-500 animate-pulse h-4 rounded-md"></div>
        <div class="w-3/10 bg-gray-500 animate-pulse h-2 rounded-md"></div>
      </div>
    </div>
    <div class="flex flex-col gap-y-4 py-4">
      <div class="w-8/10 bg-gray-500 animate-pulse h-3 rounded-md"></div>
      <div class="w-9/10 bg-gray-500 animate-pulse h-3 rounded-md"></div>
      <div class="w-6/10 bg-gray-500 animate-pulse h-3 rounded-md"></div>
    </div>
    <div
      class="flex items-center justify-around gap-x-4 p-3 animate-pulse text-gray-500"
    >
      <HeartIcon class="w-6 h-6" />
      <ChatBubbleBottomCenterIcon class="w-6 h-6" />
      <ShareIcon class="w-6 h-6" />
    </div>
  </div>
</template>
