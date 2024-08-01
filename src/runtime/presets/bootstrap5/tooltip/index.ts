import type { TooltipDirectivePassThroughOptions } from 'primevue/tooltip';

export const tooltipPT = <TooltipDirectivePassThroughOptions>{
  root: ({ context }) => {
    const classes = ['bpv-tooltip tooltip show bpv-fade-in'];

    return { class: classes };
  },
  text: () => {
    const classes = ['tooltip-inner'];

    return { class: classes };
  },
  arrow: () => {
    const classes = ['tooltip-arrow'];

    return { class: classes };
  }
};
