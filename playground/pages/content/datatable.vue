<script setup lang="ts">
import type { ColumnProps } from 'primevue/column';
import type { DataTableEmits, DataTableFilterMeta } from '#nuxt-primevue-bootstrap5/bootstrap5/datatable';
import type { BPVTableSize } from '../../../src/runtime/types';
import { FilterMatchMode } from 'primevue/api';
import { BPV_TABLE_SIZE as bpvTableSize } from '../../../src/runtime/constants';

interface ProductsRes {
  products: any[];
  total: number;
}

const dynamicCols = <ColumnProps[]>[
  { field: 'id', header: 'ID', style: { width: '8%' } },
  { field: 'title', header: 'Наименование' },
  { field: 'category', header: 'Категория', style: { width: '25%' } },
  { field: 'stock', header: 'Кол-во', style: { width: '25%' } }
];
const filters: DataTableFilterMeta = {
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: { value: null, matchMode: FilterMatchMode.EQUALS }
};

const props = reactive({
  dynamic: {
    cols: dynamicCols
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
  sortOneColumn: {
    cols: dynamicCols.slice().map((item) => ({ ...item, sortable: true }))
  },
  lazy: {
    currentPage: 1,
    totalRows: 0
  },
  filters: {
    filters: structuredClone(filters)
  }
});

const lazyPageSize = ref(5);
const lazySkip = computed(() => (props.lazy.currentPage - 1) * lazyPageSize.value);

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
  // params: {
  //   limit: props.pagination.pageSize,
  //   skip: (props.pagination.currentPage - 1) * props.pagination.pageSize
  // }
  params: {
    limit: 999
  }
});
const {
  data: products3,
  pending: products3Pending,
  refresh: products3Refresh
} = useFetch<ProductsRes>('https://dummyjson.com/products', {
  server: false,
  params: {
    limit: lazyPageSize,
    skip: lazySkip
  },
  onResponse: (ctx) => {
    const total = +ctx.response._data.total;

    if (total !== props.lazy.totalRows) {
      props.lazy.totalRows = total;
    }
  }
});

function toPrice(val: number | string) {
  return Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(+val);
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

function onChangePageLazy(event: Parameters<DataTableEmits['page']>[0]) {
  props.lazy.currentPage = event.page + 1;
}
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Таблицы с данными</h1>
  </div>

  <div v-if="!products1Pending && !products2Pending && !products3Pending" class="bd-content ps-lg-2">
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
          <BColumn v-for="col of props.dynamic.cols" v-bind="col" />
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
              <BButton severity="success" icon="pi pi-refresh" rounded size="sm" @click="products1Refresh()" />
            </div>
          </template>

          <BColumn v-for="col of props.slots.cols" v-bind="col">
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
          <BColumn v-for="col of props.dynamic.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <h2>Заполнение границами</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending" show-gridlines>
          <BColumn v-for="col of props.dynamic.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <h2>Заполнение цветом строк (stripped)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending" striped-rows>
          <BColumn v-for="col of props.dynamic.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <h2>Пагинация</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable
          :value="products2.products"
          :loading="products2Pending"
          :rows="5"
          :rows-per-page-options="[5, 10, 20, 50]"
          paginator-alignment="center"
          paginator
        >
          <BColumn v-for="col of props.dynamic.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <h2>Пагинация (Шаблоны)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable
          :value="products2.products"
          :loading="products2Pending"
          :rows="5"
          :rows-per-page-options="[5, 10, 20, 50]"
          paginator-template="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          current-page-report-template="Показаны с {first} по {last} из {totalRecords}"
          paginator-alignment="center"
          paginator
        >
          <BColumn v-for="col of props.dynamic.cols" v-bind="col" />

          <template #paginatorstart>
            <BButton severity="primary" type="button" icon="pi pi-refresh" text @click="products2Refresh()" />
          </template>

          <template #paginatorend>
            <BButton severity="primary" type="button" icon="pi pi-download" text />
          </template>
        </BDataTable>
      </div>
    </div>

    <h2>Сортировка (1 колонка)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending">
          <BColumn v-for="col of props.sortOneColumn.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <!--<h2>Сортировка (несколько колонок)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending" sort-mode="multiple">
          <BColumn v-for="col of props.sortOneColumn.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>-->

    <h2>Сортировка (по умолчанию)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending" sort-field="id" :sort-order="-1">
          <BColumn v-for="col of props.sortOneColumn.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <h2>Сортировка (со сбросом)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable :value="products1.products" :loading="products1Pending" removable-sort>
          <BColumn v-for="col of props.sortOneColumn.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <h2>Фильтрация</h2>
    <!--<PagesContentDatatableFilter />-->
    <PagesContentDatatableFilterAdvanced />

    <!--<h2>Ленивая загрузка</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable
          :value="products3.products"
          :loading="products3Pending"
          paginator
          v-model:rows="lazyPageSize"
          :total-records="props.lazy.totalRows"
          paginator-alignment="center"
          :rows-per-page-options="[5, 10, 25]"
          lazy
          @page="onChangePageLazy($event)"
        >
          <BColumn v-for="col of props.dynamic.cols" v-bind="col" />
        </BDataTable>
      </div>
    </div>

    <h2>Изменение размера колонок</h2>

    <h3>Fit Mode</h3>
    <p>
      Размер столбцов можно изменить перетаскиванием, если включен пропс <code>resizableColumns</code>. Режим изменения
      размера по умолчанию <code>fit</code>. Данный режим изменяет размер столбцов, но не превышает размер таблицы
    </p>
    <BDataTable
      :value="products1.products"
      :loading="products1Pending"
      resizable-columns
      column-resize-mode="fit"
      show-gridlines
    >
      <BColumn v-for="col of props.dynamic.cols" v-bind="col" />
    </BDataTable>-->

    <PagesContentDatatableReorder />
  </div>
</template>
