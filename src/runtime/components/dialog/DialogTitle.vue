<script lang="ts" setup>
import { useSlots, h } from '#imports';

const props = withDefaults(
  defineProps<{
    tag?: string;
    html?: string;
  }>(),
  {
    tag: 'span'
  }
);
const slots = useSlots();

function RootComponent() {
  const _props = {
    class: 'modal-title bpv-modal-title',
    innerHTML: props.html
  };

  !_props.innerHTML && delete _props.innerHTML;

  return h(props.tag, _props, [slots.default?.()]);
}
</script>

<template>
  <RootComponent>
    <slot />
  </RootComponent>
</template>
