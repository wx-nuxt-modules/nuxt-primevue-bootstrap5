<script lang="ts" setup>
import type { CardTitleProps } from './types';

const props = withDefaults(defineProps<CardTitleProps>(), {
  tag: 'h5'
});
const slots = useSlots();

function RootComponent() {
  const _props = {
    class: 'card-title bpv-card-title',
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
