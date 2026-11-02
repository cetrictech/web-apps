<template>
  <section class="section-shell mt-8">
    <div class="container mx-auto grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <RevealBlock v-for="(item, index) in statItems" :key="item.label" :delay="100 + index * 70">
        <article class="premium-panel-soft motion-surface rounded-[28px] p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
            {{ item.label }}
          </p>
          <p class="font-display mt-4 text-5xl font-semibold tracking-tight text-foreground">
            {{ item.value }}
          </p>
          <p class="mt-4 text-sm leading-7 text-muted-foreground">{{ item.detail }}</p>
        </article>
      </RevealBlock>
    </div>
  </section>
</template>

<script setup lang="ts">
import { statItems } from '~/data/site';
</script>
