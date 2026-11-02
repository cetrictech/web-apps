<template>
  <Transition
    appear
    :enter-active-class="`${transitionName}-enter-active`"
    :enter-from-class="`${transitionName}-enter-from`"
    :enter-to-class="`${transitionName}-enter-to`"
  >
    <component :is="as" v-bind="attrs" :class="wrapperClass" :style="[wrapperStyle, motionStyle]">
      <slot />
    </component>
  </Transition>
</template>

<script setup lang="ts">
import { computed, useAttrs, type HTMLAttributes, type StyleValue } from 'vue';

defineOptions({ inheritAttrs: false });

type RevealEffect = 'up' | 'left' | 'right' | 'zoom';

const props = withDefaults(
  defineProps<{
    as?: string | object;
    effect?: RevealEffect;
    delay?: number;
    duration?: number;
    distance?: number;
    wrapperClass?: HTMLAttributes['class'];
    wrapperStyle?: StyleValue;
  }>(),
  {
    as: 'div',
    effect: 'up',
    delay: 0,
    duration: 700,
    distance: 26,
    wrapperClass: undefined,
    wrapperStyle: undefined,
  },
);

const attrs = useAttrs();

const transitionName = computed(() => `reveal-${props.effect}`);
const motionStyle = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-duration': `${props.duration}ms`,
  '--reveal-distance': `${props.distance}px`,
}));
</script>
