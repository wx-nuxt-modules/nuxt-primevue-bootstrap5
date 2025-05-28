<script lang="ts" setup documentation>
const customCalendarRef = ref();

const customCalendarTime = reactive(useCalendarTime(customCalendarRef, new Date(2025, 5, 28, 19, 18, 15)));
const customCalendarTimeInputMask = reactive(
  customCalendarTime.createInputMask({
    mask: '99:99'
  })
);

const value12h = ref();
const value24h = ref();
const valueTime = ref();
</script>

<template>
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
      <BCalendar
        ref="customCalendarRef"
        class="mb-3"
        v-model="customCalendarTime.modelValue"
        date-format="dd.mm.yy"
        hour-format="24"
        show-time
      >
        <template #timepicker="{ attrs }">
          <div class="flex-column gap-2" v-bind="attrs">
            <div>
              <BInputMask placeholder="Время" v-bind="customCalendarTimeInputMask" />
            </div>
            <BButtonGroup>
              <BButton size="sm" label="+5 мин" severity="primary" @click="customCalendarTime.doAction('minute', 5)" />
              <BButton
                size="sm"
                label="+10 мин"
                severity="primary"
                @click="customCalendarTime.doAction('minute', 10)"
              />
              <BButton
                size="sm"
                label="+30 мин"
                severity="primary"
                @click="customCalendarTime.doAction('minute', 30)"
              />
              <BButton size="sm" label="+1 час" severity="primary" @click="customCalendarTime.doAction('hour', 1)" />
              <BButton size="sm" label="+1 сутки" severity="primary" @click="customCalendarTime.doAction('date', 1)" />
            </BButtonGroup>
          </div>
        </template>
      </BCalendar>
      <pre class="mb-0">value: {{ customCalendarTime.modelValue }}</pre>
    </div>
  </div>
</template>
