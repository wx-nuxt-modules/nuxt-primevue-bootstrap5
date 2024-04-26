import { TabViewProps, TabViewSlots, TabViewEmits } from 'primevue/tabview';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVTabViewProps extends TabViewProps {}

export default class BPVTabView extends ClassComponent<BPVTabViewProps, TabViewSlots, TabViewEmits> {}
