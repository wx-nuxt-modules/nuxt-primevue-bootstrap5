import type { MaybeRefOrGetter } from 'vue';
import { toRef } from 'vue';

export function useCalendarTime(target: MaybeRefOrGetter) {
  type ActionLiteral = 'hour' | 'minute' | 'second';

  const targetRef = toRef(target);

  function doAction(literal: ActionLiteral, action: 'increment' | 'decrement'): void {
    if (!targetRef.value) return;

    // noop event
    const event = { preventDefault: () => {} };
    const newVal = action === 'increment' ? 1 : -1;

    switch (literal) {
      case 'hour':
        targetRef.value.onTimePickerElementMouseDown(event, 0, newVal);
        targetRef.value.onTimePickerElementMouseUp(event);
        break;
      case 'minute':
        targetRef.value.onTimePickerElementMouseDown(event, 1, newVal);
        targetRef.value.onTimePickerElementMouseUp(event);
        break;
      case 'second':
        targetRef.value.onTimePickerElementMouseDown(event, 2, newVal);
        targetRef.value.onTimePickerElementMouseUp(event);
        break;
    }
  }

  return {
    doAction,
    increment: (literal: ActionLiteral): void => {
      doAction(literal, 'increment');
    },
    decrement: (literal: ActionLiteral): void => {
      doAction(literal, 'decrement');
    }
  };
}
