<script lang="ts" setup documentation>
const date = ref(new Date());
</script>

<template>
  <div class="row justify-content-center gy-3">
    <div class="col-6">
      <BCalendar class="mb-3" v-model="date" date-format="dd.mm.yy" disabled />
      <pre class="mb-0">value: {{ date }}</pre>
    </div>
  </div>
</template>
