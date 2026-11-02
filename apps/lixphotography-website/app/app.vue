<template>
  <div><NuxtLayout><NuxtPage /></NuxtLayout><ConnectionStatusOverlay /><CookieBanner /></div>
</template>
<script setup lang="ts">
const { initializeTheme } = useTheme();
onMounted(initializeTheme);
</script>
