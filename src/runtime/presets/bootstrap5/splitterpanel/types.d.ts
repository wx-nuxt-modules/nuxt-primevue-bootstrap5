import type { SplitterPanelProps, SplitterPanelSlots, SplitterPanelEmits } from 'primevue/splitterpanel';
import type { ClassComponent } from 'primevue/ts-helpers';

export interface BPVSplitterPanelProps extends SplitterPanelProps {}

export * from 'primevue/splitterpanel';
export default class BPVConfirmDialog extends ClassComponent<
  BPVSplitterPanelProps,
  SplitterPanelSlots,
  SplitterPanelEmits
> {}
