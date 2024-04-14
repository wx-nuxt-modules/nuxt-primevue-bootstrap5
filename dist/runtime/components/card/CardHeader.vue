<script lang="ts" setup>
import type { CardHeaderProps } from './types';

const props = withDefaults(defineProps<CardHeaderProps>(), {
  tag: 'div'
});
const slots = useSlots();

function RootComponent() {
  const _props = {
    class: 'card-header bpv-card-header',
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
