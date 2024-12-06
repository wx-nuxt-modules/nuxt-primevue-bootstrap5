<script lang="ts" setup>
const value = ref();
</script>

<template>
  <h2>Панель кнопок</h2>
  <p>Если пропс <code>show-button-bar</code> передан, в нижней панели отображаются кнопки «Сегодня» и «Очистить».</p>
  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="row justify-content-center">
        <div class="col-6">
          <BCalendar class="mb-3" v-model="value" date-format="dd.mm.yy" placeholder="06.12.2024" show-button-bar />
          <pre class="mb-0">value: {{ value }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
