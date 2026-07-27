import type { SplitterPassThroughOptions } from 'primevue/splitter';

export const splitterPT = <SplitterPassThroughOptions>{
  root: ({ props }) => {
    return { class: ['bpv-splitter', `bpv-splitter-${props.layout}`] };
  },
  gutter: () => {
    return { class: 'bpv-splitter-gutter' };
  }
};
