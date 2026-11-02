<template>
  <div class="pb-4">
    <HeroSection />
    <PortfolioGrid />
    <AboutSection />
    <TeamSection />
    <ServicesSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { faqs, services, siteInfo } from '~/data/site';

useSiteSeo(
  'Lix Photography | Portrait & Event Studio in Kisumu',
  'Portraits, graduation photos, family sessions, executive headshots and event photography at Mega City Mall, Ground Floor, Kisumu. Book Lix Photography.',
);

const businessId = `${siteInfo.url}/#business`;
useHead({
  script: [{
    key: 'lix-structured-data',
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness', '@id': businessId,
          name: siteInfo.name, url: `${siteInfo.url}/`,
          description: siteInfo.description,
          image: `${siteInfo.url}/images/portfolio/LIX_4390.jpg.jpeg`,
          logo: `${siteInfo.url}/images/logo/logo.jpeg`,
          telephone: siteInfo.bookingPhone, email: siteInfo.bookingEmail,
          hasMap: siteInfo.mapHref,
          address: {
            '@type': 'PostalAddress', streetAddress: 'Mega City Mall, Ground Floor',
            addressLocality: 'Kisumu', addressCountry: 'KE',
          },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00', closes: '18:00',
          }],
          geo: { '@type': 'GeoCoordinates', latitude: -0.1068103, longitude: 34.7709808 },
          areaServed: { '@type': 'City', name: 'Kisumu' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog', name: 'Photography services',
            itemListElement: services.map(service => ({
              '@type': 'Offer', itemOffered: {
                '@type': 'Service', name: service.title, description: service.description,
                provider: { '@id': businessId }, areaServed: 'Kisumu',
              },
            })),
          },
        },
        {
          '@type': 'WebSite', '@id': `${siteInfo.url}/#website`,
          url: `${siteInfo.url}/`, name: siteInfo.name,
          inLanguage: 'en-KE', publisher: { '@id': businessId },
        },
        {
          '@type': 'FAQPage', '@id': `${siteInfo.url}/#faq`,
          mainEntity: faqs.map(faq => ({
            '@type': 'Question', name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    }).replace(/</g, '\\u003c'),
  }],
});
</script>
