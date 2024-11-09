import type { BPVDynamicDialogServiceMethods } from '../types';

import { useDialog } from 'primevue/usedialog';

export function useBpvDialog() {
  return useDialog() as BPVDynamicDialogServiceMethods;
}
