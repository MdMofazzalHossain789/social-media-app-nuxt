<script setup>
const { useAuthUser } = useAuth();
const { getTweets } = useTweet();
const { border } = useTailwind();

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
  <div class="flex-1 flex flex-col border-x" :class="border">
    <PageTitle title="Home / Twitter" />
    <Header>
      <Title>Home / Twitter</Title>
    </Header>
    <div class="h-fit w-full">
      <TweetForm />
    </div>

    <div class="flex-1 flex flex-col w-full overflow-y-auto">
      <div v-if="isFetchingPost">
        <TweetSkeleton />
        <TweetSkeleton />
        <TweetSkeleton />
        <TweetSkeleton />
      </div>
      <div v-else class="w-full h-full">
        <TweetList :tweets="tweets" />
      </div>
    </div>
  </div>
</template>
