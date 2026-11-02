<template>
  <section id="contact" class="booking-section">
    <div class="editorial-wrap booking-grid">
      <div><p class="eyebrow">04 / LET'S MAKE MEMORIES</p><h2>The next story<br>could be <em>yours.</em></h2><p>Tell us what you have in mind.<br>We'll take it from there.</p><a :href="`mailto:${siteInfo.bookingEmail}`" class="booking-email">{{ siteInfo.bookingEmail }} ↗</a><div class="contact-facts"><a :href="siteInfo.bookingPhoneHref">{{ siteInfo.bookingPhone }}</a><a :href="siteInfo.mapHref" target="_blank" rel="noopener noreferrer">Mega City Mall, Ground Floor<br>Kisumu, Kenya ↗</a><span>Every day · 9 AM – 6 PM</span></div></div>
      <form class="booking-form" @submit.prevent="startBooking">
        <label>Your name<input v-model="name" name="name" autocomplete="name" placeholder="What should we call you?" required maxlength="100"></label>
        <div class="booking-field">
          <label id="booking-service-label" for="booking-service">The occasion</label>
          <USelect id="booking-service" v-model="service" name="service" :items="serviceOptions"
            aria-labelledby="booking-service-label" variant="none" class="booking-choice" />
        </div>
        <div class="booking-field">
          <label id="booking-date-label" for="booking-date">A date in mind? <small>(optional)</small></label>
          <div class="booking-date-row">
            <UPopover v-model:open="calendarOpen" :content="{ align: 'start' }">
              <UButton id="booking-date" type="button" variant="ghost" color="neutral"
                aria-labelledby="booking-date-label" class="booking-choice">
                <span>{{ formattedDate || 'Choose a date' }}</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
              </UButton>
              <template #content>
                <UCalendar v-model="date" :min-value="minimumDate" class="p-3" aria-label="Preferred session date" @update:model-value="calendarOpen = false" />
              </template>
            </UPopover>
            <UButton v-if="date" type="button" variant="ghost" color="neutral" aria-label="Clear preferred date" @click="date = undefined">Clear</UButton>
          </div>
        </div>
        <label>Tell us a little more <small>(optional)</small><textarea v-model="message" name="message" rows="2" placeholder="Your vision, your people, your moment…" maxlength="1500" /></label>
        <button type="submit" class="editorial-button">Let's talk on WhatsApp <span aria-hidden="true">↗</span></button>
        <p class="form-note">Opens WhatsApp with your inquiry. Review it before sending.<br>By continuing, you're choosing to contact us through WhatsApp.</p>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { CalendarDate, DateFormatter, today } from '@internationalized/date';
import { services, siteInfo } from '~/data/site';
const name = ref('');
const service = ref('Portrait Photography');
const serviceOptions = services.map(item => item.title);
const date = shallowRef<CalendarDate>();
const calendarOpen = ref(false);
const minimumDate = today('Africa/Nairobi');
const dateFormatter = new DateFormatter('en-KE', { dateStyle: 'medium', timeZone: 'Africa/Nairobi' });
const formattedDate = computed(() => date.value ? dateFormatter.format(date.value.toDate('Africa/Nairobi')) : '');
const message = ref('');
function startBooking() {
  const text = `Hi Lix Photography! I'm ${name.value.trim()}. I'd like to book ${service.value}.${date.value ? ` Preferred date: ${date.value.toString()}.` : ''}${message.value.trim() ? ` ${message.value.trim()}` : ''}`;
  window.open(`${siteInfo.whatsappHref}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}
</script>
