import type { InputNumberPassThroughOptions } from 'primevue/inputnumber';
import { inArrayValidator } from '../../../utils/validators';
import { createRootClasses } from '../inputtext';

export const inputNumberPT = <InputNumberPassThroughOptions>{
  root: ({ props }) => {
    const { buttonLayout } = props;

    const currentButtonLayout = inArrayValidator<(typeof buttonLayout)[]>(
      buttonLayout,
      ['horizontal', 'stacked', 'vertical'],
      'stacked'
    );

    return { class: `input-group bpv-input-group bpv-input-group-${currentButtonLayout}` };
  },
  buttonGroup: { class: 'input-group-text bpv-input-group-text bpv-input-group-text-input-number' },
  input: {
    root: ({ parent, props }: any) => {
      return {
        class: createRootClasses({
          variant: props.variant,
          state: parent.attrs.state
        }),

        // Need for correct working float labels
        placeholder: ''
      };
    }
  }
  // incrementButton: {
  //   root: ({ instance }) => {
  //     if (typeof window !== 'undefined') {
  //       const el = instance.$el;
  //
  //       if (el) {
  //         const parent = el.parentElement;
  //
  //         if (parent && parent.dataset.pcSection === 'root') {
  //           parent.removeChild(el);
  //           parent.prepend(el);
  //         }
  //       }
  //     }
  //
  //     return {
  //       class: 'btn bpv-btn bpv-input-group-text-btn'
  //     };
  //   }
  // },
  // decrementButton: {
  //   root: {
  //     class: 'btn bpv-btn bpv-input-group-text-btn'
  //   }
  // }
};
