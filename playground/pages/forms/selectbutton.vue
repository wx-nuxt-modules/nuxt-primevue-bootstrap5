<script setup lang="ts">
const basicLst = shallowReactive(['One-Way', 'Return']);

const inputs = reactive({
  basic: basicLst[0]
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Кнопки с выбором</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовое</h2>
    <p>
      SelectButton используется как управляемый компонент со свойством <code>modelValue</code> вместе с коллекцией
      параметров. Метка и значение опции определяются свойствами <code>optionLabel</code> и
      <code>optionValue</code> соответственно. Обратите внимание: когда параметры представляют собой простые примитивные
      значения, такие как массив строк, никакие <code>optionLabel</code> и <code>optionValue</code> не требуются.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-4">
            <BSelectButton class="mb-3" v-model="inputs.basic" :options="basicLst" aria-labelledby="basic" />
            <pre class="mb-0">value: {{ inputs.basic || 'undefined' }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
