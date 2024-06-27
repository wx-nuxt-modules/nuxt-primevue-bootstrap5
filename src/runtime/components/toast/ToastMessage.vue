<script>
import { defineComponent } from 'vue';
import ToastMessage from 'primevue/toast/ToastMessage.vue';
import InfoCircleIcon from 'primevue/icons/infocircle';
import CheckIcon from 'primevue/icons/check';
import ExclamationTriangleIcon from 'primevue/icons/exclamationtriangle';
import TimesCircleIcon from 'primevue/icons/timescircle';

export default defineComponent({
  name: 'ToastMessage',
  extends: ToastMessage,
  props: {
    warningIcon: {
      type: String,
      default: null
    },
    dangerIcon: {
      type: String,
      default: null
    },
    /** @deprecated */
    templates: {}
  },
  computed: {
    iconComponent() {
      return {
        info: !this.infoIcon && InfoCircleIcon,
        success: !this.successIcon && CheckIcon,
        warning: !this.warningIcon && ExclamationTriangleIcon,
        danger: !this.dangerIcon && TimesCircleIcon
      }[this.message.severity || 'info'];
    }
  }
});
</script>

<template>
  <div :class="[cx('content'), message.contentStyleClass]" v-bind="ptm('content')">
    <slot name="root" :message="message" :closeCallback="onCloseClick">
      <slot
        name="header"
        :attrs="{ class: cx('header'), ...ptm('header') }"
        :message="message"
        :closeCallback="onCloseClick"
      >
        <div :class="cx('header')" v-bind="ptm('header')">
          <slot name="icon" :class="cx('icon')" v-bind="ptm('icon')">
            <Component
              :is="iconComponent && iconComponent.name ? iconComponent : 'span'"
              :class="cx('icon')"
              v-bind="ptm('icon')"
            />
          </slot>

          <strong :class="cx('summary')" v-bind="ptm('summary')">{{ message.summary }}</strong>
          <div v-if="message.closable !== false" v-bind="ptm('buttonContainer')">
            <button
              v-ripple
              :class="cx('closeButton')"
              type="button"
              :aria-label="closeAriaLabel"
              @click="onCloseClick"
              autofocus
              v-bind="{ ...closeButtonProps, ...ptm('button'), ...ptm('closeButton') }"
            >
              <slot
                name="closeicon"
                :class="[cx('closeIcon'), closeIcon]"
                v-bind="{ ...ptm('buttonIcon'), ...ptm('closeIcon') }"
              >
                <TimesIcon
                  :class="[cx('closeIcon'), closeIcon]"
                  v-bind="{ ...ptm('buttonIcon'), ...ptm('closeIcon') }"
                />
              </slot>
            </button>
          </div>
        </div>
      </slot>

      <slot name="body" :attrs="{ class: cx('body'), ...ptm('body') }" :message="message" :closeCallback="onCloseClick">
        <div :class="cx('body')" v-bind="ptm('body')">
          {{ message.detail }}
        </div>
      </slot>
    </slot>
  </div>
</template>
