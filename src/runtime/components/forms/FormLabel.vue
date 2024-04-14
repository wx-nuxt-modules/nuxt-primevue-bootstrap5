<script lang="ts" setup>
import type { LabelHTMLAttributes } from 'vue';

interface FormLabelProps {
  tag?: string;
  html?: string;
  for?: LabelHTMLAttributes['for'];
  hidden?: boolean;
  inline?: boolean;
}

const props = withDefaults(defineProps<FormLabelProps>(), {
  tag: 'label'
});
const slots = useSlots();

function RootComponent() {
  const _props: any = {
    class: [
      !props.inline && ['form-label', 'bpv-form-label'],
      props.inline && ['col-form-label', 'bpv-col-form-label'],
      props.hidden && 'visually-hidden'
    ],
    innerHTML: props.html,
    for: props.for
  };

  !_props.innerHTML && delete _props.innerHTML;
  !_props.for && delete _props.for;

  return h(props.tag, _props, slots.default!());
}
</script>

<template>
  <RootComponent>
    <slot />
  </RootComponent>
</template>
