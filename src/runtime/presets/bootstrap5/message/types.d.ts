import { MessageProps, MessageSlots, MessageEmits } from 'primevue/message';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVSeverity } from '../../../types';

export interface BPVMessageProps extends MessageProps {
  severity?: BPVSeverity | undefined | null;
}

export * from 'primevue/message';
export default class BPVMessage extends ClassComponent<BPVMessageProps, MessageSlots, MessageEmits> {}
