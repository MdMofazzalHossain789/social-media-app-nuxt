<script setup>
const { border } = useTailwind();
const { createTweet } = useTweet();

const submitting = ref(false);
const text = ref("");

const canSubmit = computed(() => {
  return text.value.length > 0;
});

const handleSubmit = async () => {
  submitting.value = true;
  try {
    const res = await createTweet({ text: text.value });
    text.value = "";

    await refresh();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  submitting.value = false;
};
</script>

<template>
  <div class="py-4 border-b" :class="border">
    <div class="flex p-4">
      <div>
        <div class="w-12 h-12 bg-gray-500 rounded-full"></div>
      </div>
      <textarea
        v-model="text"
        class="w-full h-12 px-4 pt-2 outline-none border-none resize-none max-h-[100px] text-lg"
        placeholder="What's on your mind?"
      ></textarea>
    </div>
    <div class="flex justify-end px-4">
      <button
        class="px-4 py-2 rounded-full font-semibold w-fit cursor-pointer bg-blue-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
        @click="handleSubmit"
        :disabled="submitting || !canSubmit"
      >
        <LoadingSpinner v-if="submitting" />
        <span v-else>Tweet</span>
      </button>
    </div>
  </div>
</template>
