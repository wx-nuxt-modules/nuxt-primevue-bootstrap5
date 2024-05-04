import type { MultiSelectPassThroughOptions } from 'primevue/multiselect';

import { isPlainObject, isArray } from '@windx-foobar/shared';
import { dropdownPT, sharedDropdownPT } from '../dropdown';

export const multiselectPT = <MultiSelectPassThroughOptions>{
  root: (ctx) => {
    const base = typeof dropdownPT.root === 'function' ? dropdownPT.root(ctx) : { class: '' };

    return { ...base, class: [base.class, 'bpv-form-multiselect'] };
  },
  label: ({ props }) => {
    let isPlaceholder;
    if (isArray(props.modelValue)) {
      isPlaceholder = !props.modelValue.length;
    } else {
      isPlaceholder = props.modelValue === undefined;
    }

    return sharedDropdownPT.input({ isDisabled: props.disabled, isPlaceholder });
  },
  trigger: dropdownPT.trigger,
  panel: (ctx) => {
    const base = isPlainObject(dropdownPT.panel) ? dropdownPT.panel : { class: '' };

    return { ...base, class: [base.class, 'bpv-form-multiselect-menu'] };
  },
  wrapper: dropdownPT.wrapper,
  list: dropdownPT.list,
  itemGroup: dropdownPT.itemGroup,
  item: (ctx) => {
    const base = typeof dropdownPT.item === 'function' ? dropdownPT.item(ctx) : { class: '' };
    const classes = [base.class, 'bpv-form-multiselect-menu-item'];

    return { ...base, class: [base.class, ...classes] };
  },
  blankIcon: dropdownPT.blankIcon,
  checkIcon: dropdownPT.checkIcon,
  clearIcon: dropdownPT.clearIcon,
  filterInput: dropdownPT.filterInput,
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
