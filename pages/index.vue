<script setup>
const { useAuthUser } = useAuth();

const user = useAuthUser();
</script>

<template>
  <MainSection title="Home" :loading="false">
    <div>{{ user }}</div>
  </MainSection>
</template>
