<script lang="ts" setup>
const color = ref();
</script>

<template>
  <div>
    <h2>Inline</h2>
    <p>
      По умолчанию ColorPicker отображается как всплывающее окно. Чтобы изменить поведение, нужно объявить пропс
      <code>inline</code>
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-auto">
            <div class="mb-3">
              <BColorPicker v-model="color" inline />
            </div>
            <pre class="mb-0">value: {{ color }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
