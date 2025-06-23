<script setup>
import { onBeforeMount } from "vue";

const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();

onBeforeMount(() => {
  initAuth();
});
</script>

<template>
  <div
    class="w-screen h-screen text-black bg-zinc-100 dark:text-white dark:bg-zinc-900"
  >
    <LoadingPage v-if="isAuthLoading" />
    <div v-else class="w-full h-full">
      <div v-if="user" class="w-full h-full">
        <div class="grid grid-cols-12 mx-auto lg:max-w-7xl lg:gap-4 lg:px-4">
          <!-- Left sidebar -->
          <div class="hidden md:block sm:col-span-1 xl:col-span-2">
            <SidebarLeft />
          </div>
          <!-- Main Section -->
          <div class="col-span-12 md:col-span-8 xl:col-span-6">
            <NuxtPage></NuxtPage>
          </div>
          <!-- Right sidebar -->
          <div class="hidden md:block md:col-span-3 xl:col-span-4 w-ful">
            <SidebarRight />
          </div>
        </div>
      </div>

      <LoginPage v-else />
    </div>
  </div>
</template>
