import { ButtonProps, ButtonSlots, ButtonEmits } from 'primevue/button';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVSeverity, BPVButtonSize } from '../../../types';

export interface BPVButtonProps extends ButtonProps {
  block?: boolean;
  severity?: BPVSeverity | undefined | null;
  badgeSeverity?: BPVSeverity | undefined | null;
  size?: BPVButtonSize | undefined | null;
}

export * from 'primevue/button';
export default class BPVButton extends ClassComponent<BPVButtonProps, ButtonSlots, ButtonEmits> {}
