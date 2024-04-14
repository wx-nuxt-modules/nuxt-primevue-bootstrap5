import { InputNumberProps, InputNumberSlots, InputNumberEmits } from 'primevue/inputnumber';
import { ClassComponent } from 'primevue/ts-helpers';
import { BPVFormState, BPVButtonSize } from '../../../types';

export interface BPVInputNumberProps extends Omit<InputNumberProps, 'invalid'> {
  state?: BPVFormState | null | undefined;
  size?: BPVButtonSize | null | undefined;
  readonly?: boolean | null | undefined;
  buttonLayout?: 'stacked' | 'horizontal' | null | undefined;

  /** @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay */
  currencyDisplay?: 'code' | 'symbol' | undefined;
}

export default class BPVInputNumber extends ClassComponent<BPVInputNumberProps, InputNumberSlots, InputNumberEmits> {}
