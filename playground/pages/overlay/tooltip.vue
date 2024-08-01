<script setup lang="ts"></script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Подсказки</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Позиционирование</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center g-2">
          <div class="col-3">
            <BInputText v-b-tooltip="{ value: 'Введите имя пользователя', autoHide: false }" placeholder="Right" />
          </div>
          <div class="col-3">
            <BInputText v-b-tooltip.top="{ value: 'Введите имя пользователя', autoHide: false }" placeholder="Top" />
          </div>
          <div class="col-3">
            <BInputText v-b-tooltip.left="{ value: 'Введите имя пользователя', autoHide: false }" placeholder="Left" />
          </div>
          <div class="col-3">
            <BInputText
              v-b-tooltip.bottom="{ value: 'Введите имя пользователя', autoHide: false }"
              placeholder="Bottom"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
