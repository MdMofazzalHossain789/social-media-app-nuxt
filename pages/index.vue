<script setup>
const { useAuthUser } = useAuth();
const { getTweets } = useTweet();

const isFetchingPost = ref(true);

const tweets = ref([]);

onMounted(async () => {
  isFetchingPost.value = true;

  try {
    const res = await getTweets();
    tweets.value = res.tweets;

    console.log(tweets.value);
  } catch (error) {
    console.error("Failed to fetch tweets", error);
  }

  isFetchingPost.value = false;
});
const user = useAuthUser();
</script>

<template>
  <div class="flex-1 flex flex-col">
    <div>Home</div>
    <Header>
      <Title>Home / Twitter</Title>
    </Header>
    <div class="h-fit w-full">
      <TweetForm />
    </div>

    <div class="flex-1 flex flex-col w-full overflow-y-auto bg-red-500">
      <div v-if="isFetchingPost">Loading...</div>
      <div v-else class="w-full h-full">
        <div v-for="tweet in tweets" :key="tweet.id" class="">
          <p>{{ tweet.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
