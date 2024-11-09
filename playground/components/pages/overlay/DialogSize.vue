<script lang="ts" setup>
import type { BPVDialogSize } from '#nuxt-primevue-bootstrap5/types';

const visible = ref();
const size = ref<BPVDialogSize>();

const modalTitle = computed(() => {
  switch (size.value) {
    case 'sm':
      return sizes[0].size;
    case 'lg':
      return sizes[2].size;
    case 'xl':
      return sizes[3].size;
    default:
      return sizes[1].size;
  }
});

const sizes = [
  { size: 'Маленький', prop: 'sm', maxWidth: '300px' },
  { size: 'По умолчанию', prop: 'undefined', maxWidth: '500px' },
  { size: 'Большой', prop: 'lg', maxWidth: '800px' },
  { size: 'Очень большой', prop: 'xl', maxWidth: '1140px' }
];

function openModal(value: BPVDialogSize | undefined) {
  size.value = value;
  visible.value = true;
}
</script>

<template>
  <h2>Размеры</h2>
  <p>
    Модальные окна имеют три необязательных размера. Эти размеры действуют в определенных контрольных точках, чтобы
    избежать горизонтальных полос прокрутки на более узких окнах просмотра.
  </p>
  <BDataTable :value="sizes" class="mb-3">
    <BColumn header="Размер" field="size" />
    <BColumn header="Пропс" field="prop">
      <template #body="slotProps">
        <code>{{ slotProps.data.prop }}</code>
      </template>
    </BColumn>
    <BColumn header="Максимальная ширина модального окна" field="maxWidth">
      <template #body="slotProps">
        <code>{{ slotProps.data.maxWidth }}</code>
      </template>
    </BColumn>
  </BDataTable>
  <p>
    Без переданного пропса <code>size</code> или, если <code>size = undefined</code>, модальное окно имеет "Средний
    размер".
  </p>

  <div class="bd-example-snippet bd-code-snippet">
    <div class="bd-example m-0 border-0">
      <div class="row gx-2 justify-content-center">
        <div class="col-auto">
          <BButton :label="sizes[0].size" severity="primary" @click="openModal('sm')" />
        </div>
        <div class="col-auto">
          <BButton :label="sizes[1].size" severity="primary" @click="openModal(undefined)" />
        </div>
        <div class="col-auto">
          <BButton :label="sizes[2].size" severity="primary" @click="openModal('lg')" />
        </div>
        <div class="col-auto">
          <BButton :label="sizes[3].size" severity="primary" @click="openModal('xl')" />
        </div>
      </div>

      <BDialog v-model:visible="visible" modal :header="modalTitle" position="center" :draggable="false" :size="size">
        ...
      </BDialog>
    </div>
  </div>
</template>
