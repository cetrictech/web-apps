<template>
  <header class="fixed inset-x-0 top-0 z-[60] px-4 py-4 lg:px-8">
    <div
      class="container mx-auto rounded-[28px] border px-4 py-3 transition duration-300"
      :class="
        isScrolled
          ? 'border-brand-gold/16 bg-background/82 shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl'
          : 'border-brand-gold/12 bg-background/68 backdrop-blur-lg'
      "
    >
      <div class="flex items-center justify-between gap-4">
        <button
          type="button"
          class="flex items-center gap-3 text-left"
          @click="handleNavClick('home')"
        >
          <AppLogo class="h-12 w-12" />
          <span class="hidden sm:block">
            <span class="font-display block text-lg font-semibold tracking-tight text-foreground">
              {{ siteInfo.name }}
            </span>
            <span class="block text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
              Premium Studio · Kisumu
            </span>
          </span>
        </button>

        <nav class="hidden items-center gap-2 lg:flex">
          <button
            v-for="item in navigationItems"
            :key="item.id"
            type="button"
            class="rounded-full px-4 py-2 text-sm font-medium transition duration-200"
            :class="
              activeSection === item.id
                ? 'bg-brand-gold text-brand-ink shadow-[0_12px_28px_rgba(201,151,77,0.24)]'
                : 'text-foreground/80 hover:bg-brand-gold/10 hover:text-foreground'
            "
            @click="handleNavClick(item.id)"
          >
            {{ item.label }}
          </button>
        </nav>

        <div class="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <BaseButton href="#contact" variant="primary" size="md">Book Now</BaseButton>
        </div>

        <div class="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/20 bg-card/75 text-foreground shadow-[0_10px_26px_rgba(0,0,0,0.16)]"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="lix-mobile-menu"
            aria-label="Toggle navigation menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              v-else
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
      </div>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          id="lix-mobile-menu"
          class="mt-4 grid gap-2 rounded-[26px] border border-brand-gold/14 bg-card/92 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)] lg:hidden"
        >
          <button
            v-for="item in navigationItems"
            :key="item.id"
            type="button"
            class="rounded-2xl px-4 py-3 text-left text-sm font-medium transition duration-200"
            :class="
              activeSection === item.id
                ? 'bg-brand-gold text-brand-ink'
                : 'bg-background/55 text-foreground hover:bg-brand-gold/10'
            "
            @click="handleNavClick(item.id)"
          >
            {{ item.label }}
          </button>

          <BaseButton href="#contact" variant="primary" size="md" block>Book Now</BaseButton>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { navigationItems, siteInfo } from '~/data/site';

const route = useRoute();
const activeSection = ref('home');
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

let sectionObserver: IntersectionObserver | null = null;

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const offset = window.innerWidth >= 1024 ? 120 : 108;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
  window.history.replaceState(null, '', `#${id}`);
};

const handleNavClick = (id: string) => {
  activeSection.value = id;
  isMobileMenuOpen.value = false;
  if (route.path !== '/') {
    void navigateTo(`/#${id}`);
    return;
  }
  scrollToSection(id);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 16;
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  handleScroll();

  const sectionElements = navigationItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean) as HTMLElement[];

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

      if (visibleEntries[0]) {
        activeSection.value = visibleEntries[0].target.id;
      }
    },
    {
      rootMargin: '-28% 0px -52% 0px',
      threshold: [0.25, 0.45, 0.7],
    },
  );

  sectionElements.forEach((element) => sectionObserver?.observe(element));

  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');

    if (navigationItems.some((item) => item.id === hash)) {
      activeSection.value = hash;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  sectionObserver?.disconnect();
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});

watch(
  () => route.fullPath,
  () => {
    isMobileMenuOpen.value = false;
  },
);
</script>
