<template>
  <ClientOnly>
    <aside v-if="!hasChoice || settingsOpen" aria-labelledby="cookie-heading"
      class="fixed inset-x-3 bottom-3 z-[400] mx-auto max-h-[85dvh] max-w-3xl overflow-y-auto rounded-[26px] border border-brand-gold/30 bg-background p-5 text-foreground shadow-2xl sm:p-6">
      <h2 id="cookie-heading" class="font-display text-2xl font-semibold">Your privacy, your choice</h2>
      <p class="mt-2 text-sm leading-6 text-muted-foreground">
        We use an essential cookie to remember your choice for 180 days. With your permission,
        we also save your light or dark theme on this browser. We use no analytics or advertising cookies.
        <NuxtLink to="/privacy" class="underline underline-offset-4">Privacy &amp; cookies</NuxtLink>
      </p>
      <label class="mt-4 flex cursor-pointer items-start gap-3 text-sm">
        <input v-model="preferences" type="checkbox" class="mt-1 h-4 w-4 accent-brand-gold" />
        <span>Remember my theme <span class="text-muted-foreground">(optional browser storage)</span></span>
      </label>
      <div class="mt-5 flex flex-wrap gap-3">
        <button type="button" class="cookie-action" @click="saveChoice(false)">Essential only</button>
        <button type="button" class="cookie-action" @click="saveChoice(true)">Accept preferences</button>
        <button type="button" class="cookie-action" @click="saveChoice(preferences)">Save my choice</button>
      </div>
    </aside>
  </ClientOnly>
</template>

<script setup lang="ts">
const { hasChoice, allowPreferences, settingsOpen, saveChoice } = useCookieConsent();
const preferences = ref(allowPreferences.value);
watch(settingsOpen, (open) => { if (open) preferences.value = allowPreferences.value; });
</script>

<style scoped>
.cookie-action {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
}
.cookie-action:hover { border-color: var(--primary); background: var(--accent); }
.cookie-action:focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; }
</style>
