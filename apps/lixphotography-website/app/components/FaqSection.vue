<template>
  <section id="faq" class="section-shell mt-24">
    <div class="container mx-auto grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
      <RevealBlock effect="left">
        <div class="premium-panel rounded-[34px] p-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Clear answers for bookings, delivery timelines, and studio visits."
            description="Keep this section ready for future refinement as the studio confirms final booking terms, delivery windows, and communication channels."
          />
        </div>
      </RevealBlock>

      <div class="grid gap-4">
        <RevealBlock
          v-for="(item, index) in faqs"
          :key="item.question"
          effect="right"
          :delay="80 + index * 50"
        >
          <article class="premium-panel-soft rounded-[28px] p-5">
            <button
              type="button"
              class="flex w-full items-start justify-between gap-4 text-left"
              @click="toggleItem(index)"
            >
              <span class="font-display text-2xl font-semibold tracking-tight text-foreground">
                {{ item.question }}
              </span>
              <span
                class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-gold/20 text-brand-gold transition duration-200"
                :class="openIndex === index ? 'rotate-45 bg-brand-gold/10' : ''"
              >
                +
              </span>
            </button>

            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <p v-if="openIndex === index" class="mt-4 text-sm leading-7 text-muted-foreground">
                {{ item.answer }}
              </p>
            </Transition>
          </article>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { faqs } from '~/data/site';

const openIndex = ref(0);

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};
</script>
