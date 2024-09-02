import { BadgeProps, BadgeSlots, BadgeEmits } from 'primevue/badge';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVSeverity, BPVBadgeSize } from '../../../types';

export interface BPVBadgeProps extends Omit<BadgeProps, 'size'> {
  severity?: BPVSeverity | undefined | null;
  size?: BPVBadgeSize | undefined | null;
  pill?: boolean;
  rounded?: boolean;
}

export * from 'primevue/badge';
export default class BPVBadge extends ClassComponent<BPVBadgeProps, BadgeSlots, BadgeEmits> {}
