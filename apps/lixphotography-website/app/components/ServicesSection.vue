<template>
  <section id="services" class="scroll-mt-32 section-shell mt-24">
    <div class="container mx-auto">
      <RevealBlock>
        <SectionHeading
          eyebrow="Services"
          title="Photography services designed to look premium and feel effortless."
          description="From studio portraits to event coverage and commercial work, each service is structured around clean art direction, professional handling, and elegant final delivery."
        />
      </RevealBlock>

      <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <RevealBlock
          v-for="(service, index) in services"
          :key="service.title"
          :delay="100 + (index % 3) * 60"
        >
          <ServiceCard :service="service" />
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/site';
</script>
