<script setup lang="ts">
const inputs = reactive({
  basic: '',
  toggleMask: '',
  valid: '',
  invalid: '',
  sizes: ['', '', '']
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Пароль</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <p>Двусторонняя привязка значений определяется с использованием <code>v-model</code>.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BPassword v-model="inputs.basic" class="mb-3" :feedback="false" />
            <pre class="mb-0">value: {{ inputs.basic }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Переключить маскирование ввода</h2>
    <p>
      Если присутствует пропс <code>toggleMask</code>, отображается значок, показывающий значение в виде обычного
      текста.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BPassword v-model="inputs.toggleMask" class="mb-3" :feedback="false" toggle-mask />
            <pre class="mb-0">value: {{ inputs.toggleMask }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Размеры поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-4">
            <label class="form-label">Размер - lg</label>
            <BPassword class="mb-3" v-model="inputs.sizes[0]" size="lg" placeholder="lg" :feedback="false" />
            <BPassword
              class="mb-3"
              v-model="inputs.sizes[0]"
              size="lg"
              placeholder="lg"
              :feedback="false"
              toggle-mask
            />
            <pre class="mb-0">value: {{ inputs.sizes[0] }}</pre>
          </div>
          <div class="col-4">
            <label class="form-label">Размер - md (по умолчанию)</label>
            <BPassword class="mb-3" v-model="inputs.sizes[1]" placeholder="md (default)" :feedback="false" />
            <BPassword
              class="mb-3"
              v-model="inputs.sizes[1]"
              placeholder="md (default)"
              :feedback="false"
              toggle-mask
            />
            <pre class="mb-0">value: {{ inputs.sizes[1] }}</pre>
          </div>
          <div class="col-4">
            <label class="form-label">Размер - sm</label>
            <BPassword class="mb-3" v-model="inputs.sizes[2]" size="sm" placeholder="sm" :feedback="false" />
            <BPassword
              class="mb-3"
              v-model="inputs.sizes[2]"
              size="sm"
              placeholder="sm"
              :feedback="false"
              toggle-mask
            />
            <pre class="mb-0">value: {{ inputs.sizes[2] }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Состояние поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BPassword class="mb-3" v-model="inputs.valid" state="valid" :feedback="false" />
            <BPassword class="mb-3" v-model="inputs.valid" state="valid" toggle-mask :feedback="false" />
            <pre class="mb-0">value: {{ inputs.valid }}</pre>
          </div>
          <div class="col-6">
            <BPassword class="mb-3" v-model="inputs.invalid" state="invalid" :feedback="false" />
            <BPassword class="mb-3" v-model="inputs.invalid" state="invalid" toggle-mask :feedback="false" />
            <pre class="mb-0">value: {{ inputs.invalid }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
