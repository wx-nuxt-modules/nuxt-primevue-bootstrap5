<script lang="ts" setup documentation>
const date = ref();
const datetime = ref();
const time = ref();
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <BFormLabel>Только дата</BFormLabel>
      <BCalendar class="mb-3" v-model="date" date-format="dd.mm.yy" placeholder="06.12.2024" input-mask />
      <pre class="mb-0">value: {{ date }}</pre>
    </div>
    <div class="col-4">
      <BFormLabel>Дата и время</BFormLabel>
      <BCalendar
        class="mb-3"
        v-model="datetime"
        date-format="dd.mm.yy"
        placeholder="06.12.2024 00:00:00"
        show-time
        show-seconds
        input-mask
      />
      <pre class="mb-0">value: {{ datetime }}</pre>
    </div>
    <div class="col-4">
      <BFormLabel>Только время</BFormLabel>
      <BCalendar class="mb-3" v-model="time" placeholder="00:00:00" time-only show-seconds input-mask />
      <pre class="mb-0">value: {{ time }}</pre>
    </div>
  </div>
</template>
