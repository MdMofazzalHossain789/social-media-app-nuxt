<script setup>
import { reactive } from "vue";
import LoadingSpinner from "./loading-spinner.vue";

const data = reactive({
  username: "",
  password: "",
  loading: false,
});

const handleSubmit = async () => {
  const { login } = useAuth();

  data.loading = true;
  try {
    await login({ username: data.username, password: data.password });
  } catch (error) {
  } finally {
    data.loading = false;
  }
};
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="flex flex-col gap-y-4">
      <div class="text-center flex flex-col gap-y-2 mb-4">
        <h1 class="text-3xl font-bold">Log In</h1>
        <p class="text-lg text-zinc-300">
          Provide username and password to continue.
        </p>
      </div>

      <form class="flex flex-col gap-y-4" @submit.prevent="handleSubmit">
        <FormInput
          label="Username"
          placeholder="example: mofazzal"
          v-model="data.username"
        />
        <FormInput
          label="Password"
          placeholder="******"
          type="password"
          v-model="data.password"
        />
        <button
          class="w-full bg-blue-500 rounded-full py-2 active:bg-blue-500/70 duration-300 cursor-pointer outline-0 flex items-center justify-center gap-x-4 disabled:bg-zinc-600 disabled:text-zinc-400 disabled:cursor-not-allowed"
        >
          <LoadingSpinner v-if="data.loading" />
          {{ data.loading ? "Signing In" : "Sign In" }}
        </button>
      </form>
    </div>
  </div>
</template>
