<template>
  <div class="pb-4">
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <TeamSection />
    <ServicesSection />
    <PortfolioGrid />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { siteInfo } from '~/data/site';

definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Lix Photography | Premium Photography Studio in Kisumu',
  description:
    'Lix Photography is a premium photography studio in Kisumu offering professional photography in Kisumu, portrait photography Kisumu, event photography Kisumu, and a photo studio at Mega City Mall.',
  ogTitle: 'Lix Photography | Premium Photography Studio in Kisumu',
  ogDescription:
    'Timeless portraits, elegant event coverage, and refined retouching from Lix Photography at Mega City Mall, Ground Floor, Kisumu.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Lix Photography | Premium Photography Studio in Kisumu',
  twitterDescription:
    'Professional photography in Kisumu with a premium black-and-gold studio presentation.',
});

useHead({
  meta: [{
    name: 'keywords',
    content: 'photography studio in Kisumu, professional photography in Kisumu, photo studio at Mega City Mall, portrait photography Kisumu, event photography Kisumu',
  }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: siteInfo.name,
        description: siteInfo.description,
        telephone: siteInfo.bookingPhone,
        email: siteInfo.bookingEmail,
        hasMap: siteInfo.mapHref,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mega City Mall, Ground Floor',
          addressLocality: 'Kisumu',
          addressCountry: 'KE',
        },
        openingHours: 'Mo-Su 09:00-18:00',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -0.1068103,
          longitude: 34.7709808,
        },
        areaServed: 'Kisumu',
      }),
    },
  ],
});
</script>
