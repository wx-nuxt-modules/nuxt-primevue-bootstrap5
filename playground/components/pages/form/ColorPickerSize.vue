<script lang="ts" setup>
const colors = reactive([undefined, undefined, undefined]);
</script>

<template>
  <div>
    <h2>Размеры поля</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-4">
            <BFormLabel>Размер - lg</BFormLabel>
            <div class="lh-1 mb-3">
              <BColorPicker v-model="colors[0]" size="lg" />
            </div>
            <pre class="mb-0">value: {{ colors[0] }}</pre>
          </div>
          <div class="col-4">
            <BFormLabel class="form-label">Размер - md (по умолчанию)</BFormLabel>
            <div class="lh-1 mb-3">
              <BColorPicker v-model="colors[1]" />
            </div>
            <pre class="mb-0">value: {{ colors[1] }}</pre>
          </div>
          <div class="col-4">
            <BFormLabel class="form-label">Размер - sm</BFormLabel>
            <div class="lh-1 mb-3">
              <BColorPicker v-model="colors[2]" size="sm" />
            </div>
            <pre class="mb-0">value: {{ colors[2] }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
