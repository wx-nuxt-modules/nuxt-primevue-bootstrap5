import { TextareaProps, TextareaSlots, TextareaEmits } from 'primevue/textarea';
import { ClassComponent } from 'primevue/ts-helpers';

export interface BPVTextareaProps extends Omit<TextareaProps, 'cols'> {}

export default class BPVTextarea extends ClassComponent<BPVTextareaProps, TextareaSlots, TextareaEmits> {}
