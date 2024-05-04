import type { CalendarPassThroughOptions } from 'primevue/calendar';

import { createRootClasses } from '../inputtext';

const sharedButtonPT = ({ ...rest }: any) => {
  const classes = ['btn bpv-btn', rest.class];

  return { class: classes };
};

export const calendarPT = <CalendarPassThroughOptions>{
  root: () => {
    const classes = ['bpv-calendar'];

    return { class: classes };
  },
  input: () => createRootClasses({}),
  header: () => {
    const classes = ['bpv-calendar-panel-header'];

    return { class: classes };
  },
  panel: () => {
    const classes = ['popover fade show bpv-calendar-panel'];

    return { class: classes };
  },
  groupContainer: () => {
    const classes = ['popover-body'];

    return { class: classes };
  },
  previousButton: () => sharedButtonPT({ class: 'bpv-btn-pill' }),
  nextButton: () => sharedButtonPT({ class: 'bpv-btn-pill' }),
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
  dayLabel: ({ context }) =>
    sharedButtonPT({
      class: [
        'bpv-calendar-panel-label',
        context.selected && !context.disabled && 'btn-primary',
        context.date.today && !context.selected && 'bpv-btn-text-primary',
        context.disabled && 'disabled'
      ]
    }),
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
