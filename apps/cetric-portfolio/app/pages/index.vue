<template>
  <div>
    <a href="#main" class="skip-link">Skip to content</a>
    <header class="site-header wrap">
      <a class="signature" href="#">Cetric Okola<span> / </span></a>
      <nav class="desktop-nav" aria-label="Main navigation"><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
      <a class="header-cv" href="/cetric-okola-cv.pdf" download>Download CV <span aria-hidden="true">↗</span></a>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Close −' : 'Menu +' }}</button>
      <nav v-if="menuOpen" id="mobile-menu" aria-label="Mobile navigation"><a v-for="item in navigation" :key="item.id" :href="`#${item.id}`" @click="menuOpen = false">{{ item.label }} ↗</a></nav>
    </header>

    <main id="main">
      <section class="hero wrap" aria-labelledby="intro-heading">
        <div class="hero-main"><p class="overline"><span class="location-dot" /> NAIROBI, KENYA · FOUNDER &amp; CEO OF STAYPACE</p><h1 id="intro-heading">I build systems.<br>And the teams<br><em>behind them.</em></h1><p class="hero-summary">I'm Cetric, Founder &amp; CEO of Staypace. I turn complex problems into reliable software.<br class="desktop-only"> From the first architecture decision to the people who bring it to life.</p><div class="hero-actions"><a class="button button-dark" href="#work">Explore my work <span aria-hidden="true">↘</span></a><a class="text-link" :href="`mailto:${profile.email}`">Let's talk <span aria-hidden="true">↗</span></a></div></div>
        <aside class="hero-note" aria-label="Experience overview"><span class="note-label">A LITTLE CONTEXT</span><p class="years">9<span>+</span></p><p class="years-caption">years of engineering,<br>architecture &amp; leadership.</p><div class="note-divider"/><p class="note-description">Built for real people.<br>Designed for the long run.</p><a href="/cv" class="text-link">The longer version ↗</a><span class="note-index" aria-hidden="true">01 — INTRODUCTION</span></aside>
      </section>
      <div class="focus-strip"><div class="wrap"><span>Backend engineering</span><i aria-hidden="true">✳</i><span>Systems architecture</span><i aria-hidden="true">✳</i><span>Technical leadership</span></div></div>

      <section id="work" class="section wrap" aria-labelledby="work-heading"><div class="section-heading"><div><p class="overline">01 / SELECTED WORK</p><h2 id="work-heading">Good engineering.<br><em>Meaningful outcomes.</em></h2></div><p class="section-note">A few problems I've helped solve,<br>and the thinking behind the work.</p></div>
        <div class="project-grid"><article v-for="project in projects" :key="project.number" class="project-card" :class="{ 'project-featured': project.number === '01' }"><div class="project-top"><span>{{ project.category }}</span><span>{{ project.number }}</span></div><h3>{{ project.title }}</h3><p class="project-name">{{ project.name }}</p><p class="project-description">{{ project.description }}</p><div class="project-tags"><UBadge v-for="tag in project.tags" :key="tag" color="neutral" variant="outline" class="project-tag">{{ tag }}</UBadge></div><details class="project-details"><summary>What I worked on <span aria-hidden="true">+</span></summary><p>{{ project.detail }}</p></details></article></div>
        <div class="more-work"><span class="overline">ALSO BUILT</span><div v-for="project in additionalProjects" :key="project.name"><h3>{{ project.name }}</h3><p>{{ project.description }}</p></div></div>
      </section>

      <section id="experience" class="experience-section"><div class="wrap experience-grid"><div class="experience-intro"><p class="overline">02 / THE JOURNEY</p><h2 id="experience-heading">Hands on.<br><em>Looking ahead.</em></h2><p>From building web applications to leading engineering teams and architecting financial platforms. Always close to the code. Always thinking about the bigger picture.</p><a href="/cv" class="text-link">Read my CV ↗</a></div><div class="timeline" aria-labelledby="experience-heading"><details v-for="(job, index) in experience" :key="`${job.company}-${job.role}`" :open="index === 0" class="job"><summary><span class="job-dot" aria-hidden="true"/><span class="job-heading"><span class="job-company">{{ job.company }} <small>{{ job.type }}</small></span><span class="job-title">{{ job.role }}</span><span class="job-dates">{{ job.dates }}</span></span><span class="job-toggle" aria-hidden="true">+</span></summary><div class="job-description"><p>{{ job.summary }}</p><ul><li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li></ul></div></details></div></div></section>

      <section id="skills" class="section wrap" aria-labelledby="skills-heading"><div class="section-heading"><div><p class="overline">03 / THE TOOLKIT</p><h2 id="skills-heading">The right tools.<br><em>For the right problem.</em></h2></div><p class="section-note">Strong fundamentals first.<br>Technology that serves the product.</p></div><div class="skills-grid"><div v-for="group in skills" :key="group.title" class="skill-group"><h3>{{ group.title }}</h3><ul><li v-for="skill in group.items" :key="skill">{{ skill }}</li></ul></div></div></section>

      <section id="contact" class="contact-section"><div class="wrap contact-inner"><p class="overline">04 / START A CONVERSATION</p><h2>Something worth building?<br><em>Let's talk.</em></h2><p>A product to shape, a platform to scale, or a team to grow.<br>I'd love to hear what you're thinking.</p><a class="contact-email" :href="`mailto:${profile.email}`">{{ profile.email }} <span aria-hidden="true">↗</span></a><div class="contact-links"><a :href="profile.phoneHref">{{ profile.phone }}</a><span>{{ profile.location }}</span><a href="/cetric-okola-cv.pdf" download>Download CV ↓</a></div></div></section>
    </main>
    <footer class="wrap footer"><span>© {{ new Date().getFullYear() }} Cetric Okola</span><span>Thoughtfully engineered.</span><a href="#">Back to top ↑</a></footer>
  </div>
</template>

<script setup lang="ts">
import { profile, projects, additionalProjects, experience, skills } from '~/data/profile';
const menuOpen = ref(false);
const navigation = [{ id: 'work', label: 'Selected work' }, { id: 'experience', label: 'Experience' }, { id: 'skills', label: 'Toolkit' }, { id: 'contact', label: 'Contact' }];
usePortfolioSeo(
  'Cetric Okola | Founder & CEO of Staypace',
  'Cetric Okola is the Founder and CEO of Staypace, a software engineer and technical leader in Nairobi, Kenya, with 9+ years of experience building reliable systems.',
);
useHead({ script: [{
  key: 'cetric-profile-schema', type: 'application/ld+json',
  innerHTML: JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': `${profile.url}/#person`, name: profile.name,
        url: `${profile.url}/`, jobTitle: 'Founder & CEO', description: profile.summary,
        email: profile.email, telephone: profile.phone,
        worksFor: { '@id': `${profile.url}/#staypace` },
        homeLocation: { '@type': 'City', name: 'Nairobi', containedInPlace: { '@type': 'Country', name: 'Kenya' } },
        knowsAbout: ['Software engineering', 'System architecture', 'Technical leadership', 'Payment systems', 'AI integration'],
      },
      {
        '@type': 'Organization', '@id': `${profile.url}/#staypace`, name: 'Staypace',
        founder: { '@id': `${profile.url}/#person` },
      },
      {
        '@type': 'ProfilePage', '@id': `${profile.url}/#profile`, url: `${profile.url}/`,
        name: 'Cetric Okola | Founder & CEO of Staypace', inLanguage: 'en-KE',
        mainEntity: { '@id': `${profile.url}/#person` },
        isPartOf: { '@id': `${profile.url}/#website` },
      },
      {
        '@type': 'WebSite', '@id': `${profile.url}/#website`, url: `${profile.url}/`,
        name: 'Cetric Okola', publisher: { '@id': `${profile.url}/#person` }, inLanguage: 'en-KE',
      },
    ],
  }).replace(/</g, '\\u003c'),
}] });
</script>
