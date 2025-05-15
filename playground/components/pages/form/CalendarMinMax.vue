<script lang="ts" setup documentation>
// non-reactive
const { minDate, maxDate } = ((today) => {
  const month = today.getMonth();
  const year = today.getFullYear();

  const min = new Date(today);
  const max = new Date(today);

  min.setMonth(month === 0 ? 11 : month - 1);
  min.setFullYear(month === 0 ? year - 1 : year);
  max.setMonth(month === 11 ? 0 : month + 1);
  max.setFullYear(month === 11 ? year + 1 : year);

  return { minDate: min, maxDate: max };
})(new Date());
// end non-reactive

const value = ref();
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <BCalendar
        class="mb-3"
        v-model="value"
        date-format="dd.mm.yy"
        placeholder="06.12.2024"
        :min-date="minDate"
        :max-date="maxDate"
        input-mask
      />
      <pre class="mb-0">value: {{ value }}</pre>
    </div>
  </div>
</template>
