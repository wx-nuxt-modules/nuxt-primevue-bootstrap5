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
  maxSelectedLabels: undefined
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
              max-selected-labels="2"
              selected-items-label="{0} выбрано"
            />
            <pre class="mb-0">value: {{ inputs.maxSelectedLabels }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
