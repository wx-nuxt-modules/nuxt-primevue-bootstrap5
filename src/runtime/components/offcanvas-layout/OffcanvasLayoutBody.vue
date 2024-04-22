<script setup lang="ts">
import { useOffcanvasLayout } from '../../composables/useOffcanvasLayout';

const { size } = useOffcanvasLayout();
</script>

<template>
  <div class="bpv-offcanvas-layout-body" :class="`bpv-offcanvas-layout-body-offset-${size}`">
    <slot />
  </div>
</template>
