import { DialogProps, DialogSlots, DialogEmits } from 'primevue/dialog';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVDialogSize } from '../../../types';

export interface BPVDialogProps extends Omit<DialogProps, 'breakpoints'> {
  size?: BPVDialogSize | undefined;
  dialogScrollable?: boolean | undefined;
}

export * from 'primevue/dialog';
export default class BPVDialog extends ClassComponent<BPVDialogProps, DialogSlots, DialogEmits> {}
