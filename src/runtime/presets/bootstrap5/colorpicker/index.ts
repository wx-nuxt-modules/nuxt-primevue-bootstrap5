import type { ColorPickerPassThroughOptions } from 'primevue/colorpicker';

import { createRootClasses } from '../inputtext';
import { createOverlaypanelRoot, createOverlaypanelTransition } from '../overlaypanel';

export const colorpickerPT: Partial<ColorPickerPassThroughOptions> = {
  root: { class: 'bpv-colorpicker' },
  input: ({ attrs }) => {
    return createRootClasses({
      plainText: true,
      size: attrs.size
    });
  },
  panel: ({ props }) => {
    const { class: baseClass } = createOverlaypanelRoot();

    return {
      class: [baseClass, 'bpv-colorpicker-panel', !props.inline && 'bpv-colorpicker-panel-overlay']
    };
  },
  hue: { class: 'bpv-colorpicker-hue' },
  hueHandle: { class: 'bpv-colorpicker-hue-handle' },
  color: { class: 'bpv-colorpicker-color' },
  colorHandle: { class: 'bpv-colorpicker-color-handle' },
  selector: { class: 'bpv-colorpicker-selector' },
  content: { class: 'bpv-colorpicker-panel-content' },
  transition: createOverlaypanelTransition()
};
