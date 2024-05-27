<script setup lang="ts">
const cityLst = shallowReactive([
  { text: 'New York', value: 'NY' },
  { text: 'Rome', value: 'RM' },
  { text: 'London', value: 'LDN' },
  { text: 'Istanbul', value: 'IST' },
  { text: 'Paris', value: 'PRS' }
]);
const groupCityLst = shallowReactive([
  {
    text: 'Germany',
    value: 'DE',
    items: [
      { text: 'Berlin', value: 'Berlin' },
      { text: 'Frankfurt', value: 'Frankfurt' },
      { text: 'Hamburg', value: 'Hamburg' },
      { text: 'Munich', value: 'Munich' }
    ]
  },
  {
    text: 'USA',
    value: 'US',
    items: [
      { text: 'Chicago', value: 'Chicago' },
      { text: 'Los Angeles', value: 'Los Angeles' },
      { text: 'New York', value: 'New York' },
      { text: 'San Francisco', value: 'San Francisco' }
    ]
  },
  {
    text: 'Japan',
    value: 'JP',
    items: [
      { text: 'Kyoto', value: 'Kyoto' },
      { text: 'Osaka', value: 'Osaka' },
      { text: 'Tokyo', value: 'Tokyo' },
      { text: 'Yokohama', value: 'Yokohama' }
    ]
  }
]);
const countryLst = shallowReactive([
  { text: 'Russia', value: 'RU' },
  { text: 'Australia', value: 'AU' },
  { text: 'Brazil', value: 'BR' },
  { text: 'China', value: 'CN' },
  { text: 'Egypt', value: 'EG' },
  { text: 'France', value: 'FR' },
  { text: 'Germany', value: 'DE' },
  { text: 'India', value: 'IN' },
  { text: 'Japan', value: 'JP' },
  { text: 'Spain', value: 'ES' },
  { text: 'United States', value: 'US' }
]);

const inputs = reactive({
  basic: [undefined, undefined],
  sizing: [undefined, undefined, undefined],
  checkmark: undefined,
  editable: undefined,
  grouping: undefined,
  template: undefined,
  filter: undefined,
  clearIcon: null
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Выпадающие списки</h1>
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
      Раскрывающийся список используется как управляемый компонент со свойством <code>v-model</code> вместе с коллекцией
      параметров. Метка и значение опции определяются свойствами <code>optionLabel</code> и
      <code>optionValue</code> соответственно. Обратите внимание: когда параметры представляют собой простые примитивные
      значения, такие как массив строк, никакие <code>optionLabel</code> и <code>optionValue</code> не требуются.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              class="mb-3"
              v-model="inputs.basic[0]"
              :options="cityLst"
              optionLabel="text"
              placeholder="Без optionValue"
            />
            <pre class="mb-0">value: {{ inputs.basic[0] }}</pre>
          </div>
          <div class="col-6">
            <BDropdown
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
            <BDropdown
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
            <BDropdown
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
            <BDropdown
              class="mb-3"
              v-model="inputs.sizing[2]"
              :options="cityLst"
              option-label="text"
              option-value="value"
              size="sm"
              placeholder="sm"
            />
            <pre class="mb-0">value: {{ inputs.sizing[2] }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>С отметкой</h2>
    <p>
      Альтернативный способ выделить выбранную опцию — отобразить галочку с помощью свойства <code>checkmark</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              class="mb-3"
              v-model="inputs.checkmark"
              :options="cityLst"
              option-label="text"
              placeholder="Выберите город"
              checkmark
            />
            <pre class="mb-0">value: {{ inputs.checkmark }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Редактируемый</h2>
    <p>Если присутствует <code>editable</code>, то можно ввести значение</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              v-model="inputs.editable"
              class="mb-3"
              :options="cityLst"
              option-label="text"
              placeholder="Выберите город"
              editable
            />
            <pre class="mb-0">value: {{ inputs.editable }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>С группировкой</h2>
    <p>
      Опции можно группировать, если предусмотрены вложенные структуры данных. Чтобы определить метку группы, необходимо
      свойство <code>optionGroupLabel</code>, а также <code>optionGroupChildren</code>, чтобы определить свойство,
      которое относится к дочерним элементам группы.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              v-model="inputs.grouping"
              class="mb-3"
              :options="groupCityLst"
              option-label="text"
              option-group-label="text"
              option-group-children="items"
              placeholder="Выберите город"
            >
              <template #optiongroup="{ option }">
                <div class="dropdown-item bpv-form-select-menu-item-label d-flex align-items-center">
                  <img
                    :alt="option.text"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    :class="`me-2 flag flag-${option.value.toLowerCase()}`"
                    style="width: 18px"
                  />
                  <div>{{ option.text }}</div>
                </div>
              </template>
            </BDropdown>
            <pre class="mb-0">value: {{ inputs.grouping }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Свой шаблон</h2>
    <p>
      Параметры и отображение выбранных параметров поддерживают расширение базового шаблона через <code>{{ '<template #option>' }}</code> и <code>{{ '<template #value>' }}</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              v-model="inputs.template"
              class="mb-3"
              :options="countryLst"
              option-label="text"
              placeholder="Выберите страну"
            >
              <template #option="{ option }">
                <div class="dropdown-item bpv-form-select-menu-item-label d-flex align-items-center">
                  <img
                    :alt="option.text"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    :class="`me-2 flag flag-${option.value.toLowerCase()}`"
                    style="width: 18px"
                  />
                  <div>{{ option.text }}</div>
                </div>
              </template>
            </BDropdown>
            <pre class="mb-0">value: {{ inputs.template }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Фильтр значений</h2>
    <p>
      Раскрывающийся список предоставляет встроенную фильтрацию, которая включается путем добавления свойства <code>filter</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              v-model="inputs.filter"
              class="mb-3"
              :options="countryLst"
              option-label="text"
              placeholder="Выберите страну"
              filter
            >
              <template #option="{ option }">
                <div class="dropdown-item bpv-form-select-menu-item-label d-flex align-items-center">
                  <img
                    :alt="option.text"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    :class="`me-2 flag flag-${option.value.toLowerCase()}`"
                    style="width: 18px"
                  />
                  <div>{{ option.text }}</div>
                </div>
              </template>
            </BDropdown>
            <pre class="mb-0">value: {{ inputs.template }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Очищаемый</h2>
    <p>
      Когда пропс <code>showClear="true"</code>, появится кнопка для сброса значения
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              v-model="inputs.clearIcon"
              class="mb-3"
              :options="cityLst"
              option-label="text"
              placeholder="Выберите город"
              show-clear
            />
            <pre class="mb-0">value: {{ inputs.clearIcon === null ? 'null' : inputs.clearIcon }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Выключенный</h2>
    <p>
      Когда пропс <code>disabled="true"</code>, элемент нельзя редактировать и установить фокус.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <BDropdown
              :options="cityLst"
              option-label="text"
              placeholder="Выберите город"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
