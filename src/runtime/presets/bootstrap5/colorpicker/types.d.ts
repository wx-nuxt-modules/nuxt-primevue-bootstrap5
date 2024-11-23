import { ColorPickerProps, ColorPickerEmits, ColorPickerSlots } from 'primevue/colorpicker';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVDropdownSize } from '../../../types';

export interface BPVColorPickerProps extends ColorPickerProps {
  size?: BPVDropdownSize | undefined;
}

export * from 'primevue/colorpicker';
export default class BPVColorPicker extends ClassComponent<BPVColorPickerProps, ColorPickerSlots, ColorPickerEmits> {}
