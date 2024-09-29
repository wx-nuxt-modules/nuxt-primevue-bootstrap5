<script setup lang="ts">
const inputs = reactive({
  basic: '',
  sizes: ['', '', ''],
  masksLiteral: [undefined, undefined, undefined],
  optional: '',
  slotChar: '',
  filled: '99-999999',
  valid: undefined,
  invalid: undefined,
  disabled: ['Выключенное', 'Выключенное только для чтения'],
  readonly: '99-999999',
  readonlyPlainText: ['99-999999', '']
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Базовое поле (с маской ввода)</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <p>InputMask используется в качестве контролируемого ввода c <code>v-model</code>.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask v-model="inputs.basic" class="mb-3" mask="99-999999" placeholder="99-999999" />
            <pre class="mb-0">value: {{ inputs.basic }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Формат литерала маски</h2>
    <p>
      Формат маски может представлять собой комбинацию следующих определений; <code>a</code> для буквенных символов,
      <code>9</code> для цифровых символов и <code>*</code> для буквенно-цифровых символов. Кроме того, также
      принимаются символы форматирования, такие как <code>(</code>, <code>)</code>, <code>-</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-4">
            <label for="SSN" class="font-weight-bold">SSN</label>
            <BInputMask
              v-model="inputs.masksLiteral[0]"
              id="SSN"
              class="mb-3"
              mask="999-99-9999"
              placeholder="999-99-9999"
            />
            <pre class="mb-0">value: {{ inputs.masksLiteral[0] }}</pre>
          </div>
          <div class="col-4">
            <label for="phone" class="font-weight-bold">Phone</label>
            <BInputMask
              v-model="inputs.masksLiteral[1]"
              id="phone"
              class="mb-3"
              mask="(999) 999-9999"
              placeholder="(999) 999-9999"
            />
            <pre class="mb-0">value: {{ inputs.masksLiteral[1] }}</pre>
          </div>
          <div class="col-4">
            <label for="serial" class="font-weight-bold">Serial</label>
            <BInputMask
              v-model="inputs.masksLiteral[2]"
              id="serial"
              class="mb-3"
              mask="a*-999-a999"
              placeholder="a*-999-a999"
            />
            <pre class="mb-0">value: {{ inputs.masksLiteral[2] }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Ввод не до конца</h2>
    <p>
      Если ввод не завершает определение маски, он очищается по умолчанию. Используйте <code>autoClear</code> для
      управления этим поведением. Кроме того, <code>?</code> используется для обозначения чего-либо после
      вопросительного знака (необязательно).
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask
              v-model="inputs.optional"
              class="mb-3"
              mask="(999) 999-9999? x99999"
              placeholder="(999) 999-9999? x99999"
              :auto-clear="false"
            />
            <pre class="mb-0">value: {{ inputs.optional }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Заполнитель</h2>
    <p>
      Заполнителем по умолчанию для маски является нижнее подчеркивание (<code>_</code>), которое можно настроить с
      помощью
      <code>slotChar</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask
              v-model="inputs.slotChar"
              class="mb-3"
              placeholder="99/99/9999"
              mask="99/99/9999"
              slotChar="mm/dd/yyyy"
            />
            <pre class="mb-0">value: {{ inputs.slotChar }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Размеры поля</h2>
    <p>Размер поля указывается через пропс <code>size</code>.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-4">
            <BInputMask v-model="inputs.sizes[0]" mask="99-999999" size="sm" placeholder="Small size" />
          </div>
          <div class="col-4">
            <BInputMask v-model="inputs.sizes[1]" mask="99-999999" placeholder="Default size" />
          </div>
          <div class="col-4">
            <BInputMask v-model="inputs.sizes[2]" mask="99-999999" size="lg" placeholder="Large size" />
          </div>
        </div>
      </div>
    </div>

    <h2>Заполненное поле</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask v-model="inputs.filled" variant="filled" mask="99-999999" />
          </div>
        </div>
      </div>
    </div>

    <h2>Состояние поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask v-model="inputs.valid" state="valid" mask="99-999999" />
            <BInputMask v-model="inputs.invalid" state="invalid" mask="99-999999" />
          </div>
        </div>
      </div>
    </div>

    <h2>Отключенное поле</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask :placeholder="inputs.disabled[0]" mask="99-999999" disabled />
            <BInputMask v-model="inputs.disabled[1]" mask="99-999999" disabled readonly />
          </div>
        </div>
      </div>
    </div>

    <h2>Только для чтения</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask v-model="inputs.readonly" mask="99-999999" readonly />
          </div>
        </div>
      </div>
    </div>

    <h2>Простой текст только для чтения</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BInputMask v-model="inputs.readonly" mask="99-999999" readonly plain-text />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
