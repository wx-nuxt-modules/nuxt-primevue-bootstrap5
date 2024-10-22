<script lang="ts" setup>
import type { DataTableRowReorderEvent } from '#nuxt-primevue-bootstrap5/bootstrap5/datatable';
import type { ColumnProps } from '#nuxt-primevue-bootstrap5/bootstrap5/column';

onMounted(async () => {
  products.value = await useProducts().getProductsMini();
});

const toast = useToast();
const columns = ref<ColumnProps[]>([
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity', reorderableColumn: false }
]);
const products = ref();

const onColReorder = () => {
  toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000, group: 'datatableReorder' });
};
const onRowReorder = (event: DataTableRowReorderEvent) => {
  products.value = event.value;
  toast.add({ severity: 'success', summary: 'Rows Reordered', life: 3000, group: 'datatableReorder' });
};
</script>

<template>
  <div>
    <h2>Порядок столбцов и строк</h2>
    <p>
      Порядок столбцов и строк можно изменить с помощью перетаскивания. Изменение порядка столбцов настраивается путем
      добавления пропса <code>reorderableColumns</code>.
    </p>
    <p>
      Аналогично, добавление пропса <code>rowReorder</code> к столбцу позволяет перетаскивать строки. Для дескриптора
      перетаскивания столбец должен иметь пропс <code>rowReorder</code>, а таблица должна слушать событие
      <code>@row-reorder</code>, необходимое для управления состоянием строк после завершения переупорядочения.
    </p>

    <BDataTable
      table-style="min-width: 50rem"
      :value="products"
      reorderable-columns
      @column-reorder="onColReorder"
      @row-reorder="onRowReorder"
    >
      <BColumn header-style="width: 3rem" :reorderable-column="false" row-reorder />
      <BColumn v-for="col of columns" v-bind="col" :key="col.field" />
    </BDataTable>
    <BToast group="datatableReorder" />
  </div>
</template>
