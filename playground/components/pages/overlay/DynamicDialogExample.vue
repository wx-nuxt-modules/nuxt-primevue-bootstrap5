<script lang="ts" setup>
import type { Ref, Reactive } from 'vue';

import { BButton } from '#components';

const dialog = useBpvDialog();
const toast = useBpvToast();

const DialogContent = defineComponent({
  setup() {
    const dialogRef = inject<Ref<{ data: Reactive<Record<string, unknown>> }>>('dialogRef');
    const toast = useBpvToast();

    onMounted(() => {
      toast.add({
        group: 'dynamic-dialog',
        severity: 'info',
        detail: JSON.stringify(dialogRef.value.data),
        summary: 'DialogContent data',
        life: 2e3
      });
    });

    return () => {
      return h('div', ['У-у-у, вы читаете этот текст в динамическом модальном режиме!']);
    };
  }
});

function onClickOpen() {
  dialog.open(DialogContent, {
    props: {
      header: 'Динамическое модальное окно',
      modal: true
    },
    data: {
      foo: 'bar'
    },
    templates: {
      footer: markRaw(() => {
        const dialogRef = inject<Ref<{ close(event: unknown): void }>>('dialogRef');

        return h(
          'div',
          {
            class: ['row gx-2']
          },
          [
            h('div', { class: 'col-auto' }, [
              h(BButton, {
                severity: 'secondary',
                label: 'Close',
                onClick() {
                  dialogRef.value.close({ test: 1 });
                }
              })
            ]),
            h('div', { class: 'col-auto' }, [
              h(BButton, {
                severity: 'secondary',
                outlined: true,
                label: 'Ok',
                onClick() {
                  dialogRef.value.close({ test: 2 });
                }
              })
            ])
          ]
        );
      })
    },
    onClose: (options: unknown) => {
      toast.add({
        group: 'dynamic-dialog',
        severity: 'info',
        detail: JSON.stringify(options),
        summary: 'Event onClose()',
        life: 2e3
      });
    }
  });
}
</script>

<template>
  <h2>Полный пример</h2>

  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="text-center">
        <BButton label="Показать" severity="primary" @click="onClickOpen" />
      </div>
    </div>
  </div>
</template>
