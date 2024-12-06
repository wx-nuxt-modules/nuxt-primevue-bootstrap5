<script lang="ts" setup>
const value = ref();
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
        <div class="col-6">
          <BCalendar class="mb-3" v-model="value" date-format="dd.mm.yy" input-mask placeholder="06.12.2024" />
          <pre class="mb-0">value: {{ value }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
