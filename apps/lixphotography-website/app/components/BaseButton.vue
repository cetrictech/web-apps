<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClass" v-bind="attrs">
    <slot />
  </NuxtLink>

  <a v-else-if="href" :href="href" :class="buttonClass" v-bind="attrs">
    <slot />
  </a>

  <button v-else :type="type" :class="buttonClass" v-bind="attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';

defineOptions({ inheritAttrs: false });

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    to?: string;
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    type?: 'button' | 'submit' | 'reset';
    block?: boolean;
  }>(),
  {
    to: undefined,
    href: undefined,
    variant: 'primary',
    size: 'md',
    type: 'button',
    block: false,
  },
);

const attrs = useAttrs();

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm md:text-base',
  lg: 'px-6 py-3.5 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-gold text-brand-ink shadow-[0_18px_48px_rgba(201,151,77,0.26)] hover:bg-brand-gold-soft',
  secondary:
    'border border-brand-gold/30 bg-transparent text-foreground hover:border-brand-gold/55 hover:bg-brand-gold/10',
  ghost:
    'border border-border/80 bg-card/70 text-foreground hover:border-brand-gold/35 hover:bg-brand-gold/8',
};

const buttonClass = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.02em] transition duration-300 motion-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  sizeClasses[props.size],
  variantClasses[props.variant],
  props.block ? 'w-full' : '',
]);
</script>
