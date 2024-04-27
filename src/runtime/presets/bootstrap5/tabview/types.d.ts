import { TabViewProps, TabViewSlots, TabViewEmits } from 'primevue/tabview';
import { ClassComponent } from 'primevue/ts-helpers';

import { BPVTabMenuProps } from '../tabmenu/types';

export interface BPVTabViewProps extends TabViewProps {
  navPill: BPVTabMenuProps['pill'];
  navUnderline: BPVTabMenuProps['underline'];
}

export default class BPVTabView extends ClassComponent<BPVTabViewProps, TabViewSlots, TabViewEmits> {}
