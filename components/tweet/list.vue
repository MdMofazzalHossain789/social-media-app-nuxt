<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-y-2 w-full h-full">
    <TweetItem
      v-for="tweet in tweets"
      :key="tweet.id"
      :tweet="tweet"
    ></TweetItem>
  </div>
</template>
