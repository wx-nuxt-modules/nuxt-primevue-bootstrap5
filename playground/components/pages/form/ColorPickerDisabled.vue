<script lang="ts" setup>
const color = ref('00eaff');
</script>

<template>
  <div>
    <h2>Выключенное состояние</h2>
    <p>С помощью пропса <code>disabled</code> можно выключить поле для редактирования</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-auto">
            <div class="mb-3">
              <BColorPicker v-model="color" disabled />
            </div>
            <pre class="mb-0">value: {{ color }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
