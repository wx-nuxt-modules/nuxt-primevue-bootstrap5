<script lang="ts" setup>
import type { DataTableFilterMeta } from '#nuxt-primevue-bootstrap5/bootstrap5/datatable';
import { FilterMatchMode } from 'primevue/api';

const { getCustomersMedium } = useCustomers();

const customers = ref();
const filters = ref<DataTableFilterMeta>({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const representatives = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png' },
  { name: 'Anna Fali', image: 'annafali.png' },
  { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
  { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
  { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
  { name: 'Onyama Limba', image: 'onyamalimba.png' },
  { name: 'Stephen Shaw', image: 'stephenshaw.png' },
  { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {
  getCustomersMedium().then((data) => {
    customers.value = getCustomers(data);
    loading.value = false;
  });
});

const getCustomers = (data) => {
  return [...(data || [])].map((d) => {
    d.date = new Date(d.date);

    return d;
  });
};
const formatDate = (value) => {
  return value.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (status) => {
  switch (status) {
    case 'unqualified':
      return 'danger';

    case 'qualified':
      return 'success';

    case 'new':
      return 'info';

    case 'negotiation':
      return 'warning';

    case 'renewal':
      return null;
  }
};
</script>

<template>
  <div>
    <h4>Базовая</h4>
    <p>
      Фильтрация данных включается путем определения пропса <code>filter</code>, ссылающегося на экземпляр
      <code>DataTableFilterMeta</code>. Для каждого столбца для фильтрации также необходимо включить
      <code>фильтр</code>. Встроенный элемент фильтра представляет собой поле ввода, и с помощью слота
      <code>filterElement</code> можно настроить фильтрацию с помощью собственного пользовательского интерфейса.
      Элементы фильтра отображаются в отдельной строке, если пропс <code>filterDisplay</code> определен как
      <code>row</code>.
    </p>
    <p>
      Дополнительная глобальная фильтрация ищет данные по одному значению, привязанному к <code>global</code> ключу
      объекта <code>filters</code>. Поля для поиска определяются с помощью <code>globalFilterFields</code>.
    </p>

    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable
          v-model:filters="filters"
          :value="customers"
          paginator
          :rows="10"
          dataKey="id"
          filterDisplay="row"
          :loading="loading"
          :globalFilterFields="['name', 'country.name', 'representative.name', 'status']"
        >
          <template #header>
            <div class="row justify-content-end">
              <div class="col-5">
                <BInputText v-model="filters.global.value" placeholder="Keyword Search" />
              </div>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <BColumn field="name" header="Name" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.name }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <BInputText
                v-model="filterModel.value"
                type="text"
                @input="filterCallback()"
                class="p-column-filter"
                placeholder="Search by name"
              />
            </template>
          </BColumn>
          <BColumn header="Country" filterField="country.name" style="min-width: 12rem">
            <template #body="{ data }">
              <div class="row align-items-center gx-2">
                <div class="col-auto">
                  <img
                    alt="flag"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    :class="`flag flag-${data.country.code}`"
                    style="width: 24px"
                  />
                </div>
                <div class="col">
                  {{ data.country.name }}
                </div>
              </div>
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <BInputText
                v-model="filterModel.value"
                type="text"
                @input="filterCallback()"
                class="p-column-filter"
                placeholder="Search by country"
              />
            </template>
          </BColumn>
          <BColumn
            header="Agent"
            filterField="representative"
            :showFilterMenu="false"
            :filterMenuStyle="{ width: '14rem' }"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              <div class="row align-items-center gx-2">
                <div class="col-auto">
                  <img
                    :alt="data.representative.name"
                    :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                    style="width: 32px"
                  />
                </div>
                <div class="col">
                  {{ data.representative.name }}
                </div>
              </div>
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <BMultiSelect
                v-model="filterModel.value"
                @change="filterCallback()"
                :options="representatives"
                optionLabel="name"
                placeholder="Any"
                class="p-column-filter"
                style="min-width: 14rem"
                :maxSelectedLabels="1"
              >
                <template #option="slotProps">
                  <div class="row align-items-center gx-2">
                    <div class="col-auto">
                      <img
                        :alt="slotProps.option.name"
                        :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                        style="width: 32px"
                      />
                    </div>
                    <div class="col">
                      {{ slotProps.option.name }}
                    </div>
                  </div>
                </template>
              </BMultiSelect>
            </template>
          </BColumn>
          <BColumn
            field="status"
            header="Status"
            :showFilterMenu="false"
            :filterMenuStyle="{ width: '14rem' }"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              <BTag :value="data.status" :severity="getSeverity(data.status)" />
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <BDropdown
                v-model="filterModel.value"
                @change="filterCallback()"
                :options="statuses"
                placeholder="Select One"
                class="p-column-filter"
                style="min-width: 12rem"
                :showClear="true"
              >
                <template #option="slotProps">
                  <BTag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
              </BDropdown>
            </template>
          </BColumn>
          <BColumn field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
            <template #body="{ data }">
              <i
                class="pi"
                :class="{
                  'pi-check-circle text-success': data.verified,
                  'pi-times-circle text-danger': !data.verified
                }"
              ></i>
            </template>
            <template #filter="{ filterModel, filterCallback }">
              <BTriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
            </template>
          </BColumn>
        </BDataTable>
      </div>
    </div>
  </div>
</template>
