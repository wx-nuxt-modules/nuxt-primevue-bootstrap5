<script lang="ts" setup>
import type { BPVRadioButtonProps, RadioButtonEmits } from '../../presets/bootstrap5/radiobutton/types';

import { BRadioButton } from '#components';
import { useId } from '#imports';

interface Props extends BPVRadioButtonProps {
  label: string;
  inline?: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits<{
  (
    e: 'update:modelValue',
    value: Parameters<RadioButtonEmits['update:modelValue']>[0]
  ): ReturnType<RadioButtonEmits['update:modelValue']>;
  (e: 'change', event: Parameters<RadioButtonEmits['change']>[0]): ReturnType<RadioButtonEmits['change']>;
  (e: 'blur', event: Parameters<RadioButtonEmits['blur']>[0]): ReturnType<RadioButtonEmits['blur']>;
  (e: 'focus', event: Parameters<RadioButtonEmits['focus']>[0]): ReturnType<RadioButtonEmits['focus']>;
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
  <div class="form-check" :class="{ 'form-check-inline': inline }">
    <BRadioButton
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
