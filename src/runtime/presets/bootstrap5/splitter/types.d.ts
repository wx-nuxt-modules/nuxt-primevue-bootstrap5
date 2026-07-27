import type { SplitterProps, SplitterSlots, SplitterEmits } from 'primevue/splitter';
import type { ClassComponent } from 'primevue/ts-helpers';

export interface BPVSplitterProps extends SplitterProps {}

export * from 'primevue/splitter';
export default class BPVConfirmDialog extends ClassComponent<BPVSplitterProps, SplitterSlots, SplitterEmits> {}
