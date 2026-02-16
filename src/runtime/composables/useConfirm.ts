import type { BPVConfirmationOptions, BPVConfirmationServiceMethods } from '../types';

import { useConfirm } from 'primevue/useconfirm';

export function useBpvConfirm(): BPVConfirmationServiceMethods {
  const base = useConfirm();

  return {
    require(option: BPVConfirmationOptions) {
      base.require({
        ...option,
        acceptClass: option.acceptSeverity ? `btn-${option.acceptSeverity}` : 'btn-success',
        rejectClass: option.rejectSeverity ? `btn-${option.rejectSeverity}` : undefined
      });
    },
    close() {
      base.close();
    }
  };
}
