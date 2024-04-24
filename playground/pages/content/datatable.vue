<script setup lang="ts">
import type { ColumnProps } from 'primevue/column';
import type { BPVTableSize } from '../../../src/runtime/types';
import { BPV_TABLE_SIZE as bpvTableSize } from '../../../src/runtime/constants';

interface ProductsRes {
  products: any[];
  total: number;
}

const props = reactive({
  dynamic: {
    cols: <ColumnProps[]>[
      { field: 'id', header: 'ID' },
      { field: 'title', header: 'Наименование' },
      { field: 'category', header: 'Категория' },
      { field: 'stock', header: 'Кол-во' }
    ]
  },
  slots: {
    cols: <ColumnProps[]>[
      { field: 'title', header: 'Наименование' },
      { field: 'thumbnail', header: 'Изображение' },
      { field: 'price', header: 'Цена' },
      { field: 'category', header: 'Категория' },
      { field: 'rating', header: 'Оценки' },
      { field: 'stock', header: 'Наличие' }
    ]
  },
  withSize: {
    value: 'md' as BPVTableSize,
    lst: bpvTableSize.map((item) => ({ text: { sm: 'Маленькая', md: 'Нормальная', lg: 'Большая' }[item], value: item }))
  },
  pagination: {
    currentPage: 1,
    pageSize: 5
  }
});

const {
  data: products1,
  pending: products1Pending,
  refresh: products1Refresh
} = useFetch<ProductsRes>('https://dummyjson.com/products', {
  params: { limit: 5 }
});
const {
  data: products2,
  pending: products2Pending,
  refresh: products2Refresh
} = useFetch<ProductsRes>('https://dummyjson.com/products', {
  params: {
    limit: props.pagination.pageSize,
    skip: (props.pagination.currentPage - 1) * props.pagination.pageSize
  }
});

function toPrice(val: number | string) {
  return Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(val);
}

function getBadgeSeverity(data) {
  if (data.stock) {
    switch (true) {
      case data.stock >= 100:
        return 'success';

      case data.stock >= 50:
        return 'warning';

      case data.stock >= 30:
        return 'danger';

      default:
        return null;
    }
  }
}
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Таблицы с данными</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending">
          <BColumn field="id" header="ID" />
          <BColumn field="title" header="Наименование" />
          <BColumn field="category" header="Категория" />
          <BColumn field="stock" header="Кол-во" />
        </BDataTable>
      </div>
    </div>

    <h2>Динамические колонки</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending">
          <BColumn v-for="col of props.dynamic.cols" :field="col.field" :header="col.header" />
        </BDataTable>
      </div>
    </div>

    <h2>Расширение через slots</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending">
          <template #header>
            <div class="d-flex justify-content-between">
              <div class="h3 mb-0">Товары</div>
              <BButton severity="success" icon="pi pi-refresh" rounded size="sm" @click="products1Refresh" />
            </div>
          </template>

          <BColumn v-for="col of props.slots.cols" :field="col.field" :header="col.header">
            <template v-if="col.field === 'thumbnail'" #body="slotProps">
              <img :src="slotProps.data.thumbnail" :alt="slotProps.data.title" class="w-50 rounded-3" />
            </template>

            <template v-if="col.field === 'price'" #body="slotProps">
              {{ toPrice(slotProps.data.price) }}
            </template>

            <template v-if="col.field === 'stock'" #body="slotProps">
              <BBadge :severity="getBadgeSeverity(slotProps.data)" :value="slotProps.data.stock" />
            </template>
          </BColumn>

          <template #footer="slotProps">Общее кол-во: {{ products1.total }}</template>
        </BDataTable>
      </div>
    </div>

    <h2>Размеры</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-3">
            <BDropdown
              class="mb-3"
              v-model="props.withSize.value"
              :options="props.withSize.lst"
              option-label="text"
              option-value="value"
            />
          </div>
        </div>

        <BDataTable :value="products1.products" :loading="products1Pending" :size="props.withSize.value">
          <BColumn v-for="col of props.dynamic.cols" :field="col.field" :header="col.header" />
        </BDataTable>
      </div>
    </div>

    <h2>Заполнение границами</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending" show-gridlines>
          <BColumn v-for="col of props.dynamic.cols" :field="col.field" :header="col.header" />
        </BDataTable>
      </div>
    </div>

    <h2>Заполнение цветом строк (stripped)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending" striped-rows>
          <BColumn v-for="col of props.dynamic.cols" :field="col.field" :header="col.header" />
        </BDataTable>
      </div>
    </div>

    <h2>Пагинация</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products2.products" :loading="products2Pending">
          <BColumn v-for="col of props.dynamic.cols" :field="col.field" :header="col.header" />
        </BDataTable>
      </div>
    </div>
  </div>
</template>
