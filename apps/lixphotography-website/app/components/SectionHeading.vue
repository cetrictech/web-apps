<template>
  <div :class="alignmentClass">
    <p
      class="mb-4 inline-flex items-center gap-3 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold"
    >
      <span class="h-2 w-2 rounded-full bg-brand-gold" />
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
      {{ title }}
    </h2>
    <p class="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    eyebrow: string;
    title: string;
    description: string;
    align?: 'left' | 'center';
  }>(),
  {
    align: 'left',
  },
);

const alignmentClass = computed(() =>
  props.align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
);
</script>
