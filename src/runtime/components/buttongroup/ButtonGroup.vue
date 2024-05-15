<script lang="ts">
import type { ButtonGroupProps } from './types';

import { provide, defineComponent, getCurrentInstance, defineSlots, type PropType, type SlotsType } from 'vue';
import BaseComponent from 'primevue/basecomponent';

import ButtonGroupStyle from './style/ButtonGroupStyle';

export default defineComponent({
  name: 'ButtonGroup',
  inheritAttrs: false,
  extends: BaseComponent,
  style: ButtonGroupStyle,
  props: {
    pt: {
      type: Object as PropType<ButtonGroupProps['pt']>,
      required: false
    },
    ptOptions: {
      type: Object as PropType<ButtonGroupProps['ptOptions']>,
      required: false
    },
    unstyled: {
      type: Boolean as PropType<ButtonGroupProps['unstyled']>,
      required: false
    }
  },
  slots: Object as SlotsType<{
    default: { xxx: number };
  }>,
  setup() {
    provide('parentInstance', getCurrentInstance());
  }
});
</script>

<template>
  <div :class="cx('root')" role="group" v-bind="ptm('root')">
    <slot />
  </div>
</template>
