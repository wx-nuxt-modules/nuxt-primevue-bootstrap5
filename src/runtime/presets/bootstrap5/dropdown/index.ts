import type { DropdownPassThroughOptions, DropdownPassThroughMethodOptions } from 'primevue/dropdown';
import type { BPVDropdownProps } from './types';
import { createRootClasses } from '../inputtext';
import { inArrayValidator } from '../../../utils/validators';
import { BPV_DROPDOWN_SIZE } from '../../../constants';

export const sharedDropdownPT = {
  root: () => {
    const classes = ['dropdown bpv-form-select'];

    return { class: classes };
  },
  input: ({
    isPlaceholder,
    isDisabled,
    size
  }: {
    isPlaceholder?: boolean;
    isDisabled?: boolean;
    size?: BPVDropdownProps['size'];
  }) => {
    const currentSize = inArrayValidator(size, BPV_DROPDOWN_SIZE, 'md');

    const classes = [
      'form-select bpv-form-select-input',
      isPlaceholder && 'bpv-form-select-input-placeholder',
      isDisabled && 'bpv-form-select-input-disabled',
      `bpv-form-select-input-${currentSize}`
    ];

    return { class: classes };
  },
  panel: ({ size }: { size?: BPVDropdownProps['size'] }) => {
    const currentSize = inArrayValidator(size, BPV_DROPDOWN_SIZE, 'md');

    const classes = ['dropdown-menu show bpv-form-select-menu', `bpv-form-select-menu-${currentSize}`];

    return { class: classes };
  },
  item: ({ selected = false, focused = false }: { selected?: boolean; focused?: boolean } = {}) => {
    const classes = ['bpv-form-select-menu-item', selected && 'active', !selected && focused && 'focus'];

    return { class: classes };
  }
};

export const dropdownPT = <DropdownPassThroughOptions>{
  root: sharedDropdownPT.root,
  input: ({ props, attrs }: any) => {
    return sharedDropdownPT.input({
      isPlaceholder: props.modelValue === undefined,
      isDisabled: props.disabled,
      size: attrs.size
    });
  },
  trigger: { class: 'bpv-form-select-trigger' },
  panel: ({ props, attrs }: any) => {
    return sharedDropdownPT.panel({ size: attrs.size });
  },
  wrapper: { class: 'bpv-form-select-menu-wrapper-list' },
  list: { class: 'bpv-form-select-menu-list' },
  itemGroup: { class: 'bpv-form-select-menu-item bpv-form-select-menu-item-group' },
  item: ({ context }) => sharedDropdownPT.item({ focused: context.focused, selected: context.selected }),
  blankIcon: { class: 'bpv-form-select-menu-item-icon bpv-form-select-menu-item-icon-blank' },
  checkIcon: { class: 'bpv-form-select-menu-item-icon bpv-form-select-menu-item-icon-check' },
  clearIcon: { class: 'btn-close bpv-form-select-clear-icon' },
  itemLabel: () => {
    const classes = ['dropdown-item', 'bpv-form-select-menu-item-label'];

    return { class: classes };
  },
  filterInput: { class: createRootClasses({ size: 'sm' }) },

  transition: {
    name: 'bpv-form-select-menu'
  }
};
