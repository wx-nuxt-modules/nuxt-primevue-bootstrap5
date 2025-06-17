<script lang="ts">
import type { PropType } from 'vue';
import type { BPVPaginatorProps } from '../../presets/bootstrap5/paginator/types';

import { defineComponent } from 'vue';
import { BPV_DROPDOWN_POSITION } from '../../constants';

// @ts-expect-error
import Paginator from 'primevue/paginator/Paginator.vue';
import RowsPerPageDropdown from './RowsPerPageDropdown.vue';

export default defineComponent({
  name: 'Paginator',
  extends: Paginator,
  components: {
    RowsPerPageDropdown
  },
  props: {
    rowsPerPageDropdownPosition: {
      type: String as PropType<BPVPaginatorProps['rowsPerPageDropdownPosition']>,
      required: false,
      validator: (val: NonNullable<BPVPaginatorProps['rowsPerPageDropdownPosition']>) =>
        BPV_DROPDOWN_POSITION.includes(val)
    }
  }
});
</script>

<template>
  <nav v-if="alwaysShow ? true : pageLinks && pageLinks.length > 1" v-bind="ptmi('paginatorWrapper')">
    <div
      v-for="(value, key) in templateItems"
      :key="key"
      ref="paginator"
      :class="cx('paginator', { key })"
      v-bind="ptm('root')"
    >
      <div v-if="$slots.start" :class="cx('start')" v-bind="ptm('start')">
        <slot name="start" :state="currentState"></slot>
      </div>
      <template v-for="item in value" :key="item">
        <FirstPageLink
          v-if="item === 'FirstPageLink'"
          :aria-label="getAriaLabel('firstPageLabel')"
          :template="$slots.firstpagelinkicon"
          @click="changePageToFirst($event)"
          :disabled="isFirstPage || empty"
          :unstyled="unstyled"
          :pt="pt"
        />
        <PrevPageLink
          v-else-if="item === 'PrevPageLink'"
          :aria-label="getAriaLabel('prevPageLabel')"
          :template="$slots.prevpagelinkicon"
          @click="changePageToPrev($event)"
          :disabled="isFirstPage || empty"
          :unstyled="unstyled"
          :pt="pt"
        />
        <NextPageLink
          v-else-if="item === 'NextPageLink'"
          :aria-label="getAriaLabel('nextPageLabel')"
          :template="$slots.nextpagelinkicon"
          @click="changePageToNext($event)"
          :disabled="isLastPage || empty"
          :unstyled="unstyled"
          :pt="pt"
        />
        <LastPageLink
          v-else-if="item === 'LastPageLink'"
          :aria-label="getAriaLabel('lastPageLabel')"
          :template="$slots.lastpagelinkicon"
          @click="changePageToLast($event)"
          :disabled="isLastPage || empty"
          :unstyled="unstyled"
          :pt="pt"
        />
        <PageLinks
          v-else-if="item === 'PageLinks'"
          :aria-label="getAriaLabel('pageLabel')"
          :value="pageLinks"
          :page="page"
          @click="changePageLink($event)"
          :pt="pt"
        />
        <CurrentPageReport
          v-else-if="item === 'CurrentPageReport'"
          aria-live="polite"
          :template="currentPageReportTemplate"
          :currentPage="currentPage"
          :page="page"
          :pageCount="pageCount"
          :first="d_first"
          :rows="d_rows"
          :totalRecords="totalRecords"
          :unstyled="unstyled"
          :pt="pt"
        />
        <RowsPerPageDropdown
          v-else-if="item === 'RowsPerPageDropdown' && rowsPerPageOptions"
          :aria-label="getAriaLabel('rowsPerPageLabel')"
          :rows="d_rows"
          :options="rowsPerPageOptions"
          :dropdown-position="rowsPerPageDropdownPosition"
          @rows-change="onRowChange($event)"
          :disabled="empty"
          :templates="$slots"
          :unstyled="unstyled"
          :pt="pt"
        />
        <JumpToPageDropdown
          v-else-if="item === 'JumpToPageDropdown'"
          :aria-label="getAriaLabel('jumpToPageDropdownLabel')"
          :page="page"
          :pageCount="pageCount"
          @page-change="changePage($event)"
          :disabled="empty"
          :templates="$slots"
          :unstyled="unstyled"
          :pt="pt"
        />
        <JumpToPageInput
          v-else-if="item === 'JumpToPageInput'"
          :page="currentPage"
          @page-change="changePage($event)"
          :disabled="empty"
          :unstyled="unstyled"
          :pt="pt"
        />
      </template>
      <div v-if="$slots.end" :class="cx('end')" v-bind="ptm('end')">
        <slot name="end" :state="currentState"></slot>
      </div>
    </div>
  </nav>
</template>
