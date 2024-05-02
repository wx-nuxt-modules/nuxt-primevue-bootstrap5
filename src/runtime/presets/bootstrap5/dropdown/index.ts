import type { DropdownPassThroughOptions, DropdownPassThroughMethodOptions } from 'primevue/dropdown';
import { createRootClasses } from '../inputtext';

export const sharedDropdownPT = {
  root: ({}: DropdownPassThroughMethodOptions<any> = {}) => {
    const classes = ['dropdown bpv-form-select'];

    return { class: classes };
  }
};

export const dropdownPT = <DropdownPassThroughOptions>{
  root: sharedDropdownPT.root,
  input: ({}) => {
    const classes = ['form-select bpv-form-select-input'];

    return { class: classes };
  },
  trigger: { class: 'bpv-form-select-trigger' },
  panel: { class: 'dropdown-menu show bpv-form-select-menu' },
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
