<script lang="ts" setup></script>

<template>
  <h2>Состояние поля</h2>
  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="row justify-content-between">
        <div class="col-auto">
          <BCheckboxWithLabel label="Некорректное значение" state="invalid" />
          <BCheckboxWithLabel label="Корректное значение" state="valid" />
        </div>
      </div>
    </div>
  </div>
</template>
