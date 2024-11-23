<script lang="ts" setup>
const ingredient = ref();
</script>

<template>
  <h2>Группировка</h2>
  <p>Несколько радиокнопок можно сгруппировать вместе. Значение через <code>v-model</code> связь.</p>
  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <div class="d-inline-flex align-items-center">
            <BRadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="ms-2"> Cheese </label>
          </div>
        </div>
        <div class="col-auto">
          <div class="d-inline-flex align-items-center">
            <BRadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2" class="ms-2"> Mushroom </label>
          </div>
        </div>
        <div class="col-auto">
          <div class="d-inline-flex align-items-center">
            <BRadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3" class="ms-2"> Pepper </label>
          </div>
        </div>
        <div class="col-auto">
          <div class="d-inline-flex align-items-center">
            <BRadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4" class="ms-2"> Onion </label>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <pre class="mb-0">value: {{ ingredient }}</pre>
      </div>
    </div>
  </div>
</template>
