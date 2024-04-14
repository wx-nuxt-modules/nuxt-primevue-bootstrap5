<script setup lang="ts">
const inputs = reactive({
  numerals: [42723, 58151, 2351.3512313, 900],
  locales: [634500.12, 634500.12, 634500.12, 634500.12],
  currencies: [634500.12, 634500.12, 634500.12, 634500.12],
  prefix: [20, 50, 10, 20],
  buttons: [20, 25, 10.5]
});

function numWord(value: number, variants: [string, string, string]) {
  const localValue = Math.abs(+value) % 100;
  const num = localValue % 10;

  if (!variants.length) return '';

  if (value > 10 && value < 20) return variants[2];
  if (num > 1 && num < 5) return variants[1];
  if (num === 1) return variants[0];
  return variants[2];
}
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Числовое поле</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <div class="bd-callout bd-callout-info">
      <p>Наследуется из "Базовое поле" разделы</p>
      <ul>
        <li>Размеры поля</li>
        <li>С подсказками</li>
        <li>Заполненное поле</li>
        <li>Состояние поля</li>
        <li>Отключенное поле</li>
        <li>Только для чтения</li>
        <li>Простой текст только для чтения</li>
      </ul>
    </div>

    <h2>Цифры</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center g-3">
          <div class="col-4">
            <BFormLabel>Целое число</BFormLabel>
            <BInputNumber v-model="inputs.numerals[0]" />
          </div>
          <div class="col-4">
            <BFormLabel>Без группировки</BFormLabel>
            <BInputNumber v-model="inputs.numerals[1]" :use-grouping="false" />
          </div>
          <div class="col-4">
            <BFormLabel>Min-Max цифр после запятой</BFormLabel>
            <BInputNumber v-model="inputs.numerals[2]" :min-fraction-digits="1" :max-fraction-digits="3" />
          </div>
          <div class="col-12">
            <BFormLabel>Min-Max граница числа</BFormLabel>
            <BInputNumber v-model="inputs.numerals[3]" :min="20" :max="80" />
          </div>
        </div>
      </div>
    </div>

    <h2>Форматы через локализации</h2>
    <div class="bd-callout bd-callout-info">
      <p>
        Подробнее
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"
          target="_blank"
          rel="nofollow noreferer"
        >
          Intl.NumberFormat
        </a>
      </p>
    </div>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center g-3">
          <div class="col-4">
            <BFormLabel>Локализация пользователя</BFormLabel>
            <BInputNumber v-model="inputs.locales[0]" :max-fraction-digits="2" />
          </div>
          <div class="col-4">
            <BFormLabel>Germany</BFormLabel>
            <BInputNumber v-model="inputs.locales[1]" locale="de-DE" />
          </div>
          <div class="col-4">
            <BFormLabel>United States</BFormLabel>
            <BInputNumber v-model="inputs.locales[2]" locale="en-US" />
          </div>
          <div class="col-12">
            <BFormLabel>India</BFormLabel>
            <BInputNumber v-model="inputs.locales[3]" locale="en-IN" />
          </div>
        </div>
      </div>
    </div>

    <h2>Валюты</h2>
    <div class="bd-callout bd-callout-info">
      <p>
        <a href="https://en.wikipedia.org/wiki/ISO_4217#Active_codes" target="_blank" rel="nofollow noreferer">
          Список доступных кодов валют
        </a>
      </p>
    </div>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center g-3">
          <div class="col-4">
            <BFormLabel>Russia</BFormLabel>
            <BInputNumber v-model="inputs.currencies[0]" mode="currency" currency="RUB" locale="ru-RU" />
          </div>
          <div class="col-4">
            <BFormLabel>Germany</BFormLabel>
            <BInputNumber v-model="inputs.currencies[1]" mode="currency" currency="EUR" locale="de-DE" />
          </div>
          <div class="col-4">
            <BFormLabel>United States</BFormLabel>
            <BInputNumber v-model="inputs.currencies[2]" mode="currency" currency="USD" locale="en-US" />
          </div>
          <div class="col-12">
            <BFormLabel>India</BFormLabel>
            <BInputNumber
              v-model="inputs.currencies[3]"
              mode="currency"
              currency="INR"
              currency-display="code"
              locale="en-IN"
            />
          </div>
        </div>
      </div>
    </div>

    <h2>Префиксы и суффиксы</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center g-3">
          <div class="col-4">
            <BFormLabel>Километры</BFormLabel>
            <BInputNumber v-model="inputs.prefix[0]" suffix=" км" />
          </div>
          <div class="col-4">
            <BFormLabel>Проценты</BFormLabel>
            <BInputNumber v-model="inputs.prefix[1]" suffix=" %" />
          </div>
          <div class="col-4">
            <BFormLabel>Срок истечения</BFormLabel>
            <BInputNumber
              v-model="inputs.prefix[2]"
              prefix="Истекает через "
              :suffix="` ${numWord(inputs.prefix[2], ['день', 'дня', 'дней'])}`"
            />
          </div>
          <div class="col-12">
            <BFormLabel>Температура</BFormLabel>
            <BInputNumber v-model="inputs.prefix[3]" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
          </div>
        </div>
      </div>
    </div>

    <h2>Кнопки</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center g-3">
          <div class="col-6">
            <BFormLabel>Вертикальные</BFormLabel>
            <BInputNumber
              v-model="inputs.buttons[0]"
              inputId="stacked-buttons"
              showButtons
              mode="currency"
              currency="RUB"
            />
          </div>
          <div class="col-6">
            <BFormLabel>Min-Max граница числа</BFormLabel>
            <BInputNumber v-model="inputs.buttons[1]" mode="decimal" :min="0" :max="100" show-buttons />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
