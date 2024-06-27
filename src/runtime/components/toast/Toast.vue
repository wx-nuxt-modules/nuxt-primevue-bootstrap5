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
      <slot name="container" :message="message" :onClose="closeCallback" :closeCallback="closeCallback">
        <ToastMessage
          :message="message"
          :close-icon="$attrs['close-icon'] || $attrs['closeIcon']"
          :error-icon="$attrs['danger-icon'] || $attrs['dangerIcon']"
          :info-icon="$attrs['info-icon'] || $attrs['infoIcon']"
          :success-icon="$attrs['success-icon'] || $attrs['successIcon']"
          :warn-icon="$attrs['warning-icon'] || $attrs['warningIcon']"
          @close="closeCallback"
        >
          <template #root="slotProps">
            <slot name="message(root)" v-bind="slotProps" />
          </template>
          <template #header="slotProps">
            <slot name="message(header)" v-bind="slotProps" />
          </template>
          <template #icon="slotProps">
            <slot name="message(icon)" v-bind="slotProps" />
          </template>
          <template #body="slotProps">
            <slot name="message(body)" v-bind="slotProps" />
          </template>
          <template #closeicon="slotProps">
            <slot name="message(closeicon)" v-bind="slotProps" />
          </template>
        </ToastMessage>
      </slot>
    </template>
  </Toast>
</template>
