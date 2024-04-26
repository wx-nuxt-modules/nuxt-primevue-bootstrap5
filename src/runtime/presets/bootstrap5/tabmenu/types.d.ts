import { TabMenuProps, TabMenuSlots, TabMenuEmits } from 'primevue/tabmenu';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVTabMenuProps extends TabMenuProps {
  pill?: boolean | undefined;
  underline?: boolean | undefined;
}

export default class BPVTabMenu extends ClassComponent<BPVTabMenuProps, TabMenuSlots, TabMenuEmits> {}
