<script setup>
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/vue/24/outline";
const { defaultTransition } = useTailwind();
</script>

<template>
  <div class="h-screen flex justify-center">
    <div class="h-full flex flex-col py-4 gap-y-2">
      <div
        class="w-14 h-14 hover:bg-blue-500/30 rounded-full p-2 cursor-pointer"
        :class="defaultTransition"
      >
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <SidebarLeftTab :active="false">
        <template #icon>
          <HomeIcon class="w-10 h-10" />
        </template>
        <template #label> Home </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <HashtagIcon class="w-10 h-10" />
        </template>
        <template #label> Explore </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <BellIcon class="w-10 h-10" />
        </template>
        <template #label> Notification </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <InboxIcon class="w-10 h-10" />
        </template>
        <template #label> Messages </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <BookmarkIcon class="w-10 h-10" />
        </template>
        <template #label> Bookmarks </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <DocumentTextIcon class="w-10 h-10" />
        </template>
        <template #label> Lists </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <UserIcon class="w-10 h-10" />
        </template>
        <template #label> Profile </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <EllipsisHorizontalCircleIcon class="w-10 h-10" />
        </template>
        <template #label> More </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>
