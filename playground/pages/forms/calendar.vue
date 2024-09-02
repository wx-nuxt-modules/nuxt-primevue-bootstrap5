<script setup lang="ts">
const inputs = reactive({
  basic: undefined,
  format: undefined,
  range: undefined,
  inline: undefined,
  inline2: undefined,
  valid: undefined,
  invalid: undefined
});

/**
 * Return list of days
 * 🌍 localeName : name of local, f.e. en-GB, default es-MX
 * ✅ weekday    : format of weekday short/long (Default)
 */
function dateForLocale(localeName: string = 'ru-RU', { weekday, month }: Intl.DateTimeFormatOptions | undefined) {
  const { format } = new Intl.DateTimeFormat(localeName, { weekday, month });

  if (weekday) {
    return [...Array(7).keys()].map((day) => format(new Date(Date.UTC(2021, 5, day))));
  }

  if (month) {
    return [...Array(12).keys()].map(
      (month) =>
        format(new Date(Date.UTC(2021, month, 1)))
          .slice(0, 1)
          .toUpperCase() + format(new Date(Date.UTC(2021, month, 1))).slice(1)
    );
  }
}

usePrimeVue().config.locale.dayNames = dateForLocale('ru-RU', { weekday: 'long' });
usePrimeVue().config.locale.dayNamesMin = dateForLocale('ru-RU', { weekday: 'narrow' });
usePrimeVue().config.locale.dayNamesShort = dateForLocale('ru-RU', { weekday: 'short' });
usePrimeVue().config.locale.monthNames = dateForLocale('ru-RU', { month: 'long' });
usePrimeVue().config.locale.monthNamesShort = dateForLocale('ru-RU', { month: 'short' });
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Календарь</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовое</h2>
    <p>Календарь используется как контролируемый компонент ввода с пропсом <code>v-model</code>.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BCalendar class="mb-3" v-model="inputs.basic" />
            <pre class="mb-0">value: {{ inputs.basic }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Формат даты</h2>
    <p>
      Формат даты по умолчанию — <code>mm/dd/yy</code>, который можно настроить с помощью пропса
      <code>dateFormat</code>. Следующие параметры могут быть частью формата.
    </p>
    <ul>
      <li>d - день месяца (без ведущего нуля)</li>
      <li>dd - день месяца (две цифры)</li>
      <li>o - день года (без ведущих нулей)</li>
      <li>oo - день года (трехзначный)</li>
      <li>D - короткое название дня</li>
      <li>DD – длинное название дня</li>
      <li>m - месяц года (без ведущего нуля)</li>
      <li>mm - месяц года (две цифры)</li>
      <li>M - сокращенное название месяца</li>
      <li>ММ – длинное название месяца</li>
      <li>y - год (две цифры)</li>
      <li>yy - год (четыре цифры)</li>
      <li>@ - временная метка Unix (ms с 01.01.1970)</li>
      <li>! - Тики Windows (100ns с 01.01.0001)</li>
      <li>'...' - буквальный текст</li>
      <li>'' - одинарная кавычка</li>
      <li>все остальное - буквальный текст</li>
    </ul>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BCalendar class="mb-3" v-model="inputs.format" date-format="dd.mm.yy" />
            <pre class="mb-0">value: {{ inputs.format }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Диапозон дат</h2>
    <p>
      Диапазон дат можно выбрать, определив пропс <code>selectMode="range"</code>. В этом случае связанное значение
      будет массивом с двумя значениями, где первая дата — это начало диапазона, а вторая дата — конец.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BCalendar class="mb-3" v-model="inputs.range" selection-mode="range" :manual-input="false" />
            <pre class="mb-0">value: {{ inputs.range }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Inline</h2>
    <p>Calendar is used a controlled input component with <code>v-model</code> property.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BCalendar class="mb-3" v-model="inputs.inline" selection-mode="range" inline />
            <pre class="mb-0">value: {{ inputs.inline }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Inline (parallel two view)</h2>
    <div class="bd-callout bd-callout-danger">VERY VERY VERY RAW</div>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-12">
            <BCalendar
              class="mb-3"
              v-model="inputs.inline2"
              selection-mode="range"
              :number-of-months="2"
              inline
              disable-sync
            />
            <pre class="mb-0">value: {{ inputs.inline2 }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Состояние поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BCalendar v-model="inputs.valid" class="mb-3" state="valid" />
            <BCalendar v-model="inputs.invalid" state="invalid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bpv-calendar + .bpv-calendar {
  margin-top: 0.5rem;
}
</style>
