<script setup lang="ts">
interface Props {
  body?: string;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {});

function getId(postfix?: string) {
  let base = '__BPV__OFFCANVAS-LAYOUT';

  if (postfix) {
    base = `${base}-${postfix}`;
  }

  return `${base}__`;
}
</script>

<template>
  <div class="offcanvas bpv-offcanvas-layout-aside" tabindex="-1" :id="getId()" :aria-labelledby="getId('LABEL')">
    <div class="offcanvas-header">
      <slot name="header">
        <div class="offcanvas-brand">
          <slot name="brand" />
        </div>
        <h5 class="offcanvas-title">
          <slot name="title">{{ title }}</slot>
        </h5>
      </slot>
    </div>

    <div class="offcanvas-body">
      <slot>
        {{ body }}
      </slot>
    </div>
  </div>
</template>
