<template>
  <section id="team" class="editorial-wrap editorial-section team-section" aria-labelledby="team-heading">
    <div class="team-layout">
      <div class="team-intro">
        <p class="eyebrow">THE FACES BEHIND THE EXPERIENCE</p>
        <h2 id="team-heading">Good people.<br><em>Great moments.</em></h2>
        <p class="team-introduction">A warm welcome. A thoughtful plan. A little encouragement behind the scenes. Meet the people who make your time at Lix feel effortless.</p>
        <a href="#contact" class="text-link">Meet us at the studio <span aria-hidden="true">↗</span></a>
        <span class="team-location">MEGA CITY MALL · KISUMU</span>
      </div>

      <UCard
        v-for="(member, index) in teamMembers"
        :key="member.name"
        as="article"
        class="team-profile"
        :class="{ 'team-profile-offset': index % 2 === 1 }"
        :aria-labelledby="`team-member-${index}`"
        :ui="{ root: 'rounded-none bg-transparent shadow-none ring-0', body: 'p-0 sm:p-0' }"
      >
        <div class="team-portrait">
          <img :src="member.image" :alt="`${member.name}, ${member.role}`" width="2774" height="4160" loading="lazy" decoding="async">
          <span class="team-photo-index" aria-hidden="true">LIX / {{ String(index + 1).padStart(2, '0') }}</span>
        </div>
        <div class="team-caption">
          <p class="team-role">{{ member.role }}</p>
          <h3 :id="`team-member-${index}`">{{ member.name }}</h3>
          <p class="team-summary">{{ member.summary }}</p>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { teamMembers } from '~/data/site';
</script>

<style scoped>
.team-layout { display: grid; grid-template-columns: .85fr 1fr 1fr; align-items: start; gap: 32px; }
.team-intro { padding-top: 30px; }
.team-intro .eyebrow { font-size: 9px; line-height: 1.8; }
.team-intro h2 { font-size: clamp(42px, 4.4vw, 62px); margin-block: 25px; }
.team-introduction { max-width: 270px; color: var(--muted-foreground); font-size: 12px; line-height: 1.95; }
.team-intro .text-link { margin-top: 23px; }
.team-location { display: block; margin-top: 40px; font-size: 8px; letter-spacing: .16em; color: var(--muted-foreground); }
.team-profile { min-width: 0; }
.team-profile-offset { margin-top: 56px; }
.team-portrait { position: relative; overflow: hidden; background: var(--secondary); border-bottom: 2px solid var(--primary); }
.team-portrait img { display: block; width: 100%; aspect-ratio: 4/5; object-fit: cover; object-position: center 30%; transition: transform .6s ease; }
.team-profile:hover .team-portrait img { transform: scale(1.025); }
.team-photo-index { position: absolute; left: 15px; top: 15px; padding: 7px 10px; font-size: 8px; letter-spacing: .15em; color: #f8f5f0; background: rgba(10,10,10,.65); border: 1px solid rgba(248,245,240,.2); }
.team-caption { padding-top: 22px; }
.team-role { color: var(--primary); font-size: 9px; line-height: 1.7; letter-spacing: .08em; text-transform: uppercase; }
.team-caption h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 36px; font-weight: 500; letter-spacing: -.03em; line-height: 1.2; margin-top: 7px; }
.team-summary { margin-top: 13px; max-width: 330px; color: var(--muted-foreground); font-size: 12px; line-height: 1.9; }
@media (max-width: 1050px) {
  .team-layout { grid-template-columns: 1fr 1fr; gap: 35px; }
  .team-intro { grid-column: 1 / -1; padding-top: 0; }
  .team-introduction { max-width: 490px; }
  .team-location { margin-top: 20px; }
  .team-profile-offset { margin-top: 35px; }
}
@media (max-width: 580px) {
  .team-layout { grid-template-columns: 1fr; gap: 40px; }
  .team-intro h2 { font-size: 48px; }
  .team-profile-offset { margin-top: 0; }
  .team-portrait img { aspect-ratio: 4/4.5; }
  .team-caption h3 { font-size: 34px; }
  .team-summary { max-width: none; font-size: 13px; }
}
@media (prefers-reduced-motion: reduce) { .team-portrait img { transition: none; } }
</style>
