<script lang="ts" setup>
import type { CardTextProps } from './types';
import { tryOmit } from '@windx-foobar/shared';

const props = withDefaults(defineProps<CardTextProps>(), {
  tag: 'p'
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
