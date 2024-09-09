import { SidebarProps, SidebarSlots, SidebarEmits } from 'primevue/sidebar';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVSidebarProps extends SidebarProps {
  position?: 'left' | 'right' | 'top' | 'bottom' | undefined;
}

export * from 'primevue/sidebar';
export default class BPVSidebar extends ClassComponent<BPVSidebarProps, SidebarSlots, SidebarEmits> {}
