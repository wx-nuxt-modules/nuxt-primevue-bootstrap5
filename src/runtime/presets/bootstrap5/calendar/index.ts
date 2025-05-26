import type { BPVCalendarPassThroughOptions } from './types';

import { createRootClasses } from '../inputtext';
import { buttonPTRoot } from '../button';
import { isVueTruthy, isVueFalsy } from '../../../utils/validators';

// @ts-ignore
export const calendarPT = <BPVCalendarPassThroughOptions>{
  root: { class: 'bpv-calendar' },
  input: ({ attrs }) => {
    return createRootClasses({
      state: attrs.state
    });
  },
  header: { class: 'bpv-calendar-panel-header' },
  panel: ({ props }) => {
    return {
      class: [
        'bpv-calendar-panel',
        isVueFalsy(props.inline) && 'popover fade show',
        isVueTruthy(props.inline) && 'bpv-calendar-panel-inline'
      ]
    };
  },
  title: { class: 'bpv-calendar-panel-header-title' },
  groupContainer: { class: 'popover-body bpv-calendar-panel-group' },
  group: { class: 'bpv-calendar-panel-group-item' },
  previousButton: ({ props }: any) => {
    return buttonPTRoot({
      rounded: true,
      disabled: props.disabled
    });
  },
  nextButton: ({ props }: any) => {
    return buttonPTRoot({
      rounded: true,
      disabled: props.disabled
    });
  },
  monthTitle: buttonPTRoot({}),
  yearTitle: buttonPTRoot({}),
  decadeTitle: buttonPTRoot({}),
  container: { class: 'table-responsive' },
  table: { class: 'table bpv-calendar-panel-table' },
  day: { class: 'bpv-calendar-panel-table-cell' },
  dayLabel: ({ context, props }) => {
    const buttonPT = buttonPTRoot({
      disabled: context.disabled || props.disabled
    });

    const isSelected = context.selected && !context.disabled;
    const isExactSelected = context.exactSelected && !context.disabled;
    const isOtherMonth = context.date.otherMonth && !context.disabled;

    return {
      ...buttonPT,
      class: [
        buttonPT.class,
        'bpv-calendar-panel-label',
        isSelected && 'selected',
        isExactSelected && 'active',
        context.date.today && !context.selected && 'today',
        isOtherMonth && 'other-month'
      ]
    };
  },
  monthPicker: { class: 'bpv-calendar-panel-monthpicker' },
  yearPicker: { class: 'bpv-calendar-panel-yearpicker' },
  month: ({ context, props }) => {
    const buttonPT = buttonPTRoot({
      disabled: context.disabled || props.disabled
    });

    return {
      ...buttonPT,
      class: [buttonPT.class, 'bpv-calendar-panel-label']
    };
  },
  year: ({ context, props }) => {
    const buttonPT = buttonPTRoot({
      disabled: context.disabled || props.disabled
    });

    return {
      ...buttonPT,
      class: [buttonPT.class, 'bpv-calendar-panel-label']
    };
  },
  buttonbar: { class: 'bpv-calendar-panel-buttonbar' },
  timePicker: {
    class: 'popover-body bpv-calendar-timepicker'
  },
  hourPicker: {
    class: 'bpv-calendar-timepicker-item bpv-calendar-timepicker-hourpicker'
  },
  minutePicker: {
    class: 'bpv-calendar-timepicker-item bpv-calendar-timepicker-minutepicker'
  },
  ampmPicker: {
    class: 'bpv-calendar-timepicker-item bpv-calendar-timepicker-ampmpicker'
  },
  secondPicker: {
    class: 'bpv-calendar-timepicker-item bpv-calendar-timepicker-secondpicker'
  },
  todayButton: {
    root: buttonPTRoot({ size: 'sm', severity: 'primary' })
  },
  clearButton: {
    root: buttonPTRoot({ size: 'sm', severity: 'secondary', outlined: true })
  },
  transition: {
    name: 'bpv-calendar'
  }
};
