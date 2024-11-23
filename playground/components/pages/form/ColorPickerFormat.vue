<script lang="ts" setup>
const colors = reactive([undefined, undefined, undefined]);
</script>

<template>
  <div>
    <h2>Формат результата</h2>
    <p>
      Формат цвета по умолчанию, используемый при привязке значений - <code>hex</code>, а другими возможными значениями
      могут быть <code>rgb</code> и <code>hsb</code>, используя пропс <code>format</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-4">
            <BFormLabel>HEX</BFormLabel>
            <div class="lh-1 mb-3">
              <BColorPicker v-model="colors[0]" format="hex" />
            </div>
            <pre class="mb-0">value: {{ colors[0] }}</pre>
          </div>
          <div class="col-4">
            <BFormLabel class="form-label">RGB</BFormLabel>
            <div class="lh-1 mb-3">
              <BColorPicker v-model="colors[1]" format="rgb" />
            </div>
            <pre class="mb-0">value: {{ colors[1] }}</pre>
          </div>
          <div class="col-4">
            <BFormLabel class="form-label">HSB</BFormLabel>
            <div class="lh-1 mb-3">
              <BColorPicker v-model="colors[2]" format="hsb" />
            </div>
            <pre class="mb-0">value: {{ colors[2] }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
