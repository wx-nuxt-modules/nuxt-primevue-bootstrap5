<script lang="ts">
import { defineComponent } from 'vue';

// @ts-ignore
import ColumnFilter from 'primevue/datatable/ColumnFilter.vue';

export default defineComponent({
  name: 'ColumnFilter',
  hostName: 'DataTable',
  extends: ColumnFilter,
  emits: ['overlay-show', 'overlay-hide'],
  watch: {
    overlayVisible: {
      handler(newVal) {
        if (newVal) {
          this.$emit('overlay-show');
        } else {
          this.$emit('overlay-hide');
        }
      },
      immediate: false
    }
  }
});
</script>

<template>
  <div :class="cx('columnFilter')" v-bind="getColumnPT('columnFilter')">
    <div
      v-if="display === 'row'"
      :class="cx('filterInput')"
      v-bind="{ ...filterInputProps, ...getColumnPT('filterInput') }"
    >
      <component :is="filterElement" :field="field" :filterModel="filters[field]" :filterCallback="filterCallback" />
    </div>
    <button
      v-if="showMenuButton"
      ref="icon"
      type="button"
      :aria-label="filterMenuButtonAriaLabel"
      aria-haspopup="true"
      :aria-expanded="overlayVisible"
      :aria-controls="overlayId"
      :class="cx('filterMenuButton')"
      @click="toggleMenu($event)"
      @keydown="onToggleButtonKeyDown($event)"
      v-bind="getColumnPT('filterMenuButton', ptmFilterMenuParams)"
    >
      <component :is="filterIconTemplate || 'FilterIcon'" v-bind="getColumnPT('filterMenuIcon')" />
    </button>
    <button
      v-if="showClearButton && display === 'row'"
      :class="cx('headerFilterClearButton')"
      type="button"
      @click="clearFilter()"
      v-bind="getColumnPT('headerFilterClearButton', ptmHeaderFilterClearParams)"
    >
      <component :is="filterClearIconTemplate || 'FilterSlashIcon'" v-bind="getColumnPT('filterClearIcon')" />
    </button>
    <Portal>
      <transition
        name="p-connected-overlay"
        @enter="onOverlayEnter"
        @after-enter="onOverlayAfterEnter"
        @leave="onOverlayLeave"
        @after-leave="onOverlayAfterLeave"
        v-bind="getColumnPT('transition')"
      >
        <div
          v-if="overlayVisible"
          :ref="overlayRef"
          :id="overlayId"
          v-focustrap
          :aria-modal="overlayVisible"
          role="dialog"
          :class="[cx('filterOverlay'), filterMenuClass]"
          @keydown.escape="hide"
          @click="onContentClick"
          @mousedown="onContentMouseDown"
          v-bind="getColumnPT('filterOverlay')"
        >
          <component
            :is="filterHeaderTemplate"
            :field="field"
            :filterModel="filters[field]"
            :filterCallback="filterCallback"
          />
          <template v-if="display === 'row'">
            <ul :class="cx('filterRowItems')" v-bind="getColumnPT('filterRowItems')">
              <li
                v-for="(matchMode, i) of matchModes"
                :key="matchMode.label"
                :class="cx('filterRowItem', { matchMode })"
                @click="onRowMatchModeChange(matchMode.value)"
                @keydown="onRowMatchModeKeyDown($event)"
                @keydown.enter.prevent="onRowMatchModeChange(matchMode.value)"
                :tabindex="i === 0 ? '0' : null"
                v-bind="getColumnPT('filterRowItem', ptmFilterRowItemOptions(matchMode))"
              >
                {{ matchMode.label }}
              </li>
              <li :class="cx('filterSeparator')" v-bind="getColumnPT('filterSeparator')"></li>
              <li
                :class="cx('filterRowItem')"
                @click="clearFilter()"
                @keydown="onRowMatchModeKeyDown($event)"
                @keydown.enter="onRowClearItemClick()"
                v-bind="getColumnPT('filterRowItem')"
              >
                {{ noFilterLabel }}
              </li>
            </ul>
          </template>
          <template v-else>
            <div v-if="isShowOperator" :class="cx('filterOperator')" v-bind="getColumnPT('filterOperator')">
              <CFDropdown
                :options="operatorOptions"
                :modelValue="operator"
                :aria-label="filterOperatorAriaLabel"
                :class="cx('filterOperatorDropdown')"
                optionLabel="label"
                optionValue="value"
                @update:modelValue="onOperatorChange($event)"
                :unstyled="unstyled"
                :pt="getColumnPT('filterOperatorDropdown')"
              ></CFDropdown>
            </div>
            <div :class="cx('filterConstraints')" v-bind="getColumnPT('filterConstraints')">
              <div
                v-for="(fieldConstraint, i) of fieldConstraints"
                :key="i"
                :class="cx('filterConstraint')"
                v-bind="getColumnPT('filterConstraint')"
              >
                <CFDropdown
                  v-if="isShowMatchModes"
                  :options="matchModes"
                  :modelValue="fieldConstraint.matchMode"
                  :class="cx('filterMatchModeDropdown')"
                  optionLabel="label"
                  optionValue="value"
                  :aria-label="filterConstraintAriaLabel"
                  @update:modelValue="onMenuMatchModeChange($event, i)"
                  :unstyled="unstyled"
                  :pt="getColumnPT('filterMatchModeDropdown')"
                ></CFDropdown>
                <component
                  v-if="display === 'menu'"
                  :is="filterElement"
                  :field="field"
                  :filterModel="fieldConstraint"
                  :filterCallback="filterCallback"
                  :applyFilter="applyFilter"
                />
                <div v-bind="getColumnPT('filterRemove')">
                  <CFButton
                    v-if="showRemoveIcon"
                    type="button"
                    :class="cx('filterRemoveButton')"
                    @click="removeConstraint(i)"
                    :label="removeRuleButtonLabel"
                    :unstyled="unstyled"
                    text
                    severity="danger"
                    size="small"
                    :pt="getColumnPT('filterRemoveButton')"
                  >
                    <template #icon="iconProps">
                      <component
                        :is="filterRemoveIconTemplate || 'TrashIcon'"
                        :class="iconProps.class"
                        v-bind="getColumnPT('filterRemoveButton')['icon']"
                      />
                    </template>
                  </CFButton>
                </div>
              </div>
            </div>
            <div v-if="isShowAddConstraint" :class="cx('filterAddRule')" v-bind="getColumnPT('filterAddRule')">
              <CFButton
                type="button"
                :label="addRuleButtonLabel"
                iconPos="left"
                :class="cx('filterAddRuleButton')"
                @click="addConstraint()"
                :unstyled="unstyled"
                text
                severity="info"
                size="small"
                :pt="getColumnPT('filterAddRuleButton')"
              >
                <template #icon="iconProps">
                  <component
                    :is="filterAddIconTemplate || 'PlusIcon'"
                    :class="iconProps.class"
                    v-bind="getColumnPT('filterAddRuleButton')['icon']"
                  />
                </template>
              </CFButton>
            </div>
            <div :class="cx('filterButtonbar')" v-bind="getColumnPT('filterButtonbar')">
              <CFButton
                v-if="!filterClearTemplate && showClearButton"
                type="button"
                :class="cx('filterClearButton')"
                :label="clearButtonLabel"
                @click="clearFilter"
                :unstyled="unstyled"
                size="small"
                outlined
                :pt="getColumnPT('filterClearButton')"
              ></CFButton>
              <component
                v-else
                :is="filterClearTemplate"
                :field="field"
                :filterModel="filters[field]"
                :filterCallback="clearFilter"
              />
              <template v-if="showApplyButton">
                <CFButton
                  v-if="!filterApplyTemplate"
                  type="button"
                  :class="cx('filterApplyButton')"
                  :label="applyButtonLabel"
                  @click="applyFilter()"
                  :unstyled="unstyled"
                  size="small"
                  :pt="getColumnPT('filterApplyButton')"
                ></CFButton>
                <component
                  v-else
                  :is="filterApplyTemplate"
                  :field="field"
                  :filterModel="filters[field]"
                  :filterCallback="applyFilter"
                />
              </template>
            </div>
          </template>
          <component
            :is="filterFooterTemplate"
            :field="field"
            :filterModel="filters[field]"
            :filterCallback="filterCallback"
          />
        </div>
      </transition>
    </Portal>
  </div>
</template>
