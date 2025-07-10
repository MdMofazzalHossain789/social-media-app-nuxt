<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});

const { border } = useTailwind();
</script>

<template>
  <div class="p-4 border-b" :class="border">
    <TweetHeader :author="tweet.author" :createdAt="tweet.createdAt" />
    <TweetContent :text="tweet.text" :mediaFiles="tweet.mediaFiles" />
    <TweetActions />
  </div>
</template>
