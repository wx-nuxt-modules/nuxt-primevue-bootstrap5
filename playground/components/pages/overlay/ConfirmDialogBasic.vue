<script lang="ts" setup documentation>
const confirm = useBpvConfirm();
const toast = useBpvToast();

function onClickBtn(variant: 'save' | 'destroy') {
  switch (variant) {
    case 'save':
      confirm.require({
        message: 'Вы уверены?',
        header: 'Подтверждение',
        rejectLabel: 'Отменить',
        acceptLabel: 'Сохранить',
        acceptSeverity: 'success',
        accept: () => {
          toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
          toast.add({ severity: 'danger', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
      });
      break;

    case 'destroy':
      confirm.require({
        message: 'Вы уверены что хотите удалить эту запись?',
        header: 'Опасность',
        rejectLabel: 'Отменить',
        acceptLabel: 'Удалить',
        acceptSeverity: 'danger',
        accept: () => {
          toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
          toast.add({ severity: 'danger', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
      });
      break;
  }
}
</script>

<template>
  <BToast />
  <BConfirmDialog />
  <div class="row justify-content-center gx-2">
    <div class="col-auto">
      <BButton severity="success" @click="onClickBtn('save')">Сохранить</BButton>
    </div>
    <div class="col-auto">
      <BButton severity="danger" @click="onClickBtn('destroy')">Удалить</BButton>
    </div>
  </div>
</template>
