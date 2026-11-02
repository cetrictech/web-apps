<template>
  <section id="testimonials" class="section-shell mt-24">
    <div class="container mx-auto">
      <RevealBlock>
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from clients who wanted quality, professionalism, and a beautiful final result."
          description="These testimonials reflect the same service standards shown in the family, graduation, and corporate sample work across the site."
          align="center"
        />
      </RevealBlock>

      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <RevealBlock
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          :delay="100 + index * 70"
        >
          <article class="premium-panel-soft motion-surface h-full rounded-[30px] p-6">
            <div class="flex items-center gap-2 text-brand-gold">
              <span v-for="star in 5" :key="star" class="text-lg leading-none">★</span>
            </div>
            <p class="mt-5 text-base leading-8 text-foreground/92">"{{ testimonial.quote }}"</p>
            <div class="mt-8 border-t border-border pt-5">
              <p class="font-display text-2xl font-semibold tracking-tight text-foreground">
                {{ testimonial.name }}
              </p>
              <p class="mt-1 text-sm text-muted-foreground">{{ testimonial.role }}</p>
              <p
                class="mt-3 inline-flex rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold"
              >
                {{ testimonial.service }}
              </p>
            </div>
          </article>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from '~/data/site';
</script>
