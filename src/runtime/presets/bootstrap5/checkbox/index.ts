import type { CheckboxPassThroughOptions } from 'primevue/checkbox';

import { inArrayValidator } from '../../../utils/validators';
import { BPV_FORM_STATE } from '../../../constants';

export const checkboxPT = <CheckboxPassThroughOptions>{
  root: () => {
    const classes = ['bpv-form-checkbox'];

    return { class: classes };
  },
  input: ({ attrs }) => {
    const currentState = inArrayValidator(attrs.state, BPV_FORM_STATE);

    return { class: ['form-check-input bpv-form-checkbox-input', currentState && `is-${currentState}`] };
  },
  box: () => {
    const classes = ['bpv-form-checkbox-box'];

    return { class: classes };
  }
};
