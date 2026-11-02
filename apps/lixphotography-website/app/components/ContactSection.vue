<template>
  <section id="contact" class="scroll-mt-32 section-shell mt-24 pb-10">
    <div class="container mx-auto">
      <RevealBlock>
        <SectionHeading
          eyebrow="Booking & Contact"
          title="Plan your next session with a studio experience that feels polished from the first message."
          description="Use the inquiry form to start a booking, then continue on WhatsApp, by phone, by email, or through the linked Google Maps location for easy studio navigation."
        />
      </RevealBlock>

      <div class="mt-10 grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
        <RevealBlock effect="left" :delay="100">
          <div class="premium-panel rounded-[34px] p-6 sm:p-8">
            <form class="grid gap-4" @submit.prevent="handleSubmit">
              <div class="grid gap-4 md:grid-cols-2">
                <label class="grid gap-2 text-sm text-muted-foreground">
                  <span>Full Name</span>
                  <input
                    v-model="form.fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    class="rounded-[20px] border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-brand-gold/50"
                  >
                </label>

                <label class="grid gap-2 text-sm text-muted-foreground">
                  <span>Phone Number</span>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    placeholder="+254 ..."
                    class="rounded-[20px] border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-brand-gold/50"
                  >
                </label>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <label class="grid gap-2 text-sm text-muted-foreground">
                  <span>Email</span>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    class="rounded-[20px] border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-brand-gold/50"
                  >
                </label>

                <label class="grid gap-2 text-sm text-muted-foreground">
                  <span>Service Interested In</span>
                  <select
                    v-model="form.service"
                    required
                    class="rounded-[20px] border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition duration-200 focus:border-brand-gold/50"
                  >
                    <option value="" disabled>Select a service</option>
                    <option v-for="service in serviceOptions" :key="service" :value="service">
                      {{ service }}
                    </option>
                  </select>
                </label>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <label class="grid gap-2 text-sm text-muted-foreground">
                  <span>Preferred Date</span>
                  <input
                    v-model="form.preferredDate"
                    type="date"
                    required
                    class="rounded-[20px] border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition duration-200 focus:border-brand-gold/50"
                  >
                </label>

                <label class="grid gap-2 text-sm text-muted-foreground">
                  <span>Best Contact Method</span>
                  <select
                    v-model="form.contactMethod"
                    class="rounded-[20px] border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition duration-200 focus:border-brand-gold/50"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Email">Email</option>
                  </select>
                </label>
              </div>

              <label class="grid gap-2 text-sm text-muted-foreground">
                <span>Message</span>
                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Tell us about your preferred session style, number of people, and any key details."
                  class="rounded-[24px] border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-brand-gold/50"
                />
              </label>

              <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <BaseButton type="submit" variant="primary" size="lg">Send Inquiry</BaseButton>
                <p class="text-sm leading-7 text-muted-foreground">
                  Ready to wire into email, CRM, or WhatsApp automation for launch.
                </p>
              </div>

              <p
                v-if="submitted"
                aria-live="polite"
                class="rounded-[20px] border border-brand-gold/20 bg-brand-gold/10 px-4 py-3 text-sm leading-7 text-foreground"
              >
                Inquiry captured in the demo flow. Connect this form to the final studio booking
                workflow before launch.
              </p>
            </form>
          </div>
        </RevealBlock>

        <div class="grid gap-4">
          <RevealBlock effect="right" :delay="150">
            <div class="premium-panel-soft rounded-[30px] p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Visit Our Studio
              </p>
              <h3 class="font-display mt-3 text-4xl font-semibold tracking-tight text-foreground">
                {{ siteInfo.location }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-muted-foreground">
                Lix Photography is positioned for studio consultations, styled portraits, and easy
                access for clients across Kisumu. Use the map link below for direct navigation to
                the studio.
              </p>

              <div class="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  :href="siteInfo.whatsappHref"
                  class="rounded-[22px] border border-brand-gold/24 bg-brand-gold/10 px-4 py-4 text-sm font-medium text-foreground transition duration-200 hover:border-brand-gold/40 hover:bg-brand-gold/16"
                >
                  WhatsApp Booking
                </a>
                <a
                  :href="siteInfo.bookingPhoneHref"
                  class="rounded-[22px] border border-border bg-background/70 px-4 py-4 text-sm font-medium text-foreground transition duration-200 hover:border-brand-gold/35 hover:bg-brand-gold/8"
                >
                  Call Studio
                </a>
                <a
                  :href="siteInfo.mapHref"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-[22px] border border-border bg-background/70 px-4 py-4 text-sm font-medium text-foreground transition duration-200 hover:border-brand-gold/35 hover:bg-brand-gold/8"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock effect="right" :delay="220">
            <div class="premium-panel-soft rounded-[30px] p-6">
              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                  >
                    Phone
                  </p>
                  <p class="mt-2 text-base text-foreground">{{ siteInfo.bookingPhone }}</p>
                </div>
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                  >
                    Email
                  </p>
                  <p class="mt-2 text-base text-foreground">{{ siteInfo.bookingEmail }}</p>
                </div>
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                  >
                    Business Hours
                  </p>
                  <p class="mt-2 text-base text-foreground">{{ siteInfo.hours }}</p>
                </div>
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                  >
                    Location
                  </p>
                  <a
                    :href="siteInfo.mapHref"
                    target="_blank"
                    rel="noreferrer"
                    class="mt-2 inline-flex text-base text-foreground transition duration-200 hover:text-brand-gold"
                  >
                    {{ siteInfo.location }}
                  </a>
                  <p class="mt-2 text-sm text-muted-foreground">{{ siteInfo.mapCoordinates }}</p>
                </div>
              </div>

              <p class="mt-5 text-sm leading-7 text-muted-foreground">
                {{ siteInfo.hoursNote }}
              </p>
            </div>
          </RevealBlock>

          <RevealBlock effect="zoom" :delay="280">
            <div class="premium-panel relative overflow-hidden rounded-[30px] p-6">
              <div
                class="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,151,77,0.16),transparent_42%,rgba(255,255,255,0.04))]"
              />
              <div class="relative">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  Studio Map
                </p>
                <div class="mt-4 rounded-[26px] border border-border bg-background/70 p-4">
                  <div
                    class="premium-grid relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-[22px] border border-brand-gold/16 bg-[linear-gradient(135deg,rgba(201,151,77,0.08),rgba(0,0,0,0.04))]"
                  >
                    <div class="absolute h-20 w-20 rounded-full bg-brand-gold/12 blur-2xl" />
                    <div class="relative flex flex-col items-center text-center">
                      <div
                        class="flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/24 bg-brand-gold/12 text-brand-gold"
                      >
                        <svg
                          class="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </div>
                      <p class="font-display mt-4 text-3xl font-semibold text-foreground">
                        Mega City Mall
                      </p>
                      <p class="mt-2 max-w-xs text-sm leading-7 text-muted-foreground">
                        Ground Floor, Kisumu. Open the live Google Maps pin for turn-by-turn
                        navigation to the studio.
                      </p>
                      <a
                        :href="siteInfo.mapHref"
                        target="_blank"
                        rel="noreferrer"
                        class="mt-5 inline-flex rounded-full border border-brand-gold/24 bg-brand-gold/10 px-5 py-3 text-sm font-medium text-foreground transition duration-200 hover:border-brand-gold/40 hover:bg-brand-gold/16"
                      >
                        Open Google Maps
                      </a>
                      <p class="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {{ siteInfo.mapCoordinates }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { services, siteInfo } from '~/data/site';

const serviceOptions = services.map((service) => service.title);

const submitted = ref(false);

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  service: '',
  preferredDate: '',
  contactMethod: 'WhatsApp',
  message: '',
});

const handleSubmit = () => {
  submitted.value = true;
};
</script>
