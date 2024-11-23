<script setup lang="ts">
const options = {
  dynamic: [
    { text: 'Accounting', value: 'A' },
    { text: 'Marketing', value: 'M' },
    { text: 'Production', value: 'P' },
    { text: 'Research', value: 'R' }
  ]
};

const inputs = reactive({
  basic: false,
  group: [],
  dynamic1: [],
  dynamic2: []
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Чекбоксы</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовое</h2>
    <p>
      Двоичный флажок используется в качестве контролируемого ввода с <code>v-model</code> и
      <code>binary</code> пропсом.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-auto">
            <BCheckbox v-model="inputs.basic" binary class="mb-3" />
            <pre class="mb-0">value: {{ inputs.basic }}</pre>
          </div>
        </div>
      </div>
    </div>

    <h2>Группировка</h2>
    <p>Несколько флажков можно сгруппировать вместе.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center mb-3">
          <div class="col-auto">
            <div class="d-inline-flex align-items-center">
              <BCheckbox v-model="inputs.group" inputId="ingredient1" name="pizza" value="Cheese" />
              <label for="ingredient1" class="ms-2"> Cheese </label>
            </div>
          </div>
          <div class="col-auto">
            <div class="d-inline-flex align-items-center">
              <BCheckbox v-model="inputs.group" inputId="ingredient2" name="pizza" value="Mushroom" />
              <label for="ingredient2" class="ms-2"> Mushroom </label>
            </div>
          </div>
          <div class="col-auto">
            <div class="d-inline-flex align-items-center">
              <BCheckbox v-model="inputs.group" inputId="ingredient3" name="pizza" value="Pepper" />
              <label for="ingredient3" class="ms-2"> Pepper </label>
            </div>
          </div>
          <div class="col-auto">
            <div class="d-inline-flex align-items-center">
              <BCheckbox v-model="inputs.group" inputId="ingredient4" name="pizza" value="Onion" />
              <label for="ingredient4" class="ms-2"> Onion </label>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <pre class="mb-0">value: {{ inputs.group }}</pre>
        </div>
      </div>
    </div>

    <h2>Динамичное использование значений</h2>
    <p>Флажки могут быть созданы с использованием списка значений.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-between">
          <div class="col-auto">
            <BCheckboxGroup
              v-model="inputs.dynamic1"
              class="mb-3"
              option-text="text"
              name="pizza1"
              :options="options.dynamic"
            />
            <pre class="mb-0">value: {{ inputs.dynamic1 }}</pre>
          </div>
          <div class="col-auto">
            <BCheckboxGroup
              v-model="inputs.dynamic2"
              class="mb-3"
              option-text="text"
              name="pizza2"
              :options="options.dynamic"
              inline
            />
            <pre class="mb-0">value: {{ inputs.dynamic2 }}</pre>
          </div>
        </div>
      </div>
    </div>

    <PagesFormCheckboxState />
  </div>
</template>
