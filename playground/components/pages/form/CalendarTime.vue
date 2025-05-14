<script lang="ts" setup>
const customCalendarRef = ref();

const customCalendarTime = useCalendarTime(customCalendarRef);

const value12h = ref();
const value24h = ref();
const valueTime = ref();
const customValueTime = ref();

function onClickCustomCalendar(literal: 'hour' | 'minute' | 'second', action: 'increment' | 'decrement') {
  customCalendarTime.doAction(literal, action);
}
</script>

<template>
  <h2>Время</h2>
  <p>
    Сборщик времени отображается если задан пропс <code>showTime</code>, где формат 12/24 часа настроен пропсом
    <code>hourFormat</code>. В случае, если нужно выбрать только время, объявите пропс <code>timeOnly</code>, чтобы
    скрыть раздел даты.
  </p>
  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="row justify-content-center gy-3">
        <div class="col-6">
          <BFormLabel>12ч формат</BFormLabel>
          <BCalendar class="mb-3" v-model="value12h" show-time hour-format="12" date-format="dd.mm.yy" />
          <pre class="mb-0">value: {{ value12h }}</pre>
        </div>
        <div class="col-6">
          <BFormLabel>24ч формат</BFormLabel>
          <BCalendar class="mb-3" v-model="value24h" show-time hour-format="24" date-format="dd.mm.yy" />
          <pre class="mb-0">value: {{ value24h }}</pre>
        </div>
        <div class="col-6">
          <BFormLabel>Только время</BFormLabel>
          <BCalendar class="mb-3" v-model="valueTime" time-only show-seconds />
          <pre class="mb-0">value: {{ valueTime }}</pre>
        </div>
        <div class="col-6">
          <BFormLabel>Кастомный timepicker</BFormLabel>
          <BCalendar ref="customCalendarRef" class="mb-3" v-model="customValueTime" time-only show-seconds>
            <template #timepicker="{ attrs }">
              <div class="flex-column gap-2" v-bind="attrs">
                <BButtonGroup>
                  <BButton
                    severity="primary"
                    label="-1 час"
                    size="sm"
                    @click="onClickCustomCalendar('hour', 'decrement')"
                  />
                  <BButton
                    severity="primary"
                    label="+1 час"
                    size="sm"
                    @click="onClickCustomCalendar('hour', 'increment')"
                  />
                </BButtonGroup>
                <BButtonGroup>
                  <BButton
                    severity="primary"
                    label="-1 мин"
                    size="sm"
                    @click="onClickCustomCalendar('minute', 'decrement')"
                  />
                  <BButton
                    severity="primary"
                    label="+1 мин"
                    size="sm"
                    @click="onClickCustomCalendar('minute', 'increment')"
                  />
                </BButtonGroup>
                <BButtonGroup>
                  <BButton
                    severity="primary"
                    label="-1 сек"
                    size="sm"
                    @click="onClickCustomCalendar('second', 'decrement')"
                  />
                  <BButton
                    severity="primary"
                    label="+1 сек"
                    size="sm"
                    @click="onClickCustomCalendar('second', 'increment')"
                  />
                </BButtonGroup>
              </div>
            </template>
          </BCalendar>
          <pre class="mb-0">value: {{ customValueTime }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
