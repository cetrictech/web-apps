<template>
  <section class="section-shell mx-auto max-w-3xl pb-12 pt-36">
    <h1 class="font-display text-4xl font-semibold text-foreground">Privacy &amp; cookies</h1>
    <div class="mt-8 space-y-7 text-base leading-8 text-muted-foreground">
      <p>This page describes storage and external services used by the Lix Photography website.</p>
      <section>
        <h2 class="text-xl font-semibold text-foreground">Your cookie choices</h2>
        <p>The essential <code>lix-cookie-consent</code> cookie records whether you allow theme preferences.
          It lasts 180 days and does not contain your name or contact details. We use no analytics or advertising cookies.</p>
      </section>
      <section>
        <h2 class="text-xl font-semibold text-foreground">Optional theme storage</h2>
        <p>If you accept preferences, <code>lix-photography-theme</code> in your browser's local storage
          remembers your light or dark theme until you clear it. Choosing essential only removes that saved theme.
          The theme toggle still works for your current visit.</p>
        <button type="button" class="mt-3 rounded-full border border-brand-gold px-5 py-2 text-foreground"
          @click="openCookieSettings">Change cookie settings</button>
      </section>
      <section>
        <h2 class="text-xl font-semibold text-foreground">External services</h2>
        <p>Fonts are loaded from Google Fonts, which receives technical request information such as your IP address.
          Links to Google Maps and WhatsApp open those services only when you follow them. Their own privacy policies apply.</p>
      </section>
      <section>
        <h2 class="text-xl font-semibold text-foreground">Contact and booking information</h2>
        <p>The on-page inquiry form currently keeps entries in the page and does not send them to a server.
          To confirm a booking, contact the studio directly. Information you choose to send by phone, email,
          or WhatsApp is received through that channel. For privacy questions, email
          <a :href="`mailto:${siteInfo.bookingEmail}`" class="underline">{{ siteInfo.bookingEmail }}</a>.</p>
      </section>
      <NuxtLink to="/" class="inline-block text-foreground underline">Back to the studio</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteInfo } from '~/data/site';
const { openCookieSettings } = useCookieConsent();
useSiteSeo('Privacy & Cookies | Lix Photography',
  'How Lix Photography uses essential cookies, optional theme storage, and external services, and how to manage your preferences.', '/privacy');
</script>
