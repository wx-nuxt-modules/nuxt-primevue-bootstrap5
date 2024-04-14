<script setup lang="ts"></script>

<template>
  <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
    <BdAside />

    <div class="bd-main order-1">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.bpv-form-control + .bpv-form-control {
  margin-top: 0.5rem;
}

.bpv-input-group + .bpv-input-group {
  margin-top: 0.5rem;
}
</style>
