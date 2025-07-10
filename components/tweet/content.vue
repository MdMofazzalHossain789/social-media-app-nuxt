<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  mediaFiles: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="pt-4">
    <p>
      {{ text }}
    </p>

    <img
      v-if="mediaFiles && mediaFiles.length > 0"
      :src="mediaFiles[0].url"
      class="bg-gray-500 rounded-md h-[300px] w-full my-2 object-cover"
    ></img>
  </div>
</template>
