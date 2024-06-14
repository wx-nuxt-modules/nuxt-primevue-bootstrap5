<script lang="ts">
import { provide, defineComponent, getCurrentInstance } from 'vue';
import BaseComponent from 'primevue/basecomponent';

import ButtonGroupStyle from './style/ButtonGroupStyle';

export default defineComponent({
  name: 'ButtonGroup',
  inheritAttrs: false,
  extends: BaseComponent,
  style: ButtonGroupStyle,
  props: {
    pt: {
      type: Object,
      required: false
    },
    ptOptions: {
      type: Object,
      required: false
    },
    unstyled: {
      type: Boolean,
      required: false
    }
  },
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
