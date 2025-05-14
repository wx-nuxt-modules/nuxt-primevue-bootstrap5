<script lang="ts" setup>
const date = ref();
const datetime = ref();
const time = ref();
</script>

<template>
  <h2>Ввод с маской ввода</h2>
  <p>
    Маска ввода будет строиться по типу даты переданному в пропсе <code>date-format</code> или будет браться стандартное
    его значение <code>mm/dd/yy</code>. Так же стоит отметить, что <code>manual-input</code> пропс должен быть пропущен
    или не быть <code>falsy</code>.
  </p>
  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
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
    </div>
  </div>
</template>
