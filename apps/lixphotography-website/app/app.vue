<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in', appear: true }" />
    </NuxtLayout>

    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <AppLaunchLoader v-if="isLaunchLoading" />
    </Transition>

    <ConnectionStatusOverlay />
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const { initializeTheme } = useTheme();
const isLaunchLoading = ref(true);
let hideLoaderFrame = 0;
let hideLoaderFrameFollowUp = 0;

onMounted(() => {
  initializeTheme();

  hideLoaderFrame = window.requestAnimationFrame(() => {
    hideLoaderFrameFollowUp = window.requestAnimationFrame(() => {
      isLaunchLoading.value = false;
    });
  });
});

onBeforeUnmount(() => {
  window.cancelAnimationFrame(hideLoaderFrame);
  window.cancelAnimationFrame(hideLoaderFrameFollowUp);
});
</script>
