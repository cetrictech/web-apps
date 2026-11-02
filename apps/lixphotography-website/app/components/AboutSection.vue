<template>
  <section id="about" class="scroll-mt-32 section-shell mt-24">
    <div class="container mx-auto grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <RevealBlock effect="left">
        <div class="premium-panel rounded-[34px] p-8">
          <SectionHeading
            eyebrow="About Lix Photography"
            title="A premium photography studio in Kisumu with warmth, taste, and discipline."
            description="Lix Photography blends creative direction, polished studio execution, and thoughtful client service to deliver portraits and event imagery that feel elevated from the first frame to the final gallery."
          />

          <div class="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              The studio is designed for clients who want more than just coverage. Every booking is
              handled with care, from preparation and posing guidance to editing and final delivery.
            </p>
            <p>
              Whether you are planning a portrait refresh, a graduation celebration, a brand
              session, or a special event, the experience is built to feel calm, premium, and
              beautifully organized.
            </p>
          </div>

          <div class="gold-outline mt-8 rounded-[28px] bg-brand-gold/8 p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Visit Our Studio
            </p>
            <p class="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground">
              {{ siteInfo.location }}
            </p>
            <p class="mt-3 text-sm leading-7 text-muted-foreground">
              Book a consultation, preview session direction, and plan your shoot in a polished
              studio environment at Mega City Mall, Ground Floor, Kisumu.
            </p>
          </div>

          <div class="premium-panel-soft mt-6 overflow-hidden rounded-[30px]">
            <div class="relative aspect-[16/11] overflow-hidden">
              <img
                src="/images/studio/studio1.jpeg"
                alt="Lix Photography studio reception at Mega City Mall, Kisumu"
                class="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              >
              <div
                class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]"
              />
              <div class="absolute inset-x-0 bottom-0 p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  Studio Reception
                </p>
                <h3 class="font-display mt-3 text-3xl font-semibold tracking-tight text-brand-warm">
                  A refined welcome before the session begins.
                </h3>
              </div>
            </div>

            <div class="grid gap-4 border-t border-border/70 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <p class="text-sm leading-7 text-muted-foreground">
                The reception area introduces the calm, polished studio atmosphere clients step
                into at Lix Photography before consultations, styling guidance, and portrait
                sessions.
              </p>
              <a
                :href="siteInfo.mapHref"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center rounded-full border border-brand-gold/24 bg-brand-gold/10 px-5 py-3 text-sm font-medium text-foreground transition duration-200 hover:border-brand-gold/40 hover:bg-brand-gold/16"
              >
                View Studio Location
              </a>
            </div>
          </div>
        </div>
      </RevealBlock>

      <div class="grid gap-4">
        <RevealBlock
          v-for="(item, index) in aboutHighlights"
          :key="item.title"
          effect="right"
          :delay="120 + index * 80"
        >
          <article class="premium-panel-soft motion-surface rounded-[30px] p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Studio Principle {{ index + 1 }}
            </p>
            <h3 class="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-muted-foreground">{{ item.description }}</p>
          </article>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aboutHighlights, siteInfo } from '~/data/site';
</script>
