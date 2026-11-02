<template>
  <button
    type="button"
    class="group relative inline-flex h-11 w-[94px] items-center rounded-full border border-brand-gold/20 bg-card/75 px-1 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur transition duration-300 hover:border-brand-gold/40"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :aria-pressed="isDark"
    @click="toggleTheme"
  >
    <span
      class="absolute top-1 h-9 w-9 rounded-full bg-brand-gold shadow-[0_10px_24px_rgba(201,151,77,0.3)] transition duration-300"
      :class="isDark ? 'translate-x-[44px]' : 'translate-x-0'"
    />
    <span class="relative z-10 grid w-full grid-cols-2 text-brand-ink">
      <span class="flex justify-center">
        <svg
          class="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"
          />
        </svg>
      </span>
      <span class="flex justify-center">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 13.1A8.8 8.8 0 0 1 10.9 3a8.8 8.8 0 1 0 10.1 10.1Z" />
        </svg>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useTheme();
</script>
