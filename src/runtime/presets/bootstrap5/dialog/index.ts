import type { DialogPassThroughOptions } from 'primevue/dialog';

import { inArrayValidator } from '../../../utils/validators';
import { BPV_DIALOG_SIZE } from '../../../constants';

export const dialogPT = <DialogPassThroughOptions>{
  mask: ({ props }) => {
    return {
      class: ['modal bpv-modal', props.modal === true && 'bpv-modal-backdrop']
    };
  },
  root: ({ attrs }: any) => {
    const currentSize = inArrayValidator(attrs.size, BPV_DIALOG_SIZE);
    const isDialogScrollable = inArrayValidator(
      attrs.dialogScrollable || attrs['dialog-scrollable'],
      [true, ''],
      false
    );

    return {
      class: [
        'modal-dialog fade show modal-content bpv-modal-dialog',
        currentSize && `modal-${currentSize}`,
        isDialogScrollable && `modal-dialog-scrollable`
      ]
    };
  },
  content: { class: 'modal-body bpv-modal-body' },
  header: { class: 'modal-header bpv-modal-header' },
  footer: { class: 'modal-footer bpv-modal-footer' },
  title: { class: 'modal-title bpv-modal-title' },
  icons: { class: 'bpv-modal-icons' },
  closeButton: { class: 'btn-close' },
  closeButtonIcon: { class: 'd-none' },

  transition: {
    name: 'bpv-modal-dialog'
  }
};
