<template>
  <section id="home" class="scroll-mt-32 section-shell pt-4">
    <div class="container mx-auto">
      <div
        class="premium-panel relative overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 lg:px-10 lg:py-12"
      >
        <div
          class="absolute inset-0 bg-[linear-gradient(130deg,rgba(201,151,77,0.12),transparent_38%,rgba(255,255,255,0.04)_100%)]"
        />
        <div class="grain-overlay absolute inset-0" />

        <div class="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <RevealBlock effect="left" :delay="80">
            <div class="max-w-2xl">
              <p
                class="mb-5 inline-flex items-center gap-3 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold"
              >
                <span class="h-2 w-2 rounded-full bg-brand-gold" />
                {{ siteInfo.tagline }}
              </p>

              <h1
                class="font-display text-5xl font-semibold leading-none tracking-tight text-foreground sm:text-6xl xl:text-7xl"
              >
                {{ siteInfo.heroHeadline }}
              </h1>

              <p class="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {{ siteInfo.heroSubheadline }}
              </p>

              <div class="mt-8 flex flex-wrap gap-4">
                <BaseButton href="#contact" variant="primary" size="lg">Book a Session</BaseButton>
                <BaseButton href="#portfolio" variant="secondary" size="lg"
                  >View Portfolio</BaseButton
                >
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-3">
                <div
                  v-for="signal in heroSignals"
                  :key="signal"
                  class="premium-panel-soft rounded-[24px] px-4 py-4 text-sm leading-7 text-muted-foreground"
                >
                  {{ signal }}
                </div>
              </div>

              <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span class="inline-flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                  {{ siteInfo.location }}
                </span>
                <span class="inline-flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-brand-gold/70" />
                  Family, graduation, headshots, and refined studio portraiture
                </span>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock effect="right" :delay="180">
            <div class="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div class="grid gap-4">
                <article
                  v-if="featuredPortfolio[0]"
                  class="group premium-panel-soft relative min-h-[220px] overflow-hidden rounded-[30px] p-5 motion-surface"
                  :style="{ background: featuredPortfolio[0].background }"
                >
                  <img
                    :src="imageSrc(featuredPortfolio[0].assetFile)"
                    :alt="featuredPortfolio[0].title"
                    class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  >
                  <div
                    class="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]"
                  />
                  <div class="relative z-10 mt-auto flex h-full flex-col justify-end">
                    <p class="text-xs uppercase tracking-[0.24em] text-brand-gold">
                      {{ featuredPortfolio[0].category }}
                    </p>
                    <h2 class="font-display mt-2 text-3xl font-semibold text-brand-warm">
                      {{ featuredPortfolio[0].title }}
                    </h2>
                    <p class="mt-2 max-w-xs text-sm leading-7 text-brand-warm/80">
                      {{ featuredPortfolio[0].description }}
                    </p>
                  </div>
                </article>

                <div class="premium-panel-soft rounded-[30px] p-5">
                  <p class="text-xs uppercase tracking-[0.26em] text-brand-gold">Studio Address</p>
                  <p class="font-display mt-3 text-3xl font-semibold text-foreground">
                    Mega City Mall
                  </p>
                  <p class="mt-2 text-sm leading-7 text-muted-foreground">
                    Ground Floor, Kisumu. Visit the studio for consultation, wardrobe guidance, and
                    a premium session experience.
                  </p>
                </div>
              </div>

              <div class="grid gap-4">
                <article
                  v-if="featuredPortfolio[1]"
                  class="group premium-panel-soft relative min-h-[280px] overflow-hidden rounded-[30px] p-6 motion-surface"
                  :style="{ background: featuredPortfolio[1].background }"
                >
                  <img
                    :src="imageSrc(featuredPortfolio[1].assetFile)"
                    :alt="featuredPortfolio[1].title"
                    class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  >
                  <div
                    class="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.65))]"
                  />
                  <div class="relative z-10 flex h-full flex-col justify-between">
                    <div
                      class="flex justify-between text-xs uppercase tracking-[0.24em] text-brand-warm/70"
                    >
                      <span>Recent Sample Work</span>
                      <span>{{ featuredPortfolio[1].category }}</span>
                    </div>
                    <div>
                      <h2 class="font-display text-4xl font-semibold text-brand-warm">
                        {{ featuredPortfolio[1].title }}
                      </h2>
                      <p class="mt-3 max-w-sm text-sm leading-7 text-brand-warm/78">
                        {{ featuredPortfolio[1].description }}
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  v-if="featuredPortfolio[2]"
                  class="group premium-panel-soft relative min-h-[180px] overflow-hidden rounded-[30px] p-5 motion-surface"
                  :style="{ background: featuredPortfolio[2].background }"
                >
                  <img
                    :src="imageSrc(featuredPortfolio[2].assetFile)"
                    :alt="featuredPortfolio[2].title"
                    class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  >
                  <div
                    class="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.62))]"
                  />
                  <div class="relative z-10 mt-auto flex h-full flex-col justify-end">
                    <p class="text-xs uppercase tracking-[0.24em] text-brand-gold">
                      {{ featuredPortfolio[2].location }}
                    </p>
                    <h2 class="font-display mt-2 text-3xl font-semibold text-brand-warm">
                      {{ featuredPortfolio[2].title }}
                    </h2>
                  </div>
                </article>
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroSignals, portfolioItems, siteInfo } from '~/data/site';

const featuredPortfolio = portfolioItems.slice(0, 3);
const imageSrc = (assetFile: string) => `/images/portfolio/${assetFile}`;
</script>
