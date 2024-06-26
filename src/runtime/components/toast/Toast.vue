<script lang="ts">
import { defineComponent } from 'vue';
import Toast from 'primevue/toast';
import BaseToast from 'primevue/toast/BaseToast.vue';

import ToastMessage from './ToastMessage.vue';

export default defineComponent({
  name: 'BPVToast',
  inheritAttrs: false,
  extends: BaseToast,
  components: { Toast, ToastMessage }
});
</script>

<template>
  <Toast v-bind="{ ...$attrs, ...$props }">
    <template #container="{ message, closeCallback }">
      <Component
        v-if="$slots.container"
        :is="$slots.container"
        :message="message"
        :onClose="closeCallback"
        :closeCallback="closeCallback"
      />

      <ToastMessage
        :message="message"
        :templates="$slots"
        :close-icon="$attrs['close-icon'] || $attrs['closeIcon']"
        :error-icon="$attrs['danger-icon'] || $attrs['dangerIcon']"
        :info-icon="$attrs['info-icon'] || $attrs['infoIcon']"
        :success-icon="$attrs['success-icon'] || $attrs['successIcon']"
        :warn-icon="$attrs['warning-icon'] || $attrs['warningIcon']"
        @close="closeCallback"
      />
    </template>
  </Toast>
</template>
