<script lang="ts" setup>
import type { CardBodyProps } from './types';

const props = withDefaults(defineProps<CardBodyProps>(), {
  tag: 'div'
});
const slots = useSlots();

function RootComponent() {
  const _props: any = {
    class: 'card-body bpv-card-body',
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
