<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import OffcanvasLayoutAsideHeader from './OffcanvasLayoutAsideHeader.vue';

interface Props {
  body?: string;
  title?: string;
  headerHref?: string;
  headerTo?: RouteLocationRaw;
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
    <slot name="header">
      <OffcanvasLayoutAsideHeader :href="headerHref" :to="headerTo" :title-id="getId('LABEL')">
        <template #brand>
          <slot name="brand" />
        </template>

        <template #title="slotProps">
          <slot name="title">{{ title }}</slot>
        </template>
      </OffcanvasLayoutAsideHeader>
    </slot>

    <div class="offcanvas-body">
      <slot>
        {{ body }}
      </slot>
    </div>
  </div>
</template>
