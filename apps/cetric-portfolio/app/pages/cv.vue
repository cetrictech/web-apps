<template>
  <main class="cv-page">
    <nav class="cv-actions" aria-label="CV actions"><NuxtLink to="/">← Back to portfolio</NuxtLink><UButton color="neutral" variant="outline" @click="printCv">Print / save as PDF</UButton></nav>
    <header class="cv-header"><h1>{{ profile.name }}</h1><p class="cv-title">{{ profile.title }}</p><p><a :href="`mailto:${profile.email}`">{{ profile.email }}</a> · {{ profile.phone }} · {{ profile.location }}</p></header>
    <section><h2>Profile</h2><p>{{ profile.summary }} Strong background in backend engineering, API design, database modelling, cloud infrastructure, and technical team leadership.</p></section>
    <section><h2>Experience</h2><article v-for="job in experience" :key="`${job.company}-${job.role}`" class="cv-job"><h3>{{ job.role }}</h3><p class="cv-job-meta">{{ job.company }} · {{ job.dates }} · {{ job.type }}</p><p>{{ job.summary }}</p><ul><li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li></ul></article></section>
    <section><h2>Selected projects</h2><article v-for="project in projects" :key="project.name" class="cv-project"><h3>{{ project.name }}</h3><p>{{ project.description }}</p></article><article v-for="project in additionalProjects" :key="project.name" class="cv-project"><h3>{{ project.name }}</h3><p>{{ project.description }}</p></article></section>
    <section><h2>Skills</h2><p v-for="group in skills" :key="group.title"><strong>{{ group.title }}:</strong> {{ group.items.join(' · ') }}</p></section>
  </main>
</template>
<script setup lang="ts">
import { profile, experience, projects, additionalProjects, skills } from '~/data/profile';
useSeoMeta({ title: 'Cetric Okola — Curriculum Vitae', description: profile.summary, robots: 'noindex, follow' });
function printCv() { window.print(); }
</script>
