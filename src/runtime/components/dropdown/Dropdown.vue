<script lang="ts">
import type { PropType } from 'vue';
import type { BPVDropdownProps } from '../../presets/bootstrap5/dropdown/types';

import { defineComponent } from 'vue';
import { DomHandler } from 'primevue/utils';

// @ts-expect-error
import Dropdown from 'primevue/dropdown/Dropdown.vue';

export default defineComponent({
  name: 'Dropdown',
  extends: Dropdown,
  props: {
    position: {
      type: String as PropType<BPVDropdownProps['position']>,
      required: false,
      validator: (val: NonNullable<BPVDropdownProps['position']>) => ['top', 'bottom', 'auto'].includes(val)
    }
  },
  methods: {
    alignOverlay() {
      const savedGetViewport = DomHandler.getViewport;
      const viewport = savedGetViewport();

      if (this.appendTo !== 'self' && this.position && this.position !== 'auto') {
        // HACK: задаем наименьшую или наибольшую высоту для подмены значений
        DomHandler.getViewport = () => ({ width: viewport.width, height: this.position === 'top' ? 0 : Infinity });
      }

      Dropdown.methods.alignOverlay.call(this);
      DomHandler.getViewport = savedGetViewport;
    }
  }
});
</script>

<template>
  <div ref="container" :id="id" :class="cx('root')" @click="onContainerClick" v-bind="ptmi('root')">
    <input
      v-if="editable"
      ref="focusInput"
      :id="inputId"
      type="text"
      :class="[cx('input'), inputClass]"
      :style="inputStyle"
      :value="editableInputValue"
      :placeholder="placeholder"
      :tabindex="!disabled ? tabindex : -1"
      :disabled="disabled"
      autocomplete="off"
      role="combobox"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      aria-haspopup="listbox"
      :aria-expanded="overlayVisible"
      :aria-controls="id + '_list'"
      :aria-activedescendant="focused ? focusedOptionId : undefined"
      :aria-invalid="invalid || undefined"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      @input="onEditableInput"
      v-bind="{ ...inputProps, ...ptm('input') }"
    />
    <span
      v-else
      ref="focusInput"
      :id="inputId"
      :class="[cx('input'), inputClass]"
      :style="inputStyle"
      :tabindex="!disabled ? tabindex : -1"
      role="combobox"
      :aria-label="ariaLabel || (label === 'p-emptylabel' ? undefined : label)"
      :aria-labelledby="ariaLabelledby"
      aria-haspopup="listbox"
      :aria-expanded="overlayVisible"
      :aria-controls="id + '_list'"
      :aria-activedescendant="focused ? focusedOptionId : undefined"
      :aria-disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      v-bind="{ ...inputProps, ...ptm('input') }"
    >
      <slot name="value" :value="modelValue" :placeholder="placeholder">{{
        label === 'p-emptylabel' ? '&nbsp;' : label || 'empty'
      }}</slot>
    </span>
    <slot
      v-if="showClear && modelValue != null"
      name="clearicon"
      :class="cx('clearIcon')"
      :onClick="onClearClick"
      :clearCallback="onClearClick"
    >
      <component
        :is="clearIcon ? 'i' : 'TimesIcon'"
        ref="clearIcon"
        :class="[cx('clearIcon'), clearIcon]"
        @click="onClearClick"
        v-bind="{ ...clearIconProps, ...ptm('clearIcon') }"
        data-pc-section="clearicon"
      />
    </slot>
    <div :class="cx('trigger')" v-bind="ptm('trigger')">
      <slot v-if="loading" name="loadingicon" :class="cx('loadingIcon')">
        <span
          v-if="loadingIcon"
          :class="[cx('loadingIcon'), 'pi-spin', loadingIcon]"
          aria-hidden="true"
          v-bind="ptm('loadingIcon')"
        />
        <SpinnerIcon v-else :class="cx('loadingIcon')" spin aria-hidden="true" v-bind="ptm('loadingIcon')" />
      </slot>
      <slot v-else name="dropdownicon" :class="cx('dropdownIcon')">
        <component
          :is="dropdownIcon ? 'span' : 'ChevronDownIcon'"
          :class="[cx('dropdownIcon'), dropdownIcon]"
          aria-hidden="true"
          v-bind="ptm('dropdownIcon')"
        />
      </slot>
    </div>
    <Portal :appendTo="appendTo">
      <transition
        name="p-connected-overlay"
        @enter="onOverlayEnter"
        @after-enter="onOverlayAfterEnter"
        @leave="onOverlayLeave"
        @after-leave="onOverlayAfterLeave"
        v-bind="ptm('transition')"
      >
        <div
          v-if="overlayVisible"
          :ref="overlayRef"
          :class="[cx('panel'), panelClass]"
          :style="panelStyle"
          @click="onOverlayClick"
          @keydown="onOverlayKeyDown"
          v-bind="{ ...panelProps, ...ptm('panel') }"
        >
          <span
            ref="firstHiddenFocusableElementOnOverlay"
            role="presentation"
            aria-hidden="true"
            class="p-hidden-accessible p-hidden-focusable"
            :tabindex="0"
            @focus="onFirstHiddenFocus"
            v-bind="ptm('hiddenFirstFocusableEl')"
            :data-p-hidden-accessible="true"
            :data-p-hidden-focusable="true"
          ></span>
          <slot name="header" :value="modelValue" :options="visibleOptions"></slot>
          <div v-if="filter" :class="cx('header')" v-bind="ptm('header')">
            <div :class="cx('filterContainer')" v-bind="ptm('filterContainer')">
              <input
                ref="filterInput"
                type="text"
                :value="filterValue"
                @vue:mounted="onFilterUpdated"
                @vue:updated="onFilterUpdated"
                :class="cx('filterInput')"
                :placeholder="filterPlaceholder"
                role="searchbox"
                autocomplete="off"
                :aria-owns="id + '_list'"
                :aria-activedescendant="focusedOptionId"
                @keydown="onFilterKeyDown"
                @blur="onFilterBlur"
                @input="onFilterChange"
                v-bind="{ ...filterInputProps, ...ptm('filterInput') }"
              />
              <slot name="filtericon" :class="cx('filterIcon')">
                <component
                  :is="filterIcon ? 'span' : 'SearchIcon'"
                  :class="[cx('filterIcon'), filterIcon]"
                  v-bind="ptm('filterIcon')"
                />
              </slot>
            </div>
            <span
              role="status"
              aria-live="polite"
              class="p-hidden-accessible"
              v-bind="ptm('hiddenFilterResult')"
              :data-p-hidden-accessible="true"
            >
              {{ filterResultMessageText }}
            </span>
          </div>
          <div
            :class="cx('wrapper')"
            :style="{ 'max-height': virtualScrollerDisabled ? scrollHeight : '' }"
            v-bind="ptm('wrapper')"
          >
            <VirtualScroller
              :ref="virtualScrollerRef"
              v-bind="virtualScrollerOptions"
              :items="visibleOptions"
              :style="{ height: scrollHeight }"
              :tabindex="-1"
              :disabled="virtualScrollerDisabled"
              :pt="ptm('virtualScroller')"
            >
              <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                <ul
                  :ref="(el: any) => listRef(el, contentRef)"
                  :id="id + '_list'"
                  :class="[cx('list'), styleClass]"
                  :style="contentStyle"
                  role="listbox"
                  v-bind="ptm('list')"
                >
                  <template
                    v-for="(option, i) of items"
                    :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))"
                  >
                    <li
                      v-if="isOptionGroup(option)"
                      :id="id + '_' + getOptionIndex(i, getItemOptions)"
                      :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                      :class="cx('itemGroup')"
                      role="option"
                      v-bind="ptm('itemGroup')"
                    >
                      <slot name="optiongroup" :option="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">
                        <span :class="cx('itemGroupLabel')" v-bind="ptm('itemGroupLabel')">{{
                          getOptionGroupLabel(option.optionGroup)
                        }}</span>
                      </slot>
                    </li>
                    <li
                      v-else
                      :id="id + '_' + getOptionIndex(i, getItemOptions)"
                      v-ripple
                      :class="cx('item', { option, focusedOption: getOptionIndex(i, getItemOptions) })"
                      :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                      role="option"
                      :aria-label="getOptionLabel(option)"
                      :aria-selected="isSelected(option)"
                      :aria-disabled="isOptionDisabled(option)"
                      :aria-setsize="ariaSetSize"
                      :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                      @click="onOptionSelect($event, option)"
                      @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))"
                      :data-p-highlight="isSelected(option)"
                      :data-p-focused="focusedOptionIndex === getOptionIndex(i, getItemOptions)"
                      :data-p-disabled="isOptionDisabled(option)"
                      v-bind="getPTItemOptions(option, getItemOptions, i, 'item')"
                    >
                      <template v-if="checkmark">
                        <CheckIcon v-if="isSelected(option)" :class="cx('checkIcon')" v-bind="ptm('checkIcon')" />
                        <BlankIcon v-else :class="cx('blankIcon')" v-bind="ptm('blankIcon')" />
                      </template>
                      <slot name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">
                        <span :class="cx('itemLabel')" v-bind="ptm('itemLabel')">{{ getOptionLabel(option) }}</span>
                      </slot>
                    </li>
                  </template>
                  <li
                    v-if="filterValue && (!items || (items && items.length === 0))"
                    :class="cx('emptyMessage')"
                    role="option"
                    v-bind="ptm('emptyMessage')"
                    :data-p-hidden-accessible="true"
                  >
                    <slot name="emptyfilter">{{ emptyFilterMessageText }}</slot>
                  </li>
                  <li
                    v-else-if="!options || (options && options.length === 0)"
                    :class="cx('emptyMessage')"
                    role="option"
                    v-bind="ptm('emptyMessage')"
                    :data-p-hidden-accessible="true"
                  >
                    <slot name="empty">{{ emptyMessageText }}</slot>
                  </li>
                </ul>
              </template>
              <template v-if="$slots.loader" v-slot:loader="{ options }">
                <slot name="loader" :options="options"></slot>
              </template>
            </VirtualScroller>
          </div>
          <slot name="footer" :value="modelValue" :options="visibleOptions"></slot>
          <span
            v-if="!options || (options && options.length === 0)"
            role="status"
            aria-live="polite"
            class="p-hidden-accessible"
            v-bind="ptm('hiddenEmptyMessage')"
            :data-p-hidden-accessible="true"
          >
            {{ emptyMessageText }}
          </span>
          <span
            role="status"
            aria-live="polite"
            class="p-hidden-accessible"
            v-bind="ptm('hiddenSelectedMessage')"
            :data-p-hidden-accessible="true"
          >
            {{ selectedMessageText }}
          </span>
          <span
            ref="lastHiddenFocusableElementOnOverlay"
            role="presentation"
            aria-hidden="true"
            class="p-hidden-accessible p-hidden-focusable"
            :tabindex="0"
            @focus="onLastHiddenFocus"
            v-bind="ptm('hiddenLastFocusableEl')"
            :data-p-hidden-accessible="true"
            :data-p-hidden-focusable="true"
          ></span>
        </div>
      </transition>
    </Portal>
  </div>
</template>
