<script lang="ts">
import { defineComponent } from 'vue';

// @ts-ignore
import TableHeader from 'primevue/datatable/TableHeader.vue';
import ColumnFilter from './ColumnFilter.vue';
import HeaderCell from './HeaderCell.vue';

export default defineComponent({
  name: 'TableHeader',
  hostName: 'DataTable',
  extends: TableHeader,
  components: { DTColumnFilter: ColumnFilter, DTHeaderCell: HeaderCell },
  emits: ['filter-overlay-show', 'filter-overlay-hide']
});
</script>

<template>
  <thead
    :class="cx('thead')"
    :style="sx('thead')"
    role="rowgroup"
    v-bind="
      columnGroup ? { ...ptm('thead', ptmTHeadOptions), ...getColumnGroupPT('root') } : ptm('thead', ptmTHeadOptions)
    "
    data-pc-section="thead"
  >
    <template v-if="!columnGroup">
      <tr role="row" v-bind="ptm('headerRow')">
        <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
          <DTHeaderCell
            v-if="
              !columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field'))
            "
            :column="col"
            :index="i"
            @column-click="$emit('column-click', $event)"
            @column-mousedown="$emit('column-mousedown', $event)"
            @column-dragstart="$emit('column-dragstart', $event)"
            @column-dragover="$emit('column-dragover', $event)"
            @column-dragleave="$emit('column-dragleave', $event)"
            @column-drop="$emit('column-drop', $event)"
            :groupRowsBy="groupRowsBy"
            :groupRowSortField="groupRowSortField"
            :reorderableColumns="reorderableColumns"
            :resizableColumns="resizableColumns"
            @column-resizestart="$emit('column-resizestart', $event)"
            :sortMode="sortMode"
            :sortField="sortField"
            :sortOrder="sortOrder"
            :multiSortMeta="multiSortMeta"
            :allRowsSelected="allRowsSelected"
            :empty="empty"
            @checkbox-change="$emit('checkbox-change', $event)"
            :filters="filters"
            :filterDisplay="filterDisplay"
            :filtersStore="filtersStore"
            :filterInputProps="filterInputProps"
            @filter-change="$emit('filter-change', $event)"
            @filter-apply="$emit('filter-apply')"
            @operator-change="$emit('operator-change', $event)"
            @matchmode-change="$emit('matchmode-change', $event)"
            @constraint-add="$emit('constraint-add', $event)"
            @constraint-remove="$emit('constraint-remove', $event)"
            @apply-click="$emit('apply-click', $event)"
            @filter-overlay-show="$emit('filter-overlay-show')"
            @filter-overlay-hide="$emit('filter-overlay-hide')"
            :unstyled="unstyled"
            :pt="pt"
          />
        </template>
      </tr>
      <tr v-if="filterDisplay === 'row'" role="row" v-bind="ptm('headerRow')">
        <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
          <th
            v-if="
              !columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field'))
            "
            :style="getFilterColumnHeaderStyle(col)"
            :class="getFilterColumnHeaderClass(col)"
            v-bind="{ ...getColumnPT(col, 'root', i), ...getColumnPT(col, 'headerCell', i) }"
          >
            <DTHeaderCheckbox
              v-if="columnProp(col, 'selectionMode') === 'multiple'"
              :checked="allRowsSelected"
              :disabled="empty"
              @change="$emit('checkbox-change', $event)"
              :column="col"
              :unstyled="unstyled"
              :pt="pt"
            />
            <DTColumnFilter
              v-if="col.children && col.children.filter"
              :field="columnProp(col, 'filterField') || columnProp(col, 'field')"
              :type="columnProp(col, 'dataType')"
              display="row"
              :showMenu="columnProp(col, 'showFilterMenu')"
              :filterElement="col.children && col.children.filter"
              :filterHeaderTemplate="col.children && col.children.filterheader"
              :filterFooterTemplate="col.children && col.children.filterfooter"
              :filterClearTemplate="col.children && col.children.filterclear"
              :filterApplyTemplate="col.children && col.children.filterapply"
              :filterIconTemplate="col.children && col.children.filtericon"
              :filterAddIconTemplate="col.children && col.children.filteraddicon"
              :filterRemoveIconTemplate="col.children && col.children.filterremoveicon"
              :filterClearIconTemplate="col.children && col.children.filterclearicon"
              :filters="filters"
              :filtersStore="filtersStore"
              :filterInputProps="filterInputProps"
              @filter-change="$emit('filter-change', $event)"
              @filter-apply="$emit('filter-apply')"
              :filterMenuStyle="columnProp(col, 'filterMenuStyle')"
              :filterMenuClass="columnProp(col, 'filterMenuClass')"
              :showOperator="columnProp(col, 'showFilterOperator')"
              :showClearButton="columnProp(col, 'showClearButton')"
              :showApplyButton="columnProp(col, 'showApplyButton')"
              :showMatchModes="columnProp(col, 'showFilterMatchModes')"
              :showAddButton="columnProp(col, 'showAddButton')"
              :matchModeOptions="columnProp(col, 'filterMatchModeOptions')"
              :maxConstraints="columnProp(col, 'maxConstraints')"
              @operator-change="$emit('operator-change', $event)"
              @matchmode-change="$emit('matchmode-change', $event)"
              @constraint-add="$emit('constraint-add', $event)"
              @constraint-remove="$emit('constraint-remove', $event)"
              @apply-click="$emit('apply-click', $event)"
              @overlay-show="$emit('filter-overlay-show')"
              @overlay-hide="$emit('filter-overlay-hide')"
              :column="col"
              :unstyled="unstyled"
              :pt="pt"
            />
          </th>
        </template>
      </tr>
    </template>
    <template v-else>
      <tr
        v-for="(row, i) of getHeaderRows()"
        :key="i"
        role="row"
        v-bind="{ ...ptm('headerRow'), ...getRowPT(row, 'root', i) }"
      >
        <template
          v-for="(col, j) of getHeaderColumns(row)"
          :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || j"
        >
          <DTHeaderCell
            v-if="
              !columnProp(col, 'hidden') &&
              (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field')) &&
              typeof col.children !== 'string'
            "
            :column="col"
            @column-click="$emit('column-click', $event)"
            @column-mousedown="$emit('column-mousedown', $event)"
            :groupRowsBy="groupRowsBy"
            :groupRowSortField="groupRowSortField"
            :sortMode="sortMode"
            :sortField="sortField"
            :sortOrder="sortOrder"
            :multiSortMeta="multiSortMeta"
            :allRowsSelected="allRowsSelected"
            :empty="empty"
            @checkbox-change="$emit('checkbox-change', $event)"
            :filters="filters"
            :filterDisplay="filterDisplay"
            :filtersStore="filtersStore"
            @filter-change="$emit('filter-change', $event)"
            @filter-apply="$emit('filter-apply')"
            @operator-change="$emit('operator-change', $event)"
            @matchmode-change="$emit('matchmode-change', $event)"
            @constraint-add="$emit('constraint-add', $event)"
            @constraint-remove="$emit('constraint-remove', $event)"
            @apply-click="$emit('apply-click', $event)"
            @filter-overlay-show="$emit('filter-overlay-show')"
            @filter-overlay-hide="$emit('filter-overlay-hide')"
            :unstyled="unstyled"
            :pt="pt"
          />
        </template>
      </tr>
    </template>
  </thead>
</template>
