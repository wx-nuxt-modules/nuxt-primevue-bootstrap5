import type { TextareaPassThroughOptions } from 'primevue/textarea';

import { createRootClasses } from '../inputtext';

export const textareaPT = <TextareaPassThroughOptions>{
  root: ({ props, attrs }: any) => {
    return {
      class: createRootClasses({
        variant: props.variant,
        state: attrs.state,
        size: props.size,
        plainText: attrs['plain-text'] !== undefined || attrs['plainText'] !== undefined
      })
    };
  }
};
