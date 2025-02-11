import { ProgressBarProps, ProgressBarEmits, ProgressBarSlots } from 'primevue/progressbar';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVSeverity } from '../../../types';

export interface BPVProgressBarProps extends ProgressBarProps {
  severity?: BPVSeverity;
  label?: string | undefined;
  striped?: boolean | undefined;
  animated?: boolean | undefined;
}

export * from 'primevue/progressbar';
export default class BPVProgressBar extends ClassComponent<BPVProgressBarProps, ProgressBarSlots, ProgressBarEmits> {}
