import type { MaybeRef, MaybeRefOrGetter, Ref } from 'vue';
import type { BPVInputMaskProps } from '../presets/bootstrap5/inputmask/types';
import { toRef } from 'vue';

export function useCalendarTime(target: MaybeRefOrGetter, modelValue?: MaybeRef<Date | null | undefined>) {
  type ActionLiteral = 'date' | 'hour' | 'minute' | 'second';

  const targetRef = toRef(target);
  const localModelValue: Ref<Date | null | undefined> = toRef(modelValue);

  function doAction(literal: ActionLiteral, value: number): void {
    if (!targetRef.value) return;

    const date = localModelValue.value ? new Date(localModelValue.value) : new Date();

    switch (literal) {
      case 'date':
        date.setDate(date.getDate() + value);
        break;
      case 'hour':
        date.setHours(date.getHours() + value);
        break;
      case 'minute':
        date.setMinutes(date.getMinutes() + value);
        break;
      case 'second':
        date.setSeconds(date.getSeconds() + value);
        break;
    }

    localModelValue.value = date;
  }

  return {
    modelValue: localModelValue,

    doAction,
    increment: (literal: ActionLiteral): void => {
      doAction(literal, 1);
    },
    decrement: (literal: ActionLiteral): void => {
      doAction(literal, -1);
    },
    createInputMask: (props: Pick<BPVInputMaskProps, 'mask'>) => {
      const localValue = ref<string | null>();
      const modelValue = computed<string | null | undefined>(() => {
        if (!localModelValue.value) return localModelValue.value;
        if (!props.mask) return undefined;

        const hour = `00${localModelValue.value.getHours()}`.slice(-2);
        const minute = `00${localModelValue.value.getMinutes()}`.slice(-2);
        const second = `00${localModelValue.value.getSeconds()}`.slice(-2);

        const mask = props.mask.split(':');
        if (mask.length < 2) return undefined;

        return [hour, minute, second]
          .map((item, idx) => {
            if (!mask[idx]) return;

            return item;
          })
          .filter(Boolean)
          .join(':');
      });

      return {
        modelValue,
        mask: computed(() => props.mask),

        'onUpdate:modelValue': (newVal: string | null) => {
          localValue.value = newVal;

          if (!targetRef.value) return;

          if (!newVal) {
            if (!localModelValue.value) return;

            const date = new Date(localModelValue.value);
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);

            localModelValue.value = date;
          }
        },
        onComplete: () => {
          const date = localModelValue.value ? new Date(localModelValue.value) : new Date();

          targetRef.value.populateTime(date, localValue.value);

          localModelValue.value = date;
        }
      };
    }
  };
}
