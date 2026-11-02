<template>
  <section id="portfolio" class="scroll-mt-32 section-shell mt-24">
    <div class="container mx-auto">
      <RevealBlock>
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent Lix Photography work spanning family portraits, graduation stories, executive headshots, and refined studio portraiture."
          description="This gallery now renders the real Lix Photography images added to the workspace, while keeping the premium portfolio layout and filtering."
        />
      </RevealBlock>

      <RevealBlock :delay="80">
        <div class="mt-8 flex flex-wrap gap-3">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="rounded-full border px-4 py-2 text-sm font-medium transition duration-200"
            :class="
              selectedCategory === category
                ? 'border-brand-gold bg-brand-gold text-brand-ink shadow-[0_12px_30px_rgba(201,151,77,0.22)]'
                : 'border-border bg-card/70 text-foreground hover:border-brand-gold/35 hover:bg-brand-gold/8'
            "
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </RevealBlock>

      <RevealBlock :delay="120">
        <div class="gold-outline mt-6 rounded-[28px] bg-brand-gold/8 p-5">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Recent Portfolio Work
          </p>
          <p class="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            The collection now uses the uploaded studio images directly, covering family sessions,
            graduation milestones, beauty portraits, personal branding, and executive headshots.
          </p>
        </div>
      </RevealBlock>

      <div class="mt-8 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <RevealBlock
          v-for="(item, index) in filteredItems"
          :key="item.title"
          :delay="80 + (index % 4) * 70"
        >
          <button
            type="button"
            class="group premium-panel-soft relative h-full w-full overflow-hidden rounded-[30px] p-5 text-left motion-surface"
            :class="layoutClass(item.layout)"
            :style="{ background: item.background }"
            @click="selectedItem = item"
          >
            <img
              :src="imageSrc(item.assetFile)"
              :alt="item.title"
              class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            >
            <div
              class="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))]"
            />
            <div
              class="absolute inset-0 motion-media bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.18),transparent_22%)] opacity-80"
            />
            <div class="relative z-10 flex h-full flex-col justify-between">
              <div class="flex items-start justify-between gap-4">
                <span
                  class="rounded-full bg-black/24 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-brand-warm"
                >
                  {{ item.category }}
                </span>
                <span
                  class="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-warm/70"
                >
                  Live
                </span>
              </div>

              <div>
                <p class="text-xs uppercase tracking-[0.26em] text-brand-gold">
                  {{ item.location }}
                </p>
                <h3 class="font-display mt-3 text-3xl font-semibold tracking-tight text-brand-warm">
                  {{ item.title }}
                </h3>
                <p class="mt-3 max-w-sm text-sm leading-7 text-brand-warm/80">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </button>
        </RevealBlock>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedItem"
          class="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/72 px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-sm sm:items-center sm:p-4"
          @click.self="selectedItem = null"
        >
          <div class="premium-panel relative w-full max-w-5xl overflow-hidden rounded-[34px]">
            <button
              type="button"
              class="absolute right-4 top-4 z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-black/25 text-white transition duration-200 hover:border-brand-gold/40 hover:text-brand-gold sm:flex"
              aria-label="Close portfolio preview"
              @click="selectedItem = null"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>

            <div class="max-h-[calc(100dvh-2rem)] overflow-y-auto">
              <div
                class="sticky top-0 z-20 flex items-center justify-between border-b border-border/70 bg-card/96 px-4 py-3 backdrop-blur sm:hidden"
              >
                <div>
                  <p class="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-gold">
                    Portfolio Preview
                  </p>
                  <p class="mt-1 text-sm font-medium text-foreground">
                    {{ selectedItem.title }}
                  </p>
                </div>
                <button
                  type="button"
                  class="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition duration-200 hover:border-brand-gold/40 hover:text-brand-gold"
                  aria-label="Close portfolio preview"
                  @click="selectedItem = null"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <div class="grid lg:grid-cols-[1.08fr_0.92fr]">
                <div
                  class="relative min-h-[320px] p-6 sm:p-8 lg:min-h-[540px]"
                  :style="{ background: selectedItem.background }"
                >
                  <div
                    class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.54))]"
                  />
                  <img
                    :src="imageSrc(selectedItem.assetFile)"
                    :alt="selectedItem.title"
                    class="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  >
                  <div
                    class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]"
                  />
                  <div class="relative z-10 flex h-full flex-col justify-between">
                    <span
                      class="w-fit rounded-full border border-white/16 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-brand-warm"
                    >
                      {{ selectedItem.category }}
                    </span>
                    <div>
                      <p class="text-xs uppercase tracking-[0.28em] text-brand-gold">
                        Featured Image
                      </p>
                      <h3
                        class="font-display mt-3 text-4xl font-semibold tracking-tight text-brand-warm sm:text-5xl"
                      >
                        {{ selectedItem.title }}
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="bg-card/96 p-6 sm:p-8">
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    Portfolio Preview
                  </p>
                  <h3
                    class="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                  >
                    {{ selectedItem.title }}
                  </h3>
                  <p class="mt-4 text-sm leading-7 text-muted-foreground">
                    {{ selectedItem.description }}
                  </p>

                  <div class="mt-8 space-y-5">
                    <div>
                      <p
                        class="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                      >
                        Collection
                      </p>
                      <p class="mt-2 text-base text-foreground">{{ selectedItem.location }}</p>
                    </div>
                    <div>
                      <p
                        class="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                      >
                        Session Note
                      </p>
                      <p class="mt-2 text-base text-foreground">{{ selectedItem.notes }}</p>
                    </div>
                    <div>
                      <p
                        class="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                      >
                        Perfect For
                      </p>
                      <p class="mt-2 text-base text-foreground">
                        {{ sessionAudience(selectedItem.category) }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="mt-8 rounded-[24px] border border-brand-gold/18 bg-brand-gold/8 p-5"
                  >
                    <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      Love This Style?
                    </p>
                    <p class="mt-3 text-sm leading-7 text-muted-foreground">
                      We can create a similar session with styling guidance, posing support, and a
                      polished final gallery tailored to your milestone, family story, or personal
                      brand.
                    </p>
                    <div class="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        :href="siteInfo.whatsappHref"
                        class="inline-flex items-center justify-center rounded-full border border-brand-gold/24 bg-brand-gold/14 px-5 py-3 text-sm font-medium text-foreground transition duration-200 hover:border-brand-gold/40 hover:bg-brand-gold/20"
                      >
                        Book on WhatsApp
                      </a>
                      <a
                        :href="siteInfo.mapHref"
                        target="_blank"
                        rel="noreferrer"
                        class="inline-flex items-center justify-center rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-medium text-foreground transition duration-200 hover:border-brand-gold/35 hover:bg-brand-gold/8"
                      >
                        Visit Our Studio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { portfolioCategories, portfolioItems, siteInfo, type PortfolioItem } from '~/data/site';

const categories = ['All', ...portfolioCategories] as const;
const selectedCategory = ref<(typeof categories)[number]>('All');
const selectedItem = ref<PortfolioItem | null>(null);

const filteredItems = computed(() =>
  selectedCategory.value === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory.value),
);

const imageSrc = (assetFile: string) => `/images/portfolio/${assetFile}`;

const layoutClass = (layout: PortfolioItem['layout']) => {
  const layoutClasses: Record<PortfolioItem['layout'], string> = {
    portrait: 'sm:row-span-2',
    square: '',
    landscape: 'xl:col-span-2',
  };

  return layoutClasses[layout];
};

const sessionAudience = (category: PortfolioItem['category']) => {
  const copy: Record<PortfolioItem['category'], string> = {
    Portraits: 'Personal portraits, beauty sessions, and confidence-led photo refreshes.',
    Graduation: 'Graduates and families marking a major academic milestone with polished imagery.',
    Family: 'Families who want warm, timeless portraits with a refined studio finish.',
    Couples: 'Couples celebrating connection, chemistry, and beautifully directed shared moments.',
    Events: 'Celebrations and milestone moments that deserve polished, story-led coverage.',
    Corporate: 'Professionals, founders, and teams who need a credible, elevated public image.',
    Studio: 'Styled studio sessions with premium lighting, clean direction, and modern polish.',
  };

  return copy[category];
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    selectedItem.value = null;
  }
};

watch(selectedItem, (item) => {
  if (!import.meta.client) {
    return;
  }

  document.body.style.overflow = item ? 'hidden' : '';
});

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.body.style.overflow = '';
  window.removeEventListener('keydown', handleEscape);
});
</script>
