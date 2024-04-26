import { TabPanelProps, TabPanelSlots, TabPanelEmits } from 'primevue/tabpanel';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVTabPanelProps extends TabPanelProps {}

export default class BPVTabPanel extends ClassComponent<BPVTabPanelProps, TabPanelSlots, TabPanelEmits> {}
