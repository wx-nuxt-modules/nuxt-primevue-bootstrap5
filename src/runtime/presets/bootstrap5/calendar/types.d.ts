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

export * from 'primevue/calendar';

export type BPVCalendarPassThroughOptionType =
  | CalendarPassThroughAttributes
  | ((options: BPVCalendarPassThroughMethodOptions) => CalendarPassThroughAttributes | string)
  | string
  | null
  | undefined;

export interface BPVCalendarProps extends CalendarProps {
  disableSync?: boolean;
  monthsInitial?: Date[];
  weekdaysDayNamesLocaleKey?: 'dayNames' | 'dayNamesShort' | 'dayNamesMin';
}

export interface BPVCalendarContext extends CalendarContext {
  exactSelected: boolean;
}

export interface BPVCalendarPassThroughMethodOptions extends CalendarPassThroughMethodOptions {
  context: BPVCalendarContext;
}

export interface BPVCalendarPassThroughOptions extends CalendarPassThroughOptions {
  dayLabel: BPVCalendarPassThroughOptionType;
}

export default class BPVCalendar extends ClassComponent<BPVCalendarProps, CalendarSlots, CalendarEmits> {}
