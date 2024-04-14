<script lang="ts" setup>
import type { CardFooterProps } from './types';

const props = withDefaults(defineProps<CardFooterProps>(), {
  tag: 'div'
});
const slots = useSlots();

function RootComponent() {
  const _props = {
    class: 'card-footer bpv-card-footer',
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
