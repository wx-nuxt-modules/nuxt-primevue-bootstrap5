<script lang="ts">
import type { PropType } from 'vue';
import type { BPVPaginatorProps } from '../../presets/bootstrap5/paginator/types';

import { defineComponent } from 'vue';
import { BPV_DROPDOWN_POSITION } from '../../constants';

// @ts-expect-error
import RowsPerPageDropdown from 'primevue/paginator/RowsPerPageDropdown.vue';
import Dropdown from '../dropdown/Dropdown.vue';

export default defineComponent({
  name: 'RowsPerPageDropdown',
  hostName: 'Paginator',
  extends: RowsPerPageDropdown,
  components: {
    RPPDropdown: Dropdown
  },
  props: {
    dropdownPosition: {
      type: String as PropType<BPVPaginatorProps['rowsPerPageDropdownPosition']>,
      required: false,
      validator: (val: NonNullable<BPVPaginatorProps['rowsPerPageDropdownPosition']>) =>
        BPV_DROPDOWN_POSITION.includes(val)
    }
  }
});
</script>

<template>
  <RPPDropdown
    :modelValue="rows"
    :options="rowsOptions"
    optionLabel="label"
    optionValue="value"
    :position="dropdownPosition"
    @update:modelValue="onChange($event)"
    :class="cx('rowPerPageDropdown')"
    :disabled="disabled"
    :unstyled="unstyled"
    :pt="ptm('rowPerPageDropdown')"
    data-pc-group-section="pagedropdown"
  >
    <template v-if="templates['rowsperpagedropdownicon']" #dropdownicon="slotProps">
      <component :is="templates['rowsperpagedropdownicon']" :class="slotProps.class" />
    </template>
  </RPPDropdown>
</template>
