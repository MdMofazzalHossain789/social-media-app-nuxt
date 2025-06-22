<script setup>
const wh = [
  {
    tag: "spacex",
    count: "155.5k",
  },
  {
    tag: "nasa",
    count: "20.5k",
  },
  {
    tag: "nasa",
    count: "10.5k",
  },
];

const wf = [
  {
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Md Mofazzal Hossain",
    username: "mofazzal",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Md Sabbir Hassan",
    username: "sabBir",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Md Mohammad Rafique",
    username: "mohammad",
  },
];
</script>

<template>
  <div class="p-4 flex flex-col gap-y-4">
    <SidebarRightCard title="What's happening">
      <SidebarRightHashtagItem
        v-for="item in wh"
        :key="item.tag"
        :hashtag="item"
      />
    </SidebarRightCard>
    <SidebarRightCard title="Who to follow">
      <SidebarRightProfileItem
        v-for="item in wf"
        :key="item.username"
        :profile="item"
      />
    </SidebarRightCard>
  </div>
</template>
