<script lang="ts" setup>
import { useOffcanvasLayout } from '../../composables/useOffcanvasLayout';

const { size } = useOffcanvasLayout();
</script>

<template>
  <div class="bpv-offcanvas-layout" :class="`bpv-offcanvas-layout-${size}`">
    <slot />
  </div>
</template>
