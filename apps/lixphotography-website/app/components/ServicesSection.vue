<template>
  <section id="services" class="editorial-wrap editorial-section">
    <div class="section-topline"><p class="eyebrow">03 / WHAT WE DO</p><span class="quiet-label">THOUGHTFULLY SEEN. BEAUTIFULLY MADE.</span></div>
    <div class="section-heading-row"><h2>Your story.<br><em>Our lens.</em></h2><p>From a quiet portrait to a room full of celebration.<br>Let's make something that matters to you.</p></div>
    <div class="service-list"><a v-for="(service, index) in services" :key="service.title" :href="`${siteInfo.whatsappHref}?text=${encodeURIComponent(`Hi Lix Photography, I'd like to book ${service.title}.`)}`" target="_blank" rel="noopener noreferrer"><span class="service-number">{{ String(index + 1).padStart(2, '0') }}</span><div><h3>{{ service.title }}</h3><p>{{ service.description }}</p></div><span class="service-arrow" aria-hidden="true">↗</span></a></div>
  </section>
</template>
<script setup lang="ts">
import { services, siteInfo } from '~/data/site';
</script>
