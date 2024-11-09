import type { DynamicDialogInstance, DynamicDialogOptions } from 'primevue/dynamicdialogoptions';
import type { BPVDialogProps } from '../presets/bootstrap5/dialog/types';

export interface BPVDynamicDialogOptions extends Omit<DynamicDialogOptions, 'props'> {
  props?: BPVDialogProps;
}

export interface BPVDynamicDialogServiceMethods {
  open(content: any, options?: BPVDynamicDialogOptions): DynamicDialogInstance;
}
