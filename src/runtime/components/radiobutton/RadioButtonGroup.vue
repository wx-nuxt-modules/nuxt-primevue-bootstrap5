<script lang="ts" setup>
import type { BPVRadioButtonProps, RadioButtonEmits } from '../../presets/bootstrap5/radiobutton/types';

import { BRadioButtonWithLabel } from '#components';
import { useId } from '#imports';

interface Props extends Omit<BPVRadioButtonProps, 'binary' | 'tabindex' | 'name'> {
  optionText?: string;
  options: ({ [k in string]: string } & Omit<BPVRadioButtonProps, 'modelValue' | 'state' | 'value'> & {
      value: unknown;
    })[];
  name: string;
  inline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  optionText: 'text',
  inline: false
});
const emits = defineEmits<{
  (
    e: 'update:model-value',
    value: Parameters<RadioButtonEmits['update:modelValue']>[0]
  ): ReturnType<RadioButtonEmits['update:modelValue']>;
  (
    e: 'change',
    event: { event: Parameters<RadioButtonEmits['change']>[0]; index: number }
  ): ReturnType<RadioButtonEmits['change']>;
  (
    e: 'blur',
    event: { event: Parameters<RadioButtonEmits['blur']>[0]; index: number }
  ): ReturnType<RadioButtonEmits['blur']>;
  (
    e: 'focus',
    event: { event: Parameters<RadioButtonEmits['focus']>[0]; index: number }
  ): ReturnType<RadioButtonEmits['focus']>;
}>();

const id = useId();

function getInputId(idx: number) {
  return `__${id}_${props.name}_${idx}__`;
}

function getBindOption(option: Props['options'][number], idx: number) {
  const { [props.optionText]: _text, ...rest } = option;

  return {
    ...rest,
    modelValue: props.modelValue,
    disabled: props.disabled || option.disabled || undefined,
    readonly: props.readonly || option.readonly || undefined,
    state: props.state || undefined,
    label: option[props.optionText],
    inline: props.inline || undefined,
    name: props.name || undefined,
    inputId: getInputId(idx)
  };
}

function onUpdateModelValue(newVal: Parameters<RadioButtonEmits['update:modelValue']>[0]) {
  console.log(newVal);
  emits('update:model-value', newVal);
}
</script>

<template>
  <div class="bpv-form-checkbox-group">
    <BRadioButtonWithLabel
      v-for="(option, idx) of options"
      v-bind="getBindOption(option, idx)"
      :key="getInputId(idx)"
      @update:model-value="onUpdateModelValue"
      @blur="emits('blur', { event: $event, index: idx })"
      @change="emits('change', { event: $event, index: idx })"
      @focus="emits('focus', { event: $event, index: idx })"
    />
  </div>
</template>
