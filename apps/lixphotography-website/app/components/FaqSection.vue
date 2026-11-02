<template>
  <section id="faq" class="editorial-wrap editorial-section faq-grid">
    <div><p class="eyebrow">A FEW THINGS TO KNOW</p><h2>Before your<br><em>first frame.</em></h2><p class="section-description">A little clarity before we create.<br>Have another question? We're a message away.</p><a :href="siteInfo.whatsappHref" class="text-link" target="_blank" rel="noopener noreferrer">Ask us anything ↗</a></div>
    <div class="faq-list"><details v-for="item in faqs" :key="item.question"><summary>{{ item.question }}<span aria-hidden="true">+</span></summary><p>{{ item.answer }}</p></details></div>
  </section>
</template>
<script setup lang="ts">
import { faqs, siteInfo } from '~/data/site';
</script>
