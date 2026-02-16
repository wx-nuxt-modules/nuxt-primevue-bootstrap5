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

function checkOptionDisabled(lstItem: (typeof cityLst)[number]) {
  return ['NY', 'RM'].includes(lstItem.value);
}

const value = ref();
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <BDropdown
        v-model="value"
        class="mb-3"
        option-label="text"
        placeholder="Выберите из списка"
        option-value="value"
        :options="cityLst"
        :option-disabled="checkOptionDisabled"
        show-clear
      />
      <pre class="mb-0">value: {{ value }}</pre>
    </div>
  </div>
</template>
