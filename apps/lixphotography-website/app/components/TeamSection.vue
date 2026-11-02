<template>
  <section id="team" class="scroll-mt-32 section-shell mt-24">
    <div class="container mx-auto">
      <RevealBlock>
        <SectionHeading
          eyebrow="Team"
          title="Meet the women helping shape the warm, polished Lix Photography experience."
          description="From first inquiry to shoot-day coordination, Esther Moraa and June Jemutai help keep the studio experience clear, calm, and beautifully organized."
          align="center"
        />
      </RevealBlock>

      <div class="mt-10 grid gap-5 lg:grid-cols-2">
        <RevealBlock
          v-for="(member, index) in teamMembers"
          :key="member.name"
          :delay="100 + index * 90"
        >
          <article
            class="premium-panel-soft motion-surface overflow-hidden rounded-[32px] lg:grid lg:min-h-[640px] lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div class="relative min-h-[360px] lg:min-h-full">
              <img
                :src="member.image"
                :alt="member.name"
                class="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              >
              <div
                class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.18))]"
              />
            </div>

            <div class="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  Studio Team
                </p>
                <h3 class="font-display mt-3 text-4xl font-semibold tracking-tight text-foreground">
                  {{ member.name }}
                </h3>
                <p class="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {{ member.role }}
                </p>
                <p class="mt-6 text-base leading-8 text-muted-foreground">
                  {{ member.summary }}
                </p>
              </div>

              <div class="mt-8 rounded-[24px] border border-brand-gold/18 bg-brand-gold/8 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                  Reach The Studio
                </p>
                <p class="mt-3 text-sm leading-7 text-muted-foreground">
                  Call or WhatsApp the official studio line at
                  <span class="font-semibold text-foreground">{{ siteInfo.bookingPhone }}</span>
                  for bookings, session planning, and studio inquiries.
                </p>
              </div>
            </div>
          </article>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteInfo, teamMembers } from '~/data/site';
</script>
