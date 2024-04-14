import { BPV_FORM_STATE, BPV_BUTTON_SIZE } from "../../../constants/index.mjs";
import { inArrayValidator } from "../../../utils/validators.mjs";
export const createRootClasses = (options = {}) => {
  const currentVariant = inArrayValidator(options.variant, ["filled", "outlined"]);
  const currentState = inArrayValidator(options.state, BPV_FORM_STATE);
  const currentSize = inArrayValidator(options.size, BPV_BUTTON_SIZE);
  return [
    "form-control",
    "bpv-form-control",
    currentVariant && `bpv-form-control-${currentVariant}`,
    currentState && `is-${currentState}`,
    currentSize && `form-control-${currentSize}`,
    options.plainText && `form-control-plaintext`
  ];
};
export const inputTextPT = {
  root: ({ props, attrs }) => {
    return {
      class: createRootClasses({
        variant: props.variant,
        state: attrs.state,
        size: props.size,
        plainText: attrs["plain-text"] !== void 0 || attrs["plainText"] !== void 0
      }),
      // Need for correct working float labels
      placeholder: ""
    };
  }
};
