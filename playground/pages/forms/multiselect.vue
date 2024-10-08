<script setup lang="ts">
const cityLst = shallowReactive([
  { text: 'New York', value: 'NY' },
  { text: 'Rome', value: 'RM' },
  { text: 'London', value: 'LDN' },
  { text: 'Istanbul', value: 'IST' },
  { text: 'Paris', value: 'PRS' }
]);

const inputs = reactive({
  basic: [undefined, undefined],
  sizing: [undefined, undefined, undefined],
  maxSelectedLabels: undefined,
  filter: undefined,
  valid: undefined,
  invalid: undefined
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Выпадающие списки (множественный выбор)</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <!--<div class="bd-callout bd-callout-info">
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
    </div>-->

    <h2>Базовое</h2>
    <p>
      MultiSelect используется как управляемый компонент со свойством v-model вместе с коллекцией параметров. Метка и
      значение опции определяются свойствами <code>optionLabel</code> и <code>optionValue</code> соответственно.
      Обратите внимание: когда параметры представляют собой простые примитивные значения, такие как массив строк,
      никакие <code>optionLabel</code> и <code>optionValue</code> не требуются.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BMultiSelect
              class="mb-3"
              v-model="inputs.basic[0]"
              :options="cityLst"
              optionLabel="text"
              placeholder="Без optionValue"
            />
            <pre class="mb-0">value: {{ inputs.basic[0] }}</pre>
          </div>
          <div class="col-6">
            <BMultiSelect
              class="mb-3"
              v-model="inputs.basic[1]"
              :options="cityLst"
              option-label="text"
              option-value="value"
              placeholder="С optionValue"
            />
            <pre class="mb-0">value: {{ inputs.basic[1] }}</pre>
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
            <BMultiSelect
              class="mb-3"
              v-model="inputs.sizing[0]"
              :options="cityLst"
              option-label="text"
              option-value="value"
              size="lg"
              placeholder="lg"
            />
            <pre class="mb-0">value: {{ inputs.sizing[0] }}</pre>
          </div>
          <div class="col-4">
            <label class="form-label">Размер - md (по умолчанию)</label>
            <BMultiSelect
              class="mb-3"
              v-model="inputs.sizing[1]"
              :options="cityLst"
              option-label="text"
              option-value="value"
              placeholder="md (default)"
            />
            <pre class="mb-0">value: {{ inputs.sizing[1] }}</pre>
          </div>
          <div class="col-4">
            <label class="form-label">Размер - sm</label>
            <BMultiSelect
              class="mb-3"
              v-model="inputs.sizing[2]"
              :options="cityLst"
              option-label="text"
              option-value="value"
              placeholder="sm"
              size="sm"
            />
            <pre class="mb-0">value: {{ inputs.sizing[2] }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Прятать под label много значений</h2>
    <p>
      C помощью пропса <code>maxSelectedLabels</code> можно выбрать через сколько выбранных значений нужно прятать под
      подпись. Подпись устанавливается с помощью пропса <code>selectedItemsLabel</code> по шаблону
      <code>{0} items selected</code>
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BMultiSelect
              class="mb-3"
              v-model="inputs.maxSelectedLabels"
              :options="cityLst"
              option-label="text"
              option-value="value"
              placeholder="Выберите значения"
              :max-selected-labels="2"
              selected-items-label="{0} выбрано"
            />
            <pre class="mb-0">value: {{ inputs.maxSelectedLabels }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Фильтр значений</h2>
    <p>
      Фильтрация позволяет искать элементы в списке, используя поле ввода в заголовке. Чтобы использовать фильтрацию,
      включите ее через пропс <code>filter</code>. По умолчанию <code>optionLabel</code> используется при поиске, а
      <code>filterFields</code> можно использовать для настройки используемых полей. Кроме того, доступен
      <code>filterMatchMode</code> для определения алгоритма поиска. Допустимые значения:
      <code>«contains» (по умолчанию)</code>, <code>«startsWith»</code> и <code>«endsWith»</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BMultiSelect
              class="mb-3"
              v-model="inputs.filter"
              :options="cityLst"
              filter
              option-label="text"
              option-value="value"
              placeholder="Выберите значения"
            />
            <pre class="mb-0">value: {{ inputs.filter }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Состояние поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BMultiSelect
              v-model="inputs.valid"
              :options="cityLst"
              option-label="text"
              option-value="value"
              placeholder="Выберите значения"
              :max-selected-labels="2"
              selected-items-label="{0} выбрано"
              state="valid"
            />
            <BMultiSelect
              v-model="inputs.invalid"
              :options="cityLst"
              option-label="text"
              option-value="value"
              placeholder="Выберите значения"
              :max-selected-labels="2"
              selected-items-label="{0} выбрано"
              state="invalid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bpv-form-multiselect + .bpv-form-multiselect {
  margin-top: 0.5rem;
}
</style>
