import type {
  CalendarProps,
  CalendarSlots,
  CalendarEmits,
  CalendarContext,
  CalendarPassThroughOptions,
  CalendarPassThroughMethodOptions,
  CalendarPassThroughAttributes
} from 'primevue/calendar';
import { ClassComponent } from 'primevue/ts-helpers';
import { VNode } from 'vue';

export * from 'primevue/calendar';

export type BPVCalendarPassThroughOptionType =
  | CalendarPassThroughAttributes
  | ((options: BPVCalendarPassThroughMethodOptions) => CalendarPassThroughAttributes | string)
  | string
  | null
  | undefined;

export interface BPVCalendarProps extends Omit<CalendarProps, 'invalid'> {
  disableSync?: boolean;
  monthsInitial?: Date[];
  weekdaysDayNamesLocaleKey?: 'dayNames' | 'dayNamesShort' | 'dayNamesMin';
  state?: 'valid' | 'invalid' | undefined;
  inputMask?: boolean;
  noFluidPanel?: boolean;
}

export interface BPVCalendarContext extends CalendarContext {
  exactSelected: boolean;
}

export interface BPVCalendarPassThroughMethodOptions extends CalendarPassThroughMethodOptions {
  context: BPVCalendarContext;
}

export interface BPVCalendarPassThroughOptions extends CalendarPassThroughOptions {
  dayLabel?: BPVCalendarPassThroughOptionType;
}

export interface BPVCalendarSlots extends CalendarSlots {
  timepicker(slotProps: { attrs: { class: any; [k: string]: any } }): VNode[];
}

export default class BPVCalendar extends ClassComponent<BPVCalendarProps, BPVCalendarSlots, CalendarEmits> {}
