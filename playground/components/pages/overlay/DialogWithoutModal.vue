<script lang="ts" setup>
const visible = ref();
</script>

<template>
  <h2>Модальное окно без заднего фона</h2>
  <p>
    Слой заднего фона позади диалогового окна настроен с использованием пропса <code>modal</code>. По умолчанию слой
    заднего фона не добавляется.
  </p>

  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="text-center">
        <BButton label="Показать" severity="primary" @click="visible = true" />
      </div>

      <BDialog v-model:visible="visible" header="Без заднего фона" position="center" :draggable="false">...</BDialog>
    </div>
  </div>
</template>
