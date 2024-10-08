import type { MultiSelectPassThroughOptions } from 'primevue/multiselect';

import { isArray } from '@windx-foobar/shared';
import { dropdownPT, sharedDropdownPT } from '../dropdown';

export const multiselectPT = <MultiSelectPassThroughOptions>{
  root: (ctx) => {
    const base = sharedDropdownPT.root();

    return { ...base, class: [base.class, 'bpv-form-multiselect'] };
  },
  label: ({ props, attrs }) => {
    let isPlaceholder;
    if (isArray(props.modelValue)) {
      isPlaceholder = !props.modelValue.length;
    } else {
      isPlaceholder = props.modelValue === undefined;
    }

    return sharedDropdownPT.input({ isDisabled: props.disabled, isPlaceholder, size: attrs.size, state: attrs.state });
  },
  trigger: dropdownPT.trigger,
  panel: ({ attrs }) => {
    const base = sharedDropdownPT.panel({ size: attrs.size });

    return { ...base, class: [base.class, 'bpv-form-multiselect-menu'] };
  },
  wrapper: dropdownPT.wrapper,
  list: dropdownPT.list,
  itemGroup: dropdownPT.itemGroup,
  item: ({ context }) => {
    const base = sharedDropdownPT.item({ focused: context.focused, selected: context.selected });
    const classes = [base.class, 'bpv-form-multiselect-menu-item'];

    return { ...base, class: classes };
  },
  blankIcon: dropdownPT.blankIcon,
  checkIcon: dropdownPT.checkIcon,
  clearIcon: dropdownPT.clearIcon,
  filterInput: sharedDropdownPT.filterInput,
  filterIcon: sharedDropdownPT.filterIcon,
  filterContainer: { class: 'bpv-form-multiselect-menu-filter-container' },
  emptyMessage: sharedDropdownPT.emptyMessage,
  option: () => {
    const classes = ['bpv-form-multiselect-menu-item-option'];

    return { class: classes };
  },
  closeButton: () => {
    const classes = ['btn-close'];

    return { class: classes };
  },
  closeIcon: () => {
    const classes = ['d-none'];

    return { class: classes };
  },
  header: () => {
    const classes = ['bpv-form-multiselect-menu-header'];

    return { class: classes };
  },

  transition: dropdownPT.transition
};
