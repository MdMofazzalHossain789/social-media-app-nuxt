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
      <div class="hidden col-span-12 md:col-span-8 xl:col-span-6 bg-green-500">
        Main Content
      </div>
      <!-- Right sidebar -->
      <div
        class="col-span-12 md:block md:col-span-3 xl:col-span-4 w-full bg-purple-500"
      >
        <SidebarRight />
      </div>
    </div>
  </div>
</template>
