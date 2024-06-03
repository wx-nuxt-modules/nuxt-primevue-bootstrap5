<script lang="ts">
import type { BPVCalendarProps } from '../../presets/bootstrap5/calendar/types';

import Calendar from 'primevue/calendar/Calendar.vue';
import { defineComponent, type PropType } from 'vue';

interface DateMeta {
  month: number;
  year: number;
  dates: number;
  weekNumbers: number;
}

export default defineComponent({
  name: 'Calendar',
  extends: Calendar,
  props: {
    disableSync: {
      type: Boolean as PropType<NonNullable<BPVCalendarProps['disableSync']>>,
      default: false,
      required: false
    },
    monthsInitial: {
      type: Array as PropType<NonNullable<BPVCalendarProps['monthsInitial']>>,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      monthsState: [] as Date[]
    };
  },
  computed: {
    months() {
      if (!this.disableSync) return Calendar.computed!.months.call(this);

      let months = [];

      if (!Array.isArray(this.monthsState)) return [];
      if (this.monthsState.length !== this.numberOfMonths) return [];

      for (let i = 0; i < this.numberOfMonths; i++) {
        const dateFromState = this.monthsState[i];

        let month = dateFromState.getMonth();
        let year = dateFromState.getFullYear();

        if (month > 11) {
          month = (month % 11) - 1;
          year = year + 1;
        }

        let dates = [];
        let firstDay = this.getFirstDayOfMonthIndex(month, year);
        let daysLength = this.getDaysCountInMonth(month, year);
        let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        let dayNo = 1;
        let today = new Date();
        let weekNumbers = [];
        let monthRows = Math.ceil((daysLength + firstDay) / 7);

        for (let i = 0; i < monthRows; i++) {
          let week = [];

          if (i == 0) {
            for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
              let prev = this.getPreviousMonthAndYear(month, year);

              week.push({
                day: j,
                month: prev.month,
                year: prev.year,
                otherMonth: true,
                today: this.isToday(today, j, prev.month, prev.year),
                selectable: this.isSelectable(j, prev.month, prev.year, true)
              });
            }

            let remainingDaysLength = 7 - week.length;

            for (let j = 0; j < remainingDaysLength; j++) {
              week.push({
                day: dayNo,
                month: month,
                year: year,
                today: this.isToday(today, dayNo, month, year),
                selectable: this.isSelectable(dayNo, month, year, false)
              });
              dayNo++;
            }
          } else {
            for (let j = 0; j < 7; j++) {
              if (dayNo > daysLength) {
                let next = this.getNextMonthAndYear(month, year);

                week.push({
                  day: dayNo - daysLength,
                  month: next.month,
                  year: next.year,
                  otherMonth: true,
                  today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                  selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                });
              } else {
                week.push({
                  day: dayNo,
                  month: month,
                  year: year,
                  today: this.isToday(today, dayNo, month, year),
                  selectable: this.isSelectable(dayNo, month, year, false)
                });
              }

              dayNo++;
            }
          }

          if (this.showWeek) {
            weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
          }

          dates.push(week);
        }

        months.push({
          month: month,
          year: year,
          dates: dates,
          weekNumbers: weekNumbers
        });
      }

      return months;
    }
  },
  methods: {
    makeMonthsState(): void {
      if (!this.disableSync) return;
      if (this.numberOfMonths === 1) return;

      const months: Date[] = [];

      for (let i = 0; i < this.numberOfMonths; i++) {
        const initialFinded = this.monthsInitial[i];

        if (!initialFinded) {
          if (i === 0) {
            const current = (months[i] = new Date());
            current.setDate(1);
          } else {
            const prevDate = new Date(months[i - 1]);
            prevDate.setMonth(prevDate.getMonth() + 1);

            months[i] = new Date(prevDate);
          }
        } else {
          months[i] = initialFinded;
        }
      }

      this.monthsState = months.slice().sort((a, b) => {
        if (a.getTime() > b.getTime()) return 1;
        if (a.getTime() < b.getTime()) return -1;
        return 0;
      });
    },

    isShowPreviousButton(groupIndex: number): boolean {
      if (this.disableSync) return true;

      return this.showOtherMonths ? groupIndex === 0 : false;
    },
    isShowNextButton(groupIndex: number): boolean {
      if (this.disableSync) return true;

      if (!this.showOtherMonths) return false;

      return this.numberOfMonths === 1 ? true : groupIndex === this.numberOfMonths - 1;
    },
    isExactSelected(dateMeta: DateMeta): boolean {
      if (!this.isSelected(dateMeta)) return false;

      if (this.isRangeSelection()) {
        if (this.modelValue[1]) {
          return this.isDateEquals(this.modelValue[0], dateMeta) || this.isDateEquals(this.modelValue[1], dateMeta);
        }
      }

      return true;
    },

    onPrevButtonClick(event: MouseEvent, groupIndex: number) {
      if (this.showOtherMonths) {
        this.navigationState = { backward: true, button: true };
        this.navBackward(event, groupIndex);
      }
    },
    onNextButtonClick(event: MouseEvent, groupIndex: number) {
      if (this.showOtherMonths) {
        this.navigationState = { backward: false, button: true };
        this.navForward(event, groupIndex);
      }
    },
    navBackward(event: MouseEvent, groupIndex: number) {
      if (!this.disableSync || this.numberOfMonths === 1) return Calendar.methods!.navBackward.call(this, event);

      event.preventDefault();

      if (!this.isEnabled()) {
        return;
      }

      // TODO: Доделать все варианты currentView
      // if (this.currentView === 'month') {
      //   this.decrementYear();
      //   this.$emit('year-change', { month: this.currentMonth, year: this.currentYear, index: groupIndex });
      // } else if (this.currentView === 'year') {
      //   this.decrementDecade();
      // } else {
      //   if (event.shiftKey) {
      //     this.decrementYear();
      //   } else {
      //     if (this.currentMonth === 0) {
      //       this.currentMonth = 11;
      //       this.decrementYear();
      //     } else {
      //       this.currentMonth--;
      //     }
      //
      //     this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear });
      //   }
      // }

      if (['month', 'year'].includes(this.currentView)) return;

      const newDate = new Date(this.monthsState[groupIndex]);
      const prevDate = this.monthsState[groupIndex - 1] && {
        initial: new Date(this.monthsState[groupIndex - 1]),
        current: new Date(this.monthsState[groupIndex - 1]),
        get isCompared() {
          return this.initial.getTime() === this.current.getTime();
        }
      };

      // TODO: Реализовать обновление года через shiftKey
      // if (event.shiftKey) {
      //   newDate.setFullYear(newDate.getFullYear() - 1);
      // } else {
      //   newDate.setMonth(newDate.getMonth() - 1);
      // }

      newDate.setMonth(newDate.getMonth() - 1);

      if (prevDate) {
        if (prevDate.initial.getMonth() >= newDate.getMonth()) {
          prevDate.current.setMonth(newDate.getMonth() - 1);
        }

        if (!prevDate.isCompared) {
          this.monthsState[groupIndex - 1] = prevDate.current;
        }
      }

      this.monthsState[groupIndex] = newDate;
    },
    navForward(event: MouseEvent, groupIndex: number) {
      if (!this.disableSync || this.numberOfMonths === 1) return Calendar.methods!.navForward.call(this, event);

      event.preventDefault();

      if (!this.isEnabled()) {
        return;
      }

      // TODO: Доделать все варианты currentView
      // if (this.currentView === 'month') {
      //   this.incrementYear();
      //   this.$emit('year-change', { month: this.currentMonth, year: this.currentYear });
      // } else if (this.currentView === 'year') {
      //   this.incrementDecade();
      // } else {
      //   if (event.shiftKey) {
      //     this.incrementYear();
      //   } else {
      //     if (this.currentMonth === 11) {
      //       this.currentMonth = 0;
      //       this.incrementYear();
      //     } else {
      //       this.currentMonth++;
      //     }
      //
      //     this.$emit('month-change', { month: this.currentMonth + 1, year: this.currentYear });
      //   }
      // }

      if (['month', 'year'].includes(this.currentView)) return;

      const newDate = new Date(this.monthsState[groupIndex]);
      const nextDate = this.monthsState[groupIndex + 1] && {
        initial: new Date(this.monthsState[groupIndex + 1]),
        current: new Date(this.monthsState[groupIndex + 1]),
        get isCompared() {
          return this.initial.getTime() === this.current.getTime();
        }
      };

      // TODO: Реализовать обновление года через shiftKey
      // if (event.shiftKey) {
      //   newDate.setFullYear(newDate.getFullYear() + 1);
      // } else {
      //   newDate.setMonth(newDate.getMonth() + 1);
      // }

      newDate.setMonth(newDate.getMonth() + 1);

      if (nextDate) {
        if (nextDate.initial.getMonth() <= newDate.getMonth()) {
          nextDate.current.setMonth(newDate.getMonth() + 1);
        }

        if (!nextDate.isCompared) {
          this.monthsState[groupIndex + 1] = nextDate.current;
        }
      }

      this.monthsState[groupIndex] = newDate;
    }
  },
  watch: {
    monthsInitial: {
      handler() {
        this.makeMonthsState();
      },
      immediate: true
    }
  }
});
</script>

<template>
  <span ref="container" :id="d_id" :class="cx('root')" :style="sx('root')" v-bind="ptm('root')">
    <input
      v-if="!inline"
      :ref="inputRef"
      :id="inputId"
      type="text"
      role="combobox"
      :class="[cx('input'), inputClass]"
      :style="inputStyle"
      :placeholder="placeholder"
      autocomplete="off"
      aria-autocomplete="none"
      aria-haspopup="dialog"
      :aria-expanded="overlayVisible"
      :aria-controls="panelId"
      :aria-labelledby="ariaLabelledby"
      :aria-label="ariaLabel"
      inputmode="none"
      :disabled="disabled"
      :readonly="!manualInput || readonly"
      :tabindex="0"
      @input="onInput"
      @click="onInputClick"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeyDown"
      v-bind="{ ...inputProps, ...ptm('input') }"
    />
    <CalendarButton
      v-if="showIcon && iconDisplay === 'button'"
      :class="cx('dropdownButton')"
      :disabled="disabled"
      @click="onButtonClick"
      type="button"
      :aria-label="$primevue.config.locale.chooseDate"
      aria-haspopup="dialog"
      :aria-expanded="overlayVisible"
      :aria-controls="panelId"
      :unstyled="unstyled"
      :pt="ptm('dropdownButton')"
    >
      <template #icon>
        <slot name="dropdownicon" :class="icon">
          <component
            :is="icon ? 'span' : 'CalendarIcon'"
            :class="icon"
            v-bind="ptm('dropdownButton')['icon']"
            data-pc-section="dropdownicon"
          />
        </slot>
      </template>
    </CalendarButton>
    <template v-else-if="showIcon && iconDisplay === 'input'">
      <slot name="inputicon" :class="cx('inputIcon')" :clickCallback="onButtonClick">
        <component
          :is="icon ? 'i' : 'CalendarIcon'"
          :class="[icon, cx('inputIcon')]"
          @click="onButtonClick"
          v-bind="ptm('inputicon')"
        />
      </slot>
    </template>
    <Portal :appendTo="appendTo" :disabled="inline">
      <transition
        name="p-connected-overlay"
        @enter="onOverlayEnter($event)"
        @after-enter="onOverlayEnterComplete"
        @after-leave="onOverlayAfterLeave"
        @leave="onOverlayLeave"
        v-bind="ptm('transition')"
      >
        <div
          v-if="inline || overlayVisible"
          :ref="overlayRef"
          :id="panelId"
          :class="[cx('panel'), panelClass]"
          :style="panelStyle"
          :role="inline ? null : 'dialog'"
          :aria-modal="inline ? null : 'true'"
          :aria-label="$primevue.config.locale.chooseDate"
          @click="onOverlayClick"
          @keydown="onOverlayKeyDown"
          @mouseup="onOverlayMouseUp"
          v-bind="{ ...panelProps, ...ptm('panel') }"
        >
          <template v-if="!timeOnly">
            <div :class="cx('groupContainer')" v-bind="ptm('groupContainer')">
              <div
                v-for="(month, groupIndex) of months"
                :key="month.month + month.year"
                :class="cx('group')"
                v-bind="ptm('group')"
              >
                <div :class="cx('header')" v-bind="ptm('header')">
                  <slot name="header"></slot>
                  <button
                    v-show="isShowPreviousButton(groupIndex)"
                    :ref="previousButtonRef"
                    v-ripple
                    :class="cx('previousButton')"
                    @click="onPrevButtonClick($event, groupIndex)"
                    type="button"
                    @keydown="onContainerButtonKeydown"
                    :disabled="disabled"
                    :aria-label="
                      currentView === 'year'
                        ? $primevue.config.locale.prevDecade
                        : currentView === 'month'
                          ? $primevue.config.locale.prevYear
                          : $primevue.config.locale.prevMonth
                    "
                    v-bind="ptm('previousButton')"
                    data-pc-group-section="navigator"
                  >
                    <slot name="previousicon" :class="cx('previousIcon')">
                      <component
                        :is="previousIcon ? 'span' : 'ChevronLeftIcon'"
                        :class="[cx('previousIcon'), previousIcon]"
                        v-bind="ptm('previousIcon')"
                      />
                    </slot>
                  </button>
                  <div :class="cx('title')" v-bind="ptm('title')">
                    <template v-if="$primevue.config.locale.showMonthAfterYear">
                      <button
                        v-if="currentView !== 'year'"
                        type="button"
                        @click="switchToYearView"
                        @keydown="onContainerButtonKeydown"
                        :class="cx('yearTitle')"
                        :disabled="switchViewButtonDisabled"
                        :aria-label="$primevue.config.locale.chooseYear"
                        v-bind="ptm('yearTitle')"
                        data-pc-group-section="view"
                      >
                        {{ getYear(month) }}
                      </button>
                      <button
                        v-if="currentView === 'date'"
                        type="button"
                        @click="switchToMonthView"
                        @keydown="onContainerButtonKeydown"
                        :class="cx('monthTitle')"
                        :disabled="switchViewButtonDisabled"
                        :aria-label="$primevue.config.locale.chooseMonth"
                        v-bind="ptm('monthTitle')"
                        data-pc-group-section="view"
                      >
                        {{ getMonthName(month.month) }}
                      </button>
                    </template>
                    <template v-else>
                      <button
                        v-if="currentView === 'date'"
                        type="button"
                        @click="switchToMonthView"
                        @keydown="onContainerButtonKeydown"
                        :class="cx('monthTitle')"
                        :disabled="switchViewButtonDisabled"
                        :aria-label="$primevue.config.locale.chooseMonth"
                        v-bind="ptm('monthTitle')"
                        data-pc-group-section="view"
                      >
                        {{ getMonthName(month.month) }}
                      </button>
                      <button
                        v-if="currentView !== 'year'"
                        type="button"
                        @click="switchToYearView"
                        @keydown="onContainerButtonKeydown"
                        :class="cx('yearTitle')"
                        :disabled="switchViewButtonDisabled"
                        :aria-label="$primevue.config.locale.chooseYear"
                        v-bind="ptm('yearTitle')"
                        data-pc-group-section="view"
                      >
                        {{ getYear(month) }}
                      </button>
                    </template>
                    <span v-if="currentView === 'year'" :class="cx('decadeTitle')" v-bind="ptm('decadeTitle')">
                      <slot name="decade" :years="yearPickerValues">
                        {{ yearPickerValues[0].value }} - {{ yearPickerValues[yearPickerValues.length - 1].value }}
                      </slot>
                    </span>
                  </div>
                  <button
                    v-show="isShowNextButton(groupIndex)"
                    :ref="nextButtonRef"
                    v-ripple
                    :class="cx('nextButton')"
                    @click="onNextButtonClick($event, groupIndex)"
                    type="button"
                    @keydown="onContainerButtonKeydown"
                    :disabled="disabled"
                    :aria-label="
                      currentView === 'year'
                        ? $primevue.config.locale.nextDecade
                        : currentView === 'month'
                          ? $primevue.config.locale.nextYear
                          : $primevue.config.locale.nextMonth
                    "
                    v-bind="ptm('nextButton')"
                    data-pc-group-section="navigator"
                  >
                    <slot name="nexticon" :class="cx('nextIcon')">
                      <component
                        :is="nextIcon ? 'span' : 'ChevronRightIcon'"
                        :class="[cx('nextIcon'), nextIcon]"
                        v-bind="ptm('nextIcon')"
                      />
                    </slot>
                  </button>
                </div>
                <div v-if="currentView === 'date'" :class="cx('container')" v-bind="ptm('container')">
                  <table :class="cx('table')" role="grid" v-bind="ptm('table')">
                    <thead v-bind="ptm('tableHeader')">
                      <tr v-bind="ptm('tableHeaderRow')">
                        <th
                          v-if="showWeek"
                          scope="col"
                          :class="cx('weekHeader')"
                          v-bind="ptm('weekHeader', { context: { disabled: showWeek } })"
                          :data-p-disabled="showWeek"
                          data-pc-group-section="tableheadercell"
                        >
                          <slot name="weekheaderlabel">
                            <span
                              v-bind="ptm('weekHeaderLabel', { context: { disabled: showWeek } })"
                              data-pc-group-section="tableheadercelllabel"
                            >
                              {{ weekHeaderLabel }}
                            </span>
                          </slot>
                        </th>
                        <th
                          v-for="weekDay of weekDays"
                          :key="weekDay"
                          scope="col"
                          :abbr="weekDay"
                          v-bind="ptm('tableHeaderCell')"
                          data-pc-group-section="tableheadercell"
                        >
                          <span v-bind="ptm('weekDay')" data-pc-group-section="tableheadercelllabel">{{
                            weekDay
                          }}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody v-bind="ptm('tableBody')">
                      <tr
                        v-for="(week, i) of month.dates"
                        :key="week[0].day + '' + week[0].month"
                        v-bind="ptm('tableBodyRow')"
                      >
                        <td
                          v-if="showWeek"
                          :class="cx('weekNumber')"
                          v-bind="ptm('weekNumber')"
                          data-pc-group-section="tablebodycell"
                        >
                          <span
                            :class="cx('weekLabelContainer')"
                            v-bind="ptm('weekLabelContainer', { context: { disabled: showWeek } })"
                            :data-p-disabled="showWeek"
                            data-pc-group-section="tablebodycelllabel"
                          >
                            <slot name="weeklabel" :weekNumber="month.weekNumbers[i]">
                              <span
                                v-if="month.weekNumbers[i] < 10"
                                style="visibility: hidden"
                                v-bind="ptm('weekLabel')"
                                >0</span
                              >
                              {{ month.weekNumbers[i] }}
                            </slot>
                          </span>
                        </td>
                        <td
                          v-for="date of week"
                          :key="date.day + '' + date.month"
                          :aria-label="date.day"
                          :class="cx('day', { date })"
                          v-bind="
                            ptm('day', {
                              context: {
                                date,
                                today: date.today,
                                otherMonth: date.otherMonth
                              }
                            })
                          "
                          :data-p-today="date.today"
                          :data-p-other-month="date.otherMonth"
                          data-pc-group-section="tablebodycell"
                        >
                          <span
                            v-ripple
                            :class="cx('dayLabel', { date })"
                            @click="onDateSelect($event, date)"
                            draggable="false"
                            @keydown="onDateCellKeydown($event, date, groupIndex)"
                            :aria-selected="isSelected(date)"
                            :aria-disabled="!date.selectable"
                            v-bind="
                              ptm('dayLabel', {
                                context: {
                                  date,
                                  selected: isSelected(date),
                                  exactSelected: isExactSelected(date),
                                  disabled: !date.selectable
                                }
                              })
                            "
                            :data-p-disabled="!date.selectable"
                            :data-p-highlight="isSelected(date)"
                            data-pc-group-section="tablebodycelllabel"
                          >
                            <slot name="date" :date="date">{{ date.day }}</slot>
                          </span>
                          <div
                            v-if="isSelected(date)"
                            class="p-hidden-accessible"
                            aria-live="polite"
                            v-bind="ptm('hiddenSelectedDay')"
                            :data-p-hidden-accessible="true"
                          >
                            {{ date.day }}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div v-if="currentView === 'month'" :class="cx('monthPicker')" v-bind="ptm('monthPicker')">
              <span
                v-for="(m, i) of monthPickerValues"
                :key="m"
                v-ripple
                @click="onMonthSelect($event, { month: m, index: i })"
                @keydown="onMonthCellKeydown($event, { month: m, index: i })"
                :class="cx('month', { month: m, index: i })"
                v-bind="
                  ptm('month', {
                    context: {
                      month: m,
                      monthIndex: i,
                      selected: isMonthSelected(i),
                      disabled: !m.selectable
                    }
                  })
                "
                :data-p-disabled="!m.selectable"
                :data-p-highlight="isMonthSelected(i)"
              >
                {{ m.value }}
                <div
                  v-if="isMonthSelected(i)"
                  class="p-hidden-accessible"
                  aria-live="polite"
                  v-bind="ptm('hiddenMonth')"
                  :data-p-hidden-accessible="true"
                >
                  {{ m.value }}
                </div>
              </span>
            </div>
            <div v-if="currentView === 'year'" :class="cx('yearPicker')" v-bind="ptm('yearPicker')">
              <span
                v-for="y of yearPickerValues"
                :key="y.value"
                v-ripple
                @click="onYearSelect($event, y)"
                @keydown="onYearCellKeydown($event, y)"
                :class="cx('year', { year: y })"
                v-bind="
                  ptm('year', {
                    context: {
                      year: y,
                      selected: isYearSelected(y.value),
                      disabled: !y.selectable
                    }
                  })
                "
                :data-p-disabled="!y.selectable"
                :data-p-highlight="isYearSelected(y.value)"
              >
                {{ y.value }}
                <div
                  v-if="isYearSelected(y.value)"
                  class="p-hidden-accessible"
                  aria-live="polite"
                  v-bind="ptm('hiddenYear')"
                  :data-p-hidden-accessible="true"
                >
                  {{ y.value }}
                </div>
              </span>
            </div>
          </template>
          <div
            v-if="(showTime || timeOnly) && currentView === 'date'"
            :class="cx('timePicker')"
            v-bind="ptm('timePicker')"
          >
            <div :class="cx('hourPicker')" v-bind="ptm('hourPicker')" data-pc-group-section="timepickerContainer">
              <button
                v-ripple
                :class="cx('incrementButton')"
                :aria-label="$primevue.config.locale.nextHour"
                @mousedown="onTimePickerElementMouseDown($event, 0, 1)"
                @mouseup="onTimePickerElementMouseUp($event)"
                @keydown="onContainerButtonKeydown"
                @mouseleave="onTimePickerElementMouseLeave()"
                @keydown.enter="onTimePickerElementMouseDown($event, 0, 1)"
                @keydown.space="onTimePickerElementMouseDown($event, 0, 1)"
                @keyup.enter="onTimePickerElementMouseUp($event)"
                @keyup.space="onTimePickerElementMouseUp($event)"
                type="button"
                v-bind="ptm('incrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="incrementicon">
                  <component
                    :is="incrementIcon ? 'span' : 'ChevronUpIcon'"
                    :class="incrementIcon"
                    v-bind="ptm('incrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
              <span v-bind="ptm('hour')" data-pc-group-section="timepickerlabel">{{ formattedCurrentHour }}</span>
              <button
                v-ripple
                :class="cx('decrementButton')"
                :aria-label="$primevue.config.locale.prevHour"
                @mousedown="onTimePickerElementMouseDown($event, 0, -1)"
                @mouseup="onTimePickerElementMouseUp($event)"
                @keydown="onContainerButtonKeydown"
                @mouseleave="onTimePickerElementMouseLeave()"
                @keydown.enter="onTimePickerElementMouseDown($event, 0, -1)"
                @keydown.space="onTimePickerElementMouseDown($event, 0, -1)"
                @keyup.enter="onTimePickerElementMouseUp($event)"
                @keyup.space="onTimePickerElementMouseUp($event)"
                type="button"
                v-bind="ptm('decrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="decrementicon">
                  <component
                    :is="decrementIcon ? 'span' : 'ChevronDownIcon'"
                    :class="decrementIcon"
                    v-bind="ptm('decrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
            </div>
            <div
              :class="cx('separatorContainer')"
              v-bind="ptm('separatorContainer')"
              data-pc-group-section="timepickerContainer"
            >
              <span v-bind="ptm('separator')" data-pc-group-section="timepickerlabel">{{ timeSeparator }}</span>
            </div>
            <div :class="cx('minutePicker')" v-bind="ptm('minutePicker')" data-pc-group-section="timepickerContainer">
              <button
                v-ripple
                :class="cx('incrementButton')"
                :aria-label="$primevue.config.locale.nextMinute"
                @mousedown="onTimePickerElementMouseDown($event, 1, 1)"
                @mouseup="onTimePickerElementMouseUp($event)"
                @keydown="onContainerButtonKeydown"
                :disabled="disabled"
                @mouseleave="onTimePickerElementMouseLeave()"
                @keydown.enter="onTimePickerElementMouseDown($event, 1, 1)"
                @keydown.space="onTimePickerElementMouseDown($event, 1, 1)"
                @keyup.enter="onTimePickerElementMouseUp($event)"
                @keyup.space="onTimePickerElementMouseUp($event)"
                type="button"
                v-bind="ptm('incrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="incrementicon">
                  <component
                    :is="incrementIcon ? 'span' : 'ChevronUpIcon'"
                    :class="incrementIcon"
                    v-bind="ptm('incrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
              <span v-bind="ptm('minute')" data-pc-group-section="timepickerlabel">{{ formattedCurrentMinute }}</span>
              <button
                v-ripple
                :class="cx('decrementButton')"
                :aria-label="$primevue.config.locale.prevMinute"
                @mousedown="onTimePickerElementMouseDown($event, 1, -1)"
                @mouseup="onTimePickerElementMouseUp($event)"
                @keydown="onContainerButtonKeydown"
                :disabled="disabled"
                @mouseleave="onTimePickerElementMouseLeave()"
                @keydown.enter="onTimePickerElementMouseDown($event, 1, -1)"
                @keydown.space="onTimePickerElementMouseDown($event, 1, -1)"
                @keyup.enter="onTimePickerElementMouseUp($event)"
                @keyup.space="onTimePickerElementMouseUp($event)"
                type="button"
                v-bind="ptm('decrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="decrementicon">
                  <component
                    :is="decrementIcon ? 'span' : 'ChevronDownIcon'"
                    :class="decrementIcon"
                    v-bind="ptm('decrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
            </div>
            <div
              v-if="showSeconds"
              :class="cx('separatorContainer')"
              v-bind="ptm('separatorContainer')"
              data-pc-group-section="timepickerContainer"
            >
              <span v-bind="ptm('separator')" data-pc-group-section="timepickerlabel">{{ timeSeparator }}</span>
            </div>
            <div
              v-if="showSeconds"
              :class="cx('secondPicker')"
              v-bind="ptm('secondPicker')"
              data-pc-group-section="timepickerContainer"
            >
              <button
                v-ripple
                :class="cx('incrementButton')"
                :aria-label="$primevue.config.locale.nextSecond"
                @mousedown="onTimePickerElementMouseDown($event, 2, 1)"
                @mouseup="onTimePickerElementMouseUp($event)"
                @keydown="onContainerButtonKeydown"
                :disabled="disabled"
                @mouseleave="onTimePickerElementMouseLeave()"
                @keydown.enter="onTimePickerElementMouseDown($event, 2, 1)"
                @keydown.space="onTimePickerElementMouseDown($event, 2, 1)"
                @keyup.enter="onTimePickerElementMouseUp($event)"
                @keyup.space="onTimePickerElementMouseUp($event)"
                type="button"
                v-bind="ptm('incrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="incrementicon">
                  <component
                    :is="incrementIcon ? 'span' : 'ChevronUpIcon'"
                    :class="incrementIcon"
                    v-bind="ptm('incrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
              <span v-bind="ptm('second')" data-pc-group-section="timepickerlabel">{{ formattedCurrentSecond }}</span>
              <button
                v-ripple
                :class="cx('decrementButton')"
                :aria-label="$primevue.config.locale.prevSecond"
                @mousedown="onTimePickerElementMouseDown($event, 2, -1)"
                @mouseup="onTimePickerElementMouseUp($event)"
                @keydown="onContainerButtonKeydown"
                :disabled="disabled"
                @mouseleave="onTimePickerElementMouseLeave()"
                @keydown.enter="onTimePickerElementMouseDown($event, 2, -1)"
                @keydown.space="onTimePickerElementMouseDown($event, 2, -1)"
                @keyup.enter="onTimePickerElementMouseUp($event)"
                @keyup.space="onTimePickerElementMouseUp($event)"
                type="button"
                v-bind="ptm('decrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="decrementicon">
                  <component
                    :is="decrementIcon ? 'span' : 'ChevronDownIcon'"
                    :class="decrementIcon"
                    v-bind="ptm('decrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
            </div>
            <div
              v-if="hourFormat == '12'"
              :class="cx('separatorContainer')"
              v-bind="ptm('separatorContainer')"
              data-pc-group-section="timepickerContainer"
            >
              <span v-bind="ptm('separator')" data-pc-group-section="timepickerlabel">{{ timeSeparator }}</span>
            </div>
            <div v-if="hourFormat == '12'" :class="cx('ampmPicker')" v-bind="ptm('ampmPicker')">
              <button
                v-ripple
                :class="cx('incrementButton')"
                :aria-label="$primevue.config.locale.am"
                @click="toggleAMPM($event)"
                @keydown="onContainerButtonKeydown"
                type="button"
                :disabled="disabled"
                v-bind="ptm('incrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="incrementicon" :class="cx('incrementIcon')">
                  <component
                    :is="incrementIcon ? 'span' : 'ChevronUpIcon'"
                    :class="cx('incrementIcon')"
                    v-bind="ptm('incrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
              <span v-bind="ptm('ampm')" data-pc-group-section="timepickerlabel">{{
                pm ? $primevue.config.locale.pm : $primevue.config.locale.am
              }}</span>
              <button
                v-ripple
                :class="cx('decrementButton')"
                :aria-label="$primevue.config.locale.pm"
                @click="toggleAMPM($event)"
                @keydown="onContainerButtonKeydown"
                type="button"
                :disabled="disabled"
                v-bind="ptm('decrementButton')"
                data-pc-group-section="timepickerbutton"
              >
                <slot name="decrementicon" :class="cx('decrementIcon')">
                  <component
                    :is="decrementIcon ? 'span' : 'ChevronDownIcon'"
                    :class="cx('decrementIcon')"
                    v-bind="ptm('decrementIcon')"
                    data-pc-group-section="timepickerlabel"
                  />
                </slot>
              </button>
            </div>
          </div>
          <div v-if="showButtonBar" :class="cx('buttonbar')" v-bind="ptm('buttonbar')">
            <CalendarButton
              type="button"
              :label="todayLabel"
              @click="onTodayButtonClick($event)"
              :class="cx('todayButton')"
              @keydown="onContainerButtonKeydown"
              :unstyled="unstyled"
              :pt="ptm('todayButton')"
              data-pc-group-section="button"
            />
            <CalendarButton
              type="button"
              :label="clearLabel"
              @click="onClearButtonClick($event)"
              :class="cx('clearButton')"
              @keydown="onContainerButtonKeydown"
              :unstyled="unstyled"
              :pt="ptm('clearButton')"
              data-pc-group-section="button"
            />
          </div>
          <slot name="footer"></slot>
        </div>
      </transition>
    </Portal>
  </span>
</template>
