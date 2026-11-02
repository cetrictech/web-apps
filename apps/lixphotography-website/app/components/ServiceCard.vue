<template>
  <article class="premium-panel-soft motion-surface flex h-full flex-col rounded-[30px] p-6">
    <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">Premium Service</p>
    <h3 class="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground">
      {{ service.title }}
    </h3>
    <p class="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
      {{ service.description }}
    </p>
    <div class="mt-6">
      <BaseButton href="#contact" variant="ghost" size="sm">{{ service.ctaLabel }}</BaseButton>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ServiceItem } from '~/data/site';

defineProps<{
  service: ServiceItem;
}>();
</script>
