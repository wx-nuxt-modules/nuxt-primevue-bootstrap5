<script lang="ts" setup>
const options = [
  { text: 'Accounting', value: 'A' },
  { text: 'Marketing', value: 'M' },
  { text: 'Production', value: 'P' },
  { text: 'Research', value: 'R' }
];

const ingredient1 = ref();
const ingredient2 = ref();
</script>

<template>
  <h2>Динамичное использование значений</h2>
  <p>Радиокнопки могут быть созданы с использованием списка значений.</p>
  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="row justify-content-between">
        <div class="col-auto">
          <BRadioButtonGroup v-model="ingredient1" class="mb-3" option-text="text" name="pizza1" :options="options" />
          <pre class="mb-0">value: {{ ingredient1 }}</pre>
        </div>
        <div class="col-auto">
          <BRadioButtonGroup
            v-model="ingredient2"
            class="mb-3"
            option-text="text"
            name="pizza2"
            :options="options"
            inline
          />
          <pre class="mb-0">value: {{ ingredient2 }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
