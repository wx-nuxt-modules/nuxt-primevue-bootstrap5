<script setup lang="ts">
const inputs = reactive({
  basic: '',
  sizes: ['', '', ''],
  withLabel: '',
  floatLabel: '',
  filled: '5000',
  valid: '',
  invalid: '',
  disabled: ['Выключенное', 'Выключенное только для чтения'],
  readonly: 'Только для чтения...',
  readonlyPlainText: ['user@example.org', ''],
  datalist: ''
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Базовое поле</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputText type="text" v-model="inputs.basic" />
          </div>
        </div>
      </div>
    </div>

    <h2>Размеры поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputText type="text" v-model="inputs.sizes[0]" size="sm" placeholder="Small size" />
            <BInputText type="text" v-model="inputs.sizes[1]" placeholder="Default size" />
            <BInputText type="text" v-model="inputs.sizes[2]" size="lg" placeholder="Large size" />
          </div>
        </div>
      </div>
    </div>

    <h2>С подсказками</h2>
    <div class="bd-callout bd-callout-warning">
      Текст формы должен быть явно связан с элементом управления формой, к которому он относится, с помощью атрибута
      <code>aria-describedby</code>. Это гарантирует, что вспомогательные технологии, такие как программы чтения с
      экрана, будут объявлять этот текст формы, когда пользователь фокусируется или вводит элемент управления.
    </div>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BFormLabel for="usernameWithLabel">Username</BFormLabel>
            <BInputText id="usernameWithLabel" type="text" v-model="inputs.withLabel" aria-describedby="usernameHelp" />
            <BFormText id="usernameHelp">Enter your username to reset your password.</BFormText>
          </div>
        </div>
      </div>
    </div>

    <h2>Плавающий label</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BFloatLabel>
              <BInputText type="text" v-model="inputs.floatLabel" />
              <BFormLabel>Username</BFormLabel>
            </BFloatLabel>
          </div>
        </div>
      </div>
    </div>

    <h2>Заполненное поле</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputText type="text" v-model="inputs.filled" variant="filled" />
          </div>
        </div>
      </div>
    </div>

    <h2>Состояние поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputText type="text" v-model="inputs.valid" state="valid" />
            <BInputText type="text" v-model="inputs.invalid" state="invalid" />
          </div>
        </div>
      </div>
    </div>

    <h2>Отключенное поле</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputText type="text" :placeholder="inputs.disabled[0]" disabled />
            <BInputText type="text" v-model="inputs.disabled[1]" disabled readonly />
          </div>
        </div>
      </div>
    </div>

    <h2>Только для чтения</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputText type="text" v-model="inputs.readonly" readonly />
          </div>
        </div>
      </div>
    </div>

    <h2>Простой текст только для чтения</h2>

    <h3>Вывод столбцом</h3>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row mb-3">
          <BFormLabel class="col-sm-2" inline>Email</BFormLabel>
          <div class="col-sm-10">
            <BInputText type="text" v-model="inputs.readonlyPlainText[0]" readonly plain-text />
          </div>
        </div>
        <div class="row">
          <BFormLabel class="col-sm-2" inline>Пароль</BFormLabel>
          <div class="col-sm-10">
            <BInputText type="password" v-model="inputs.readonlyPlainText[1]" />
          </div>
        </div>
      </div>
    </div>

    <h3>Вывод в одну строку</h3>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row">
          <div class="col-auto">
            <BFormLabel hidden>Email</BFormLabel>
            <BInputText type="text" v-model="inputs.readonlyPlainText[0]" readonly plain-text />
          </div>
          <div class="col-auto">
            <BFormLabel hidden>Пароль</BFormLabel>
            <BInputText type="password" v-model="inputs.readonlyPlainText[1]" />
          </div>
          <div class="col-auto">
            <BButton severity="primary">Отправить</BButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
