import { MenuProps, MenuSlots, MenuEmits } from 'primevue/menu';
import { ClassComponent } from 'primevue/ts-helpers';

export * from 'primevue/menu';

export interface BPVMenuProps extends MenuProps {
  flush?: boolean | undefined;
}

export default class BPVMenu extends ClassComponent<BPVMenuProps, MenuSlots, MenuEmits> {}
