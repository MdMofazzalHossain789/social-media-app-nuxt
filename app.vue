<template>
  <div
    class="w-screen h-screen text-black bg-zinc-100 dark:text-white dark:bg-zinc-900"
  >
    <div class="grid grid-cols-12 mx-auto lg:max-w-7xl lg:gap-4 lg:px-4">
      <!-- Left sidebar -->
      <div class="hidden md:block sm:col-span-1 xl:col-span-2">
        <SidebarLeft />
      </div>
      <!-- Main Section -->
      <div class="col-span-12 md:col-span-8 xl:col-span-6">
        <NuxtPage />
      </div>
      <!-- Right sidebar -->
      <div class="hidden md:block md:col-span-3 xl:col-span-4 w-ful">
        <SidebarRight />
      </div>
    </div>
  </div>
</template>
