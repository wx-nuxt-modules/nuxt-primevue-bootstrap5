import type { BPVCalendarPassThroughOptions } from './types';

import { createRootClasses } from '../inputtext';

const sharedButtonPT = ({ ...rest }: any) => {
  const classes = ['btn bpv-btn', rest.class];

  return { class: classes };
};

// @ts-ignore
export const calendarPT = <BPVCalendarPassThroughOptions>{
  root: () => {
    const classes = ['bpv-calendar'];

    return { class: classes };
  },
  input: ({ attrs }) => {
    return createRootClasses({
      state: attrs.state
    });
  },
  header: () => {
    const classes = ['bpv-calendar-panel-header'];

    return { class: classes };
  },
  panel: () => {
    const classes = ['popover fade show bpv-calendar-panel'];

    return { class: classes };
  },
  title: () => {
    const classes = ['bpv-calendar-panel-header-title'];

    return { class: classes };
  },
  groupContainer: () => {
    const classes = ['popover-body bpv-calendar-panel-group'];

    return { class: classes };
  },
  group: () => {
    const classes = ['bpv-calendar-panel-group-item'];

    return { class: classes };
  },
  previousButton: ({ props }: any) => {
    return sharedButtonPT({ class: 'bpv-btn-pill', disabled: props.disabled });
  },
  nextButton: ({ props }: any) => {
    return sharedButtonPT({ class: 'bpv-btn-pill', disabled: props.disabled });
  },
  monthTitle: () => sharedButtonPT({}),
  yearTitle: () => sharedButtonPT({}),
  decadeTitle: () => sharedButtonPT({}),
  container: () => {
    const classes = ['table-responsive'];

    return { class: classes };
  },
  table: () => {
    const classes = ['table bpv-calendar-panel-table'];

    return { class: classes };
  },
  day: ({ context }) => {
    const classes = ['bpv-calendar-panel-table-cell'];

    return { class: classes };
  },
  dayLabel: ({ context, props }) => {
    const isSelected = context.selected && !context.disabled;
    const isExactSelected = context.exactSelected && !context.disabled;

    return sharedButtonPT({
      class: [
        'bpv-calendar-panel-label',
        isSelected && 'selected',
        isExactSelected && 'active',
        context.date.today && !context.selected && 'today',
        (context.disabled || props.disabled) && 'disabled'
      ]
    });
  },
  monthPicker: () => {
    const classes = ['bpv-calendar-panel-monthpicker'];

    return { class: classes };
  },
  yearPicker: () => {
    const classes = ['bpv-calendar-panel-yearpicker'];

    return { class: classes };
  },
  month: () => sharedButtonPT({ class: 'bpv-calendar-panel-label' }),
  year: () => sharedButtonPT({ class: 'bpv-calendar-panel-label' }),

  transition: {
    name: 'bpv-calendar'
  }
};
