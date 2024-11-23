<script lang="ts" setup>
import type { BPVCheckboxProps, CheckboxEmits } from '../../presets/bootstrap5/checkbox/types';

import { BCheckbox } from '#components';
import { useId, computed } from '#imports';

interface Props extends BPVCheckboxProps {
  label: string;
  inline?: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits<{
  (
    e: 'update:modelValue',
    value: Parameters<CheckboxEmits['update:modelValue']>[0]
  ): ReturnType<CheckboxEmits['update:modelValue']>;
  (e: 'change', event: Parameters<CheckboxEmits['change']>[0]): ReturnType<CheckboxEmits['change']>;
  (e: 'blur', event: Parameters<CheckboxEmits['blur']>[0]): ReturnType<CheckboxEmits['blur']>;
  (e: 'focus', event: Parameters<CheckboxEmits['focus']>[0]): ReturnType<CheckboxEmits['focus']>;
}>();

// non-reactive
const id = props.inputId ? props.inputId : useId();
// end non-reactive

const bindProps = computed(() => {
  const { label, inline, ...rest } = props;

  return rest;
});
</script>

<template>
  <div class="form-check bpv-form-check" :class="{ 'form-check-inline': inline }">
    <BCheckbox
      v-bind="bindProps"
      :input-id="id"
      @update:model-value="emits('update:modelValue', $event)"
      @change="emits('change', $event)"
      @focus="emits('focus', $event)"
      @blur="emits('blur', $event)"
    />
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>
