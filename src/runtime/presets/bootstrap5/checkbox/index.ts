import type { CheckboxPassThroughOptions } from 'primevue/checkbox';

export const checkboxPT = <CheckboxPassThroughOptions>{
  root: () => {
    const classes = ['bpv-form-checkbox'];

    return { class: classes };
  },
  input: () => {
    const classes = ['form-check-input bpv-form-checkbox-input'];

    return { class: classes };
  },
  box: () => {
    const classes = ['bpv-form-checkbox-box'];

    return { class: classes };
  }
};
