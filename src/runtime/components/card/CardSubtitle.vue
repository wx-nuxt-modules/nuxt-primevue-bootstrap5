<script lang="ts" setup>
import type { CardSubtitleProps } from './types';
import { useSlots, h } from '#imports';

const props = withDefaults(defineProps<CardSubtitleProps>(), {
  tag: 'h6'
});
const slots = useSlots();

function RootComponent() {
  const _props = {
    class: 'card-subtitle bpv-card-subtitle',
    innerHTML: props.html
  };

  !_props.innerHTML && delete _props.innerHTML;

  return h(props.tag, _props, slots.default!());
}
</script>

<template>
  <RootComponent>
    <slot />
  </RootComponent>
</template>
