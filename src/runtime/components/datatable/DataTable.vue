<script lang="ts">
import type { ColumnProps } from '../../presets/bootstrap5/column/types';

import { defineComponent } from 'vue';

import DataTable from 'primevue/datatable/DataTable.vue';

import { DomHandler } from 'primevue/utils';

export default defineComponent({
  name: 'DataTable',
  extends: DataTable,
  computed: {
    columns() {
      const cols: any[] = this.d_columns.get(this);

      if (this.reorderableColumns) {
        let orderedColumns = [];

        if (this.d_columnOrder) {
          for (let columnKey of this.d_columnOrder) {
            let column = this.findColumnByKey(cols, columnKey);

            if (column && !this.columnProp(column, 'hidden')) {
              orderedColumns.push(column);
            }
          }
        }

        const filterFrozenAlignRightColumn = (col: ColumnProps) => {
          if (!this.columnProp(col, 'frozen')) return true;
          return this.columnProp(col, 'alignFrozen') !== 'right';
        };

        return [
          ...orderedColumns.filter((col) => filterFrozenAlignRightColumn(col)),
          ...cols.filter((item) => orderedColumns.indexOf(item) < 0),
          ...orderedColumns.filter((col) => !filterFrozenAlignRightColumn(col))
        ];
      }

      return cols;
    }
  },
  methods: {
    /**
     * @override
     */
    resizeTableCells(newColumnWidth: number, nextColumnWidth: number) {
      let colIndex = DomHandler.index(this.resizeColumnElement);
      let widths: number[] = [];
      let headers = DomHandler.find(this.$refs.table, 'thead[data-pc-section="thead"] > tr > th');

      headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header, false)));

      this.destroyStyleElement();
      this.createStyleElement();

      let innerHTML = '';
      let selector = `[data-pc-name="datatable"][${this.attributeSelector}] > [data-pc-section="wrapper"] ${this.virtualScrollerDisabled ? '' : '> [data-pc-name="virtualscroller"]'} > table[data-pc-section="table"]`;

      widths.forEach((width, index) => {
        const column = this.columns[index];

        const key = this.getColumnKey_(this.columns[index]);
        const isFrozen = !!this.columnProp(column, 'frozen');

        let colWidth;
        if (!isFrozen) {
          colWidth =
            index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;

          if (this.$_cacheWidths.has(key)) {
            this.$_cacheWidths.set(key, colWidth);
          }
        }

        let style = `width: ${colWidth}px !important; max-width: ${colWidth}px !important`;

        innerHTML += `
                    ${selector} > thead[data-pc-section="thead"] > tr > th:nth-child(${index + 1}),
                    ${selector} > tbody[data-pc-section="tbody"] > tr > td:nth-child(${index + 1}),
                    ${selector} > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(${index + 1}) {
                        ${style}
                    }
                `;
      });

      this.styleElement.innerHTML = innerHTML;
    },

    getColumnKey_(column: ColumnProps) {
      const field = this.columnProp(column, 'field');

      if (typeof field === 'string' && !!field) return field;
      return this.columnProp(column, 'columnKey');
    },
    createCacheWidths_() {
      const widths: number[] = [];
      const headers = DomHandler.find(this.$el, 'thead[data-pc-section="thead"] > tr > th');

      headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header, false)));

      // private, non-reactive
      this.$_cacheWidths = new Map(widths.map((value, idx) => [this.getColumnKey_(this.columns[idx]), value]));
    },
    changeColumnsLengthWatchHandler_() {
      if (!this.styleElement) return;

      const widths: number[] = [];
      for (const column of this.columns) {
        const key = this.getColumnKey_(column);

        if (this.$_cacheWidths.has(key)) {
          widths.push(this.$_cacheWidths.get(key));
        }
      }

      this.destroyStyleElement();
      this.addColumnWidthStyles(widths);
    }
  },
  mounted() {
    this.createCacheWidths_();

    this.$watch(() => this.columns.length, this.changeColumnsLengthWatchHandler_, { immediate: false });
  },
  beforeUnmount() {
    this.$_cacheWidths = undefined;
  }
});
</script>

<template>
  <div :class="cx('root')" data-scrollselectors=".p-datatable-wrapper" v-bind="ptmi('root')">
    <slot></slot>
    <div v-if="loading" :class="cx('loadingOverlay')" v-bind="ptm('loadingOverlay')">
      <slot v-if="$slots.loading" name="loading"></slot>
      <template v-else>
        <component v-if="$slots.loadingicon" :is="$slots.loadingicon" :class="cx('loadingIcon')" />
        <i v-else-if="loadingIcon" :class="[cx('loadingIcon'), 'pi-spin', loadingIcon]" v-bind="ptm('loadingIcon')" />
        <SpinnerIcon v-else spin :class="cx('loadingIcon')" v-bind="ptm('loadingIcon')" />
      </template>
    </div>
    <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
      <slot name="header"></slot>
    </div>
    <DTPaginator
      v-if="paginatorTop"
      :rows="d_rows"
      :first="d_first"
      :totalRecords="totalRecordsLength"
      :pageLinkSize="pageLinkSize"
      :template="paginatorTemplate"
      :rowsPerPageOptions="rowsPerPageOptions"
      :currentPageReportTemplate="currentPageReportTemplate"
      :class="cx('paginator')"
      @page="onPage($event)"
      :alwaysShow="alwaysShowPaginator"
      :unstyled="unstyled"
      :pt="ptm('paginator')"
    >
      <template v-if="$slots.paginatorstart" #start>
        <slot name="paginatorstart"></slot>
      </template>
      <template v-if="$slots.paginatorend" #end>
        <slot name="paginatorend"></slot>
      </template>
      <template v-if="$slots.paginatorfirstpagelinkicon" #firstpagelinkicon="slotProps">
        <slot name="paginatorfirstpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorprevpagelinkicon" #prevpagelinkicon="slotProps">
        <slot name="paginatorprevpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatornextpagelinkicon" #nextpagelinkicon="slotProps">
        <slot name="paginatornextpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorlastpagelinkicon" #lastpagelinkicon="slotProps">
        <slot name="paginatorlastpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorjumptopagedropdownicon" #jumptopagedropdownicon="slotProps">
        <slot name="paginatorjumptopagedropdownicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorrowsperpagedropdownicon" #rowsperpagedropdownicon="slotProps">
        <slot name="paginatorrowsperpagedropdownicon" :class="slotProps.class"></slot>
      </template>
    </DTPaginator>
    <div
      :class="cx('wrapper')"
      :style="[sx('wrapper'), { maxHeight: virtualScrollerDisabled ? scrollHeight : '' }]"
      v-bind="ptm('wrapper')"
    >
      <DTVirtualScroller
        ref="virtualScroller"
        v-bind="virtualScrollerOptions"
        :items="processedData"
        :columns="columns"
        :style="scrollHeight !== 'flex' ? { height: scrollHeight } : undefined"
        :scrollHeight="scrollHeight !== 'flex' ? undefined : '100%'"
        :disabled="virtualScrollerDisabled"
        loaderDisabled
        inline
        autoSize
        :showSpacer="false"
        :pt="ptm('virtualScroller')"
      >
        <template #content="slotProps">
          <table
            ref="table"
            role="table"
            :class="[cx('table'), tableClass]"
            :style="[tableStyle, slotProps.spacerStyle]"
            v-bind="{ ...tableProps, ...ptm('table') }"
          >
            <DTTableHeader
              :columnGroup="headerColumnGroup"
              :columns="slotProps.columns"
              :rowGroupMode="rowGroupMode"
              :groupRowsBy="groupRowsBy"
              :groupRowSortField="groupRowSortField"
              :reorderableColumns="reorderableColumns"
              :resizableColumns="resizableColumns"
              :allRowsSelected="allRowsSelected"
              :empty="empty"
              :sortMode="sortMode"
              :sortField="d_sortField"
              :sortOrder="d_sortOrder"
              :multiSortMeta="d_multiSortMeta"
              :filters="d_filters"
              :filtersStore="filters"
              :filterDisplay="filterDisplay"
              :filterInputProps="filterInputProps"
              @column-click="onColumnHeaderClick($event)"
              @column-mousedown="onColumnHeaderMouseDown($event)"
              @filter-change="onFilterChange"
              @filter-apply="onFilterApply"
              @column-dragstart="onColumnHeaderDragStart($event)"
              @column-dragover="onColumnHeaderDragOver($event)"
              @column-dragleave="onColumnHeaderDragLeave($event)"
              @column-drop="onColumnHeaderDrop($event)"
              @column-resizestart="onColumnResizeStart($event)"
              @checkbox-change="toggleRowsWithCheckbox($event)"
              :unstyled="unstyled"
              :pt="pt"
            />
            <DTTableBody
              v-if="frozenValue"
              ref="frozenBodyRef"
              :value="frozenValue"
              :frozenRow="true"
              :columns="slotProps.columns"
              :first="d_first"
              :dataKey="dataKey"
              :selection="selection"
              :selectionKeys="d_selectionKeys"
              :selectionMode="selectionMode"
              :contextMenu="contextMenu"
              :contextMenuSelection="contextMenuSelection"
              :rowGroupMode="rowGroupMode"
              :groupRowsBy="groupRowsBy"
              :expandableRowGroups="expandableRowGroups"
              :rowClass="rowClass"
              :rowStyle="rowStyle"
              :editMode="editMode"
              :compareSelectionBy="compareSelectionBy"
              :scrollable="scrollable"
              :expandedRowIcon="expandedRowIcon"
              :collapsedRowIcon="collapsedRowIcon"
              :expandedRows="expandedRows"
              :expandedRowGroups="expandedRowGroups"
              :editingRows="editingRows"
              :editingRowKeys="d_editingRowKeys"
              :templates="$slots"
              :responsiveLayout="responsiveLayout"
              :isVirtualScrollerDisabled="true"
              @rowgroup-toggle="toggleRowGroup"
              @row-click="onRowClick($event)"
              @row-dblclick="onRowDblClick($event)"
              @row-rightclick="onRowRightClick($event)"
              @row-touchend="onRowTouchEnd"
              @row-keydown="onRowKeyDown"
              @row-mousedown="onRowMouseDown"
              @row-dragstart="onRowDragStart($event)"
              @row-dragover="onRowDragOver($event)"
              @row-dragleave="onRowDragLeave($event)"
              @row-dragend="onRowDragEnd($event)"
              @row-drop="onRowDrop($event)"
              @row-toggle="toggleRow($event)"
              @radio-change="toggleRowWithRadio($event)"
              @checkbox-change="toggleRowWithCheckbox($event)"
              @cell-edit-init="onCellEditInit($event)"
              @cell-edit-complete="onCellEditComplete($event)"
              @cell-edit-cancel="onCellEditCancel($event)"
              @row-edit-init="onRowEditInit($event)"
              @row-edit-save="onRowEditSave($event)"
              @row-edit-cancel="onRowEditCancel($event)"
              :editingMeta="d_editingMeta"
              @editing-meta-change="onEditingMetaChange"
              :unstyled="unstyled"
              :pt="pt"
            />
            <DTTableBody
              ref="bodyRef"
              :value="dataToRender(slotProps.rows)"
              :class="slotProps.styleClass"
              :columns="slotProps.columns"
              :empty="empty"
              :first="d_first"
              :dataKey="dataKey"
              :selection="selection"
              :selectionKeys="d_selectionKeys"
              :selectionMode="selectionMode"
              :contextMenu="contextMenu"
              :contextMenuSelection="contextMenuSelection"
              :rowGroupMode="rowGroupMode"
              :groupRowsBy="groupRowsBy"
              :expandableRowGroups="expandableRowGroups"
              :rowClass="rowClass"
              :rowStyle="rowStyle"
              :editMode="editMode"
              :compareSelectionBy="compareSelectionBy"
              :scrollable="scrollable"
              :expandedRowIcon="expandedRowIcon"
              :collapsedRowIcon="collapsedRowIcon"
              :expandedRows="expandedRows"
              :expandedRowGroups="expandedRowGroups"
              :editingRows="editingRows"
              :editingRowKeys="d_editingRowKeys"
              :templates="$slots"
              :responsiveLayout="responsiveLayout"
              :virtualScrollerContentProps="slotProps"
              :isVirtualScrollerDisabled="virtualScrollerDisabled"
              @rowgroup-toggle="toggleRowGroup"
              @row-click="onRowClick($event)"
              @row-dblclick="onRowDblClick($event)"
              @row-rightclick="onRowRightClick($event)"
              @row-touchend="onRowTouchEnd"
              @row-keydown="onRowKeyDown($event, slotProps)"
              @row-mousedown="onRowMouseDown"
              @row-dragstart="onRowDragStart($event)"
              @row-dragover="onRowDragOver($event)"
              @row-dragleave="onRowDragLeave($event)"
              @row-dragend="onRowDragEnd($event)"
              @row-drop="onRowDrop($event)"
              @row-toggle="toggleRow($event)"
              @radio-change="toggleRowWithRadio($event)"
              @checkbox-change="toggleRowWithCheckbox($event)"
              @cell-edit-init="onCellEditInit($event)"
              @cell-edit-complete="onCellEditComplete($event)"
              @cell-edit-cancel="onCellEditCancel($event)"
              @row-edit-init="onRowEditInit($event)"
              @row-edit-save="onRowEditSave($event)"
              @row-edit-cancel="onRowEditCancel($event)"
              :editingMeta="d_editingMeta"
              @editing-meta-change="onEditingMetaChange"
              :unstyled="unstyled"
              :pt="pt"
            />
            <tbody
              v-if="hasSpacerStyle(slotProps.spacerStyle)"
              :class="cx('virtualScrollerSpacer')"
              :style="{
                height: `calc(${slotProps.spacerStyle.height} - ${slotProps.rows.length * slotProps.itemSize}px)`
              }"
              v-bind="ptm('virtualScrollerSpacer')"
            ></tbody>
            <DTTableFooter :columnGroup="footerColumnGroup" :columns="slotProps.columns" :pt="pt" />
          </table>
        </template>
      </DTVirtualScroller>
    </div>
    <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
      <slot name="footer"></slot>
    </div>
    <DTPaginator
      v-if="paginatorBottom"
      :rows="d_rows"
      :first="d_first"
      :totalRecords="totalRecordsLength"
      :pageLinkSize="pageLinkSize"
      :template="paginatorTemplate"
      :rowsPerPageOptions="rowsPerPageOptions"
      :currentPageReportTemplate="currentPageReportTemplate"
      :class="cx('paginator')"
      @page="onPage($event)"
      :alwaysShow="alwaysShowPaginator"
      :unstyled="unstyled"
      :pt="ptm('paginator')"
    >
      <template v-if="$slots.paginatorstart" #start>
        <slot name="paginatorstart"></slot>
      </template>
      <template v-if="$slots.paginatorend" #end>
        <slot name="paginatorend"></slot>
      </template>
      <template v-if="$slots.paginatorfirstpagelinkicon" #firstpagelinkicon="slotProps">
        <slot name="paginatorfirstpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorprevpagelinkicon" #prevpagelinkicon="slotProps">
        <slot name="paginatorprevpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatornextpagelinkicon" #nextpagelinkicon="slotProps">
        <slot name="paginatornextpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorlastpagelinkicon" #lastpagelinkicon="slotProps">
        <slot name="paginatorlastpagelinkicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorjumptopagedropdownicon" #jumptopagedropdownicon="slotProps">
        <slot name="paginatorjumptopagedropdownicon" :class="slotProps.class"></slot>
      </template>
      <template v-if="$slots.paginatorrowsperpagedropdownicon" #rowsperpagedropdownicon="slotProps">
        <slot name="paginatorrowsperpagedropdownicon" :class="slotProps.class"></slot>
      </template>
    </DTPaginator>
    <div ref="resizeHelper" :class="cx('resizeHelper')" style="display: none" v-bind="ptm('resizeHelper')"></div>
    <span
      v-if="reorderableColumns"
      ref="reorderIndicatorUp"
      :class="cx('reorderIndicatorUp')"
      style="position: absolute; display: none"
      v-bind="ptm('reorderIndicatorUp')"
    >
      <component :is="$slots.reorderindicatorupicon || 'ArrowDownIcon'" />
    </span>
    <span
      v-if="reorderableColumns"
      ref="reorderIndicatorDown"
      :class="cx('reorderIndicatorDown')"
      style="position: absolute; display: none"
      v-bind="ptm('reorderIndicatorDown')"
    >
      <component :is="$slots.reorderindicatordownicon || 'ArrowUpIcon'" />
    </span>
  </div>
</template>
