<script lang="ts" setup>
const color = ref();
</script>

<template>
  <div>
    <h2>Базовый</h2>
    <p>Значение контролируется с помощью конструкции <code>v-model</code></p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-auto">
            <div class="mb-3">
              <BColorPicker v-model="color" />
            </div>
            <pre class="mb-0">value: {{ color }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
