import type { ConfirmDialogProps, ConfirmDialogSlots, ConfirmDialogEmits } from 'primevue/confirmdialog';
import type { ClassComponent } from 'primevue/ts-helpers';
import type { BPVDialogProps } from '../dialog/types';

export interface BPVConfirmDialogProps extends Omit<ConfirmDialogProps, 'breakpoints'> {
  size?: BPVDialogProps['size'];
  dialogScrollable?: BPVDialogProps['dialogScrollable'];
}

export * from 'primevue/dialog';
export default class BPVConfirmDialog extends ClassComponent<
  BPVConfirmDialogProps,
  ConfirmDialogSlots,
  ConfirmDialogEmits
> {}
