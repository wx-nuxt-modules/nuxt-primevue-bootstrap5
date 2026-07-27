import type { SplitterPanelPassThroughOptions } from 'primevue/splitterpanel';

export const splitterpanelPT = <SplitterPanelPassThroughOptions>{
  root: () => {
    return { class: 'bpv-splitter-panel' };
  }
};
