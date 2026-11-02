<template>
  <footer class="section-shell pb-8 pt-16">
    <div class="container mx-auto">
      <div class="premium-panel rounded-[34px] px-6 py-8 sm:px-8">
        <div class="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div class="flex items-center gap-3">
              <AppLogo class="h-12 w-12" />
              <div>
                <p class="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {{ siteInfo.name }}
                </p>
                <p class="text-xs uppercase tracking-[0.26em] text-muted-foreground">
                  Premium photography studio in Kisumu
                </p>
              </div>
            </div>

            <p class="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              Elegant portraits, beautiful event coverage, and refined final edits for clients who
              want a polished photography experience from inquiry to delivery.
            </p>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <div class="rounded-[24px] border border-border bg-background/60 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.26em] text-brand-gold">
                  Location
                </p>
                <a
                  :href="siteInfo.mapHref"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-2 inline-flex text-base text-foreground transition duration-200 hover:text-brand-gold"
                >
                  {{ siteInfo.location }}
                </a>
                <p class="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {{ siteInfo.mapCoordinates }}
                </p>
              </div>
              <div class="rounded-[24px] border border-border bg-background/60 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.26em] text-brand-gold">
                  Contact
                </p>
                <p class="mt-2 text-base text-foreground">{{ siteInfo.bookingPhone }}</p>
                <p class="mt-1 text-sm text-muted-foreground">{{ siteInfo.bookingEmail }}</p>
              </div>
            </div>
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Quick Links
              </p>
              <ul class="mt-4 space-y-3">
                <li v-for="link in footerQuickLinks" :key="link.label">
                  <a
                    class="text-sm text-muted-foreground transition duration-200 hover:text-foreground"
                    :href="link.href.startsWith('#') ? `/${link.href}` : link.href"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Social Placeholders
              </p>
              <ul class="mt-4 space-y-3">
                <li v-for="item in socialPlaceholders" :key="item.label">
                  <a
                    class="text-sm text-muted-foreground transition duration-200 hover:text-foreground"
                    :href="item.href"
                  >
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {{ currentYear }} {{ siteInfo.name }}. All rights reserved.</p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/privacy" class="underline underline-offset-4">Privacy &amp; cookies</NuxtLink>
            <button type="button" class="underline underline-offset-4" @click="openCookieSettings">Cookie settings</button>
          </div>
          <a
            :href="siteInfo.mapHref"
            target="_blank"
            rel="noreferrer"
            class="transition duration-200 hover:text-foreground"
          >
            Photo studio at Mega City Mall, Ground Floor, Kisumu.
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerQuickLinks, siteInfo, socialPlaceholders } from '~/data/site';

const { openCookieSettings } = useCookieConsent();
const currentYear = new Date().getFullYear();
</script>
