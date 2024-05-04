<script setup lang="ts">
const options = {
  dynamic: [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ]
};

const inputs = reactive({
  basic: false,
  group: [],
  dynamic: []
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
        <div class="d-flex justify-content-center mb-3">
          <div class="row flex-column gy-2 mb-3">
            <div v-for="item of options.dynamic" class="col-auto" :key="item.key">
              <div class="d-inline-flex align-items-center">
                <BCheckbox v-model="inputs.dynamic" :inputId="item.key" name="dynamic" :value="item.name" />
                <label :for="item.key" class="ms-2">{{ item.name }}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <pre class="mb-0">value: {{ inputs.dynamic }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
