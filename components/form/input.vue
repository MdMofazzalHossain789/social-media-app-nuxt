<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "label",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label class="capitalize" :for="label">
      {{ label }}
    </label>
    <input
      :id="label"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(e) => emits('update:modelValue', e.target.value)"
      class="px-4 bg-zinc-400/10 py-2 rounded-full focus:bg-blue-500/5 outline-0 ring-2 ring-zinc-700 focus:ring-blue-500 transition duration-300 placeholder:text-zinc-500"
    />
  </div>
</template>
