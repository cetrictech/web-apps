<template>
  <UApp>
    <div :inert="isLaunchLoading && hasMounted" :aria-busy="isLaunchLoading && hasMounted">
      <NuxtLayout><NuxtPage /></NuxtLayout>
      <ConnectionStatusOverlay />
      <CookieBanner />
    </div>
    <ClientOnly>
      <Transition name="launch-fade">
        <AppLaunchLoader v-if="isLaunchLoading" />
      </Transition>
    </ClientOnly>
  </UApp>
</template>

<script setup lang="ts">
const { initializeTheme } = useTheme();
const isLaunchLoading = ref(true);
const hasMounted = ref(false);
let minimumTimer: ReturnType<typeof setTimeout> | undefined;
let fallbackTimer: ReturnType<typeof setTimeout> | undefined;
let disposed = false;

onMounted(async () => {
  hasMounted.value = true;
  initializeTheme();
  const images = Array.from(document.querySelectorAll<HTMLImageElement>('.hero-art img'));
  const ready = Promise.all(images.map(image => image.decode().catch(() => undefined)));
  const minimum = new Promise(resolve => { minimumTimer = setTimeout(resolve, 650); });
  const fallback = new Promise(resolve => { fallbackTimer = setTimeout(resolve, 4500); });
  await Promise.all([minimum, Promise.race([ready, fallback])]);
  if (disposed) return;
  clearTimeout(fallbackTimer);
  isLaunchLoading.value = false;
});

onBeforeUnmount(() => {
  disposed = true;
  clearTimeout(minimumTimer);
  clearTimeout(fallbackTimer);
});
</script>

<style>
.launch-fade-leave-active { transition: opacity 250ms ease; }
.launch-fade-leave-to { opacity: 0; }
html:has(.app-launch-loader) { overflow: hidden; }
</style>
