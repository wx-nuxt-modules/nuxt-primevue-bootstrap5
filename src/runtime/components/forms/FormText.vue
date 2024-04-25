<script lang="ts" setup>
import { useSlots, h } from '#imports';

interface FormTextProps {
  tag?: string;
  html?: string;
}

const props = withDefaults(defineProps<FormTextProps>(), {
  tag: 'div'
});
const slots = useSlots();

function RootComponent() {
  const _props: any = {
    class: 'form-text bpv-form-text',
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
