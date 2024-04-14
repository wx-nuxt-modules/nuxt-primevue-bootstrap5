import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { BPVInputTextProps } from './types';
import { BPV_FORM_STATE, BPV_BUTTON_SIZE } from '../../../constants';
import { inArrayValidator } from '../../../utils/validators';

interface CreateRootClassesOptions {
  variant?: BPVInputTextProps['variant'];
  state?: BPVInputTextProps['state'];
  size?: BPVInputTextProps['size'];
  plainText?: BPVInputTextProps['plainText'];
}

export const createRootClasses = (options: CreateRootClassesOptions = {}) => {
  const currentVariant = inArrayValidator<(typeof options.variant)[]>(options.variant, ['filled', 'outlined']);
  const currentState = inArrayValidator(options.state, BPV_FORM_STATE);
  const currentSize = inArrayValidator(options.size, BPV_BUTTON_SIZE);

  return [
    'form-control',
    'bpv-form-control',
    currentVariant && `bpv-form-control-${currentVariant}`,
    currentState && `is-${currentState}`,
    currentSize && `form-control-${currentSize}`,
    options.plainText && `form-control-plaintext`
  ];
};

export const inputTextPT = <InputTextPassThroughOptions>{
  root: ({ props, attrs }: any) => {
    return {
      class: createRootClasses({
        variant: props.variant,
        state: attrs.state,
        size: props.size,
        plainText: attrs['plain-text'] !== undefined || attrs['plainText'] !== undefined
      }),

      // Need for correct working float labels
      placeholder: ''
    };
  }
};
