<script lang="ts" setup>
const visible = ref();
</script>

<template>
  <h2>Базовая</h2>
  <p>Диалог используется как контейнер, а видимость контролируется с помощью пропса <code>visible</code>.</p>

  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="text-center">
        <BButton label="Показать" severity="primary" @click="visible = true" />
      </div>

      <BDialog v-model:visible="visible" modal header="Заголовок модального окна" position="top" :draggable="false">
        У-у-у, вы читаете этот текст в модальном режиме!

        <template #footer>
          <BButton type="button" label="Cancel" severity="secondary" @click="visible = false" />
          <BButton type="button" label="Save" severity="primary" @click="visible = false" />
        </template>
      </BDialog>
    </div>
  </div>
</template>
