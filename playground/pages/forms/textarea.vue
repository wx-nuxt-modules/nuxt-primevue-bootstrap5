<script setup lang="ts">
const inputs = reactive({
  basic: '',
  valid: undefined,
  invalid: undefined
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Большое поле</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <p>Модель можно привязать с помощью стандартной директивы <code>v-model</code>.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BTextarea v-model="inputs.basic" rows="5" />
          </div>
        </div>
      </div>
    </div>

    <h2>Состояние поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BTextarea v-model="inputs.valid" rows="3" state="valid" />
            <BTextarea v-model="inputs.invalid" rows="3" state="invalid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
