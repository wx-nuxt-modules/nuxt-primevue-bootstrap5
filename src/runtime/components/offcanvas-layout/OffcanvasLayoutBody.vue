<script setup lang="ts">
const { size } = useOffcanvasLayout();
</script>

<template>
  <div class="bpv-offcanvas-layout-body" :class="`bpv-offcanvas-layout-body-offset-${size}`">
    <slot />
  </div>
</template>
