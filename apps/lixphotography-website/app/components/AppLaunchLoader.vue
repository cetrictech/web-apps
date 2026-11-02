<template>
  <div class="app-launch-loader" role="status" aria-live="polite" aria-label="Loading Lix Photography">
    <div class="launch-loader-content">
      <UAvatar
        src="/images/logo/logo.jpeg"
        alt="Lix Photography logo"
        class="launch-loader-avatar"
        :ui="{ root: 'rounded-full', image: 'object-contain' }"
      />
      <p class="launch-loader-title">A little light. A lasting story.</p>
      <UProgress
        :model-value="null"
        :get-value-text="() => 'Preparing the photography website'"
        size="xs"
        aria-label="Preparing the photography website"
        class="launch-loader-progress"
        :ui="{ base: 'bg-[var(--border)]', indicator: 'bg-[var(--primary)]' }"
      />
      <span class="sr-only">Loading Lix Photography. Please wait.</span>
    </div>
  </div>
</template>

<style scoped>
.app-launch-loader {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: grid;
  place-items: center;
  padding: 24px;
  background: var(--background);
  color: var(--foreground);
}
.launch-loader-content { display: flex; flex-direction: column; align-items: center; gap: 24px; }
.launch-loader-avatar { width: 112px; height: 112px; border: 1px solid var(--primary); background: #0a0a0a; }
.launch-loader-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 25px; }
.launch-loader-progress { width: 180px; }
</style>
