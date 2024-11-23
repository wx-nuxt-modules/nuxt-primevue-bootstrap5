<script setup lang="ts">
const options = {
  dynamic: [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ]
};

const inputs = reactive({
  basic: false,
  group: [],
  dynamic: []
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Радиокнопки</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <PagesFormRadioButtonGroup />
    <PagesFormRadioButtonDynamic />
    <PagesFormRadioButtonState />
  </div>
</template>
