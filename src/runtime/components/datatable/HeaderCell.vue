<script lang="ts">
import { defineComponent } from 'vue';

// @ts-ignore
import HeaderCell from 'primevue/datatable/HeaderCell.vue';
import ColumnFilter from './ColumnFilter.vue';

export default defineComponent({
  name: 'HeaderCell',
  hostName: 'DataTable',
  extends: HeaderCell,
  components: { DTColumnFilter: ColumnFilter },
  emits: ['filter-overlay-show', 'filter-overlay-hide']
});
</script>

<template>
  <th
    :style="containerStyle"
    :class="containerClass"
    :tabindex="columnProp('sortable') ? '0' : null"
    role="columnheader"
    :colspan="columnProp('colspan')"
    :rowspan="columnProp('rowspan')"
    :aria-sort="ariaSort"
    @click="onClick"
    @keydown="onKeyDown"
    @mousedown="onMouseDown"
    @dragstart="onDragStart"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
    v-bind="{ ...getColumnPT('root'), ...getColumnPT('headerCell') }"
    :data-p-sortable-column="columnProp('sortable')"
    :data-p-resizable-column="resizableColumns"
    :data-p-highlight="isColumnSorted()"
    :data-p-filter-column="filterColumn"
    :data-p-frozen-column="columnProp('frozen')"
    :data-p-reorderable-column="reorderableColumns"
  >
    <span
      v-if="resizableColumns && !columnProp('frozen')"
      :class="cx('columnResizer')"
      @mousedown="onResizeStart"
      v-bind="getColumnPT('columnResizer')"
    ></span>
    <div :class="cx('headerContent')" v-bind="getColumnPT('headerContent')">
      <component v-if="column.children && column.children.header" :is="column.children.header" :column="column" />
      <span v-if="columnProp('header')" :class="cx('headerTitle')" v-bind="getColumnPT('headerTitle')">{{
        columnProp('header')
      }}</span>
      <span v-if="columnProp('sortable')" v-bind="getColumnPT('sort')">
        <component
          :is="(column.children && column.children.sorticon) || sortableColumnIcon"
          :sorted="sortState.sorted"
          :sortOrder="sortState.sortOrder"
          :class="cx('sortIcon')"
          v-bind="getColumnPT('sorticon')"
        />
      </span>
      <span v-if="isMultiSorted()" :class="cx('sortBadge')" v-bind="getColumnPT('sortBadge')">{{
        getBadgeValue()
      }}</span>
      <DTHeaderCheckbox
        v-if="columnProp('selectionMode') === 'multiple' && filterDisplay !== 'row'"
        :checked="allRowsSelected"
        @change="onHeaderCheckboxChange"
        :disabled="empty"
        :headerCheckboxIconTemplate="column.children && column.children.headercheckboxicon"
        :column="column"
        :unstyled="unstyled"
        :pt="pt"
      />
      <DTColumnFilter
        v-if="filterDisplay === 'menu' && column.children && column.children.filter"
        :field="columnProp('filterField') || columnProp('field')"
        :type="columnProp('dataType')"
        display="menu"
        :showMenu="columnProp('showFilterMenu')"
        :filterElement="column.children && column.children.filter"
        :filterHeaderTemplate="column.children && column.children.filterheader"
        :filterFooterTemplate="column.children && column.children.filterfooter"
        :filterClearTemplate="column.children && column.children.filterclear"
        :filterApplyTemplate="column.children && column.children.filterapply"
        :filterIconTemplate="column.children && column.children.filtericon"
        :filterAddIconTemplate="column.children && column.children.filteraddicon"
        :filterRemoveIconTemplate="column.children && column.children.filterremoveicon"
        :filterClearIconTemplate="column.children && column.children.filterclearicon"
        :filters="filters"
        :filtersStore="filtersStore"
        :filterInputProps="filterInputProps"
        @filter-change="$emit('filter-change', $event)"
        @filter-apply="$emit('filter-apply')"
        :filterMenuStyle="columnProp('filterMenuStyle')"
        :filterMenuClass="columnProp('filterMenuClass')"
        :showOperator="columnProp('showFilterOperator')"
        :showClearButton="columnProp('showClearButton')"
        :showApplyButton="columnProp('showApplyButton')"
        :showMatchModes="columnProp('showFilterMatchModes')"
        :showAddButton="columnProp('showAddButton')"
        :matchModeOptions="columnProp('filterMatchModeOptions')"
        :maxConstraints="columnProp('maxConstraints')"
        @operator-change="$emit('operator-change', $event)"
        @matchmode-change="$emit('matchmode-change', $event)"
        @constraint-add="$emit('constraint-add', $event)"
        @constraint-remove="$emit('constraint-remove', $event)"
        @apply-click="$emit('apply-click', $event)"
        @overlay-hide="$emit('filter-overlay-hide')"
        @overlay-show="$emit('filter-overlay-show')"
        :column="column"
        :unstyled="unstyled"
        :pt="pt"
      />
    </div>
  </th>
</template>
