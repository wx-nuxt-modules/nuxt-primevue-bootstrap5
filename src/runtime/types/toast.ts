import type { ToastMessageOptions } from 'primevue/toast';
import type { BPVSeverity } from './props';

export interface BPVToastMessageOptions extends Omit<ToastMessageOptions, 'severity'> {
  severity?: BPVSeverity | undefined;
}

export interface BPVToastServiceMethods {
  add(message: BPVToastMessageOptions): void;
  remove(message: BPVToastMessageOptions): void;
  removeGroup(group: string): void;
  removeAllGroups(): void;
}
