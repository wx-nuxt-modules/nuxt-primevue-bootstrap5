<script lang="ts" setup documentation>
// non-reactive
const cityLst = [
  { text: 'New York', value: 'NY' },
  { text: 'Rome', value: 'RM' },
  { text: 'London', value: 'LDN' },
  { text: 'Istanbul', value: 'IST' },
  { text: 'Paris', value: 'PRS' }
];
// end non-reactive

const value = ref();
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <BDropdown
        v-model="value"
        class="mb-3"
        option-label="text"
        placeholder="Наверх"
        position="top"
        option-value="value"
        :options="cityLst"
        show-clear
      />
      <pre class="mb-0">value: {{ value }}</pre>
    </div>
    <div class="col-4">
      <BDropdown
        v-model="value"
        class="mb-3"
        option-label="text"
        placeholder="Авто"
        position="auto"
        option-value="value"
        :options="cityLst"
        show-clear
      />
      <pre class="mb-0">value: {{ value }}</pre>
    </div>
    <div class="col-4">
      <BDropdown
        v-model="value"
        class="mb-3"
        option-label="text"
        placeholder="Вниз"
        position="bottom"
        option-value="value"
        :options="cityLst"
        show-clear
      />
      <pre class="mb-0">value: {{ value }}</pre>
    </div>
  </div>
</template>
