import type { DynamicDialogInstance, DynamicDialogOptions } from 'primevue/dynamicdialogoptions';
import type { ConfirmationOptions } from 'primevue/confirmationoptions';
import type { BPVDialogProps } from '../presets/bootstrap5/dialog/types';
import type { BPVButtonProps } from '../presets/bootstrap5/button/types';

export interface BPVDynamicDialogOptions extends Omit<DynamicDialogOptions, 'props'> {
  props?: BPVDialogProps;
}

export interface BPVDynamicDialogServiceMethods {
  open(content: any, options?: BPVDynamicDialogOptions): DynamicDialogInstance;
}

export interface BPVConfirmationOptions
  extends Pick<
    ConfirmationOptions,
    'header' | 'message' | 'rejectLabel' | 'acceptLabel' | 'accept' | 'reject' | 'group' | 'onShow' | 'onHide'
  > {
  acceptSeverity?: BPVButtonProps['severity'];
  rejectSeverity?: BPVButtonProps['severity'];
}

export interface BPVConfirmationServiceMethods {
  require(option: BPVConfirmationOptions): void;
  close(): void;
}
