<script lang="ts" setup>
const visible = ref();
</script>

<template>
  <h2>Свой шаблон</h2>
  <p>
    <code>Header</code> и <code>Footer</code>
    могут быть изменены через
    <code>{{ '<template #header></template>' }}</code>
    и
    <code>{{ '<template #footer></template>' }}</code>
    соответственно
  </p>

  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="text-center">
        <BButton label="Показать" severity="primary" @click="visible = true" />
      </div>

      <BDialog v-model:visible="visible" modal position="top" :draggable="false">
        <template #header>
          <div class="row gx-2 align-items-center justify-content-center">
            <div class="col-auto">
              <img
                src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                alt="Amy Elsner"
                class="rounded-3"
                width="28"
              />
            </div>
            <div class="col">
              <BDialogTitle class="fw-bold">Amy Elsner</BDialogTitle>
            </div>
          </div>
        </template>

        У-у-у, вы читаете этот текст в модальном режиме!

        <template #footer>
          <BButton type="button" label="Cancel" severity="secondary" outlined @click="visible = false" />
          <BButton type="button" label="Save" severity="secondary" @click="visible = false" />
        </template>
      </BDialog>
    </div>
  </div>
</template>
