import type { DropdownPassThroughOptions, DropdownPassThroughMethodOptions } from 'primevue/dropdown';
import type { BPVDropdownProps } from './types';
import { createRootClasses } from '../inputtext';
import { inArrayValidator } from '../../../utils/validators';
import { BPV_DROPDOWN_SIZE } from '../../../constants';

export const sharedDropdownPT = {
  root: ({}: DropdownPassThroughMethodOptions<any> = {}) => {
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
    const currentSize = inArrayValidator(attrs.size, BPV_DROPDOWN_SIZE, 'md');

    const classes = ['dropdown-menu show bpv-form-select-menu', `bpv-form-select-menu-${currentSize}`];

    return { class: classes };
  },
  wrapper: { class: 'bpv-form-select-menu-wrapper-list' },
  list: { class: 'bpv-form-select-menu-list' },
  itemGroup: { class: 'bpv-form-select-menu-item bpv-form-select-menu-item-group' },
  item: ({ context }) => {
    const classes = [
      'bpv-form-select-menu-item',
      context.selected && 'active',
      !context.selected && context.focused && 'focus'
    ];

    return { class: classes };
  },
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
