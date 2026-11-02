<template>
  <section id="contact" class="booking-section">
    <div class="editorial-wrap booking-grid">
      <div><p class="eyebrow">04 / LET'S MAKE MEMORIES</p><h2>The next story<br>could be <em>yours.</em></h2><p>Tell us what you have in mind.<br>We'll take it from there.</p><a :href="`mailto:${siteInfo.bookingEmail}`" class="booking-email">{{ siteInfo.bookingEmail }} ↗</a><div class="contact-facts"><a :href="siteInfo.bookingPhoneHref">{{ siteInfo.bookingPhone }}</a><a :href="siteInfo.mapHref" target="_blank" rel="noopener noreferrer">Mega City Mall, Ground Floor<br>Kisumu, Kenya ↗</a><span>Every day · 9 AM – 6 PM</span></div></div>
      <form class="booking-form" @submit.prevent="startBooking">
        <label>Your name<input v-model="name" name="name" autocomplete="name" placeholder="What should we call you?" required maxlength="100"></label>
        <label>The occasion<select v-model="service" name="service"><option v-for="item in services" :key="item.title">{{ item.title }}</option></select></label>
        <label>A date in mind? <small>(optional)</small><input v-model="date" type="date" name="date" :min="today"></label>
        <label>Tell us a little more <small>(optional)</small><textarea v-model="message" name="message" rows="2" placeholder="Your vision, your people, your moment…" maxlength="1500" /></label>
        <button type="submit" class="editorial-button">Let's talk on WhatsApp <span aria-hidden="true">↗</span></button>
        <p class="form-note">Opens WhatsApp with your inquiry. Review it before sending.<br>By continuing, you're choosing to contact us through WhatsApp.</p>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { services, siteInfo } from '~/data/site';
const name = ref('');
const service = ref('Portrait Photography');
const date = ref('');
const message = ref('');
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Nairobi', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
function startBooking() {
  const text = `Hi Lix Photography! I'm ${name.value.trim()}. I'd like to book ${service.value}.${date.value ? ` Preferred date: ${date.value}.` : ''}${message.value.trim() ? ` ${message.value.trim()}` : ''}`;
  window.open(`${siteInfo.whatsappHref}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}
</script>
