import type { SplitterPanelPassThroughOptions } from 'primevue/splitterpanel';

export const splitterPanelPT = <SplitterPanelPassThroughOptions>{
  root: () => {
    return { class: 'bpv-splitter-panel' };
  }
};
