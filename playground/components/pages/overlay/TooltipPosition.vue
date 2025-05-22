<script lang="ts" setup documentation></script>

<template>
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
      <BInputText v-b-tooltip.bottom="{ value: 'Введите имя пользователя', autoHide: false }" placeholder="Bottom" />
    </div>
  </div>
</template>
