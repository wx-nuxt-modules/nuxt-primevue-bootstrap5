<script setup lang="ts">
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const { getCustomersMedium } = useCustomers();

const customers = ref();
const filters = ref();
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

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'country.name': {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  };
};

initFilters();

const formatDate = (value) => {
  return value.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const clearFilter = () => {
  initFilters();
};
const getCustomers = (data) => {
  return [...(data || [])].map((d) => {
    d.date = new Date(d.date);

    return d;
  });
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

const opened = new Set();
let timeoutId: NodeJS.Timeout | undefined = undefined;
const test = (action: string, event: { field: string; applyFilter: () => void }) => {
  switch (action) {
    case 'show':
      opened.add(event.field);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        event.applyFilter();
      }, 5e3);
      break;
    case 'hide':
      opened.delete(event.field);

      if (!opened.size) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
      break;
  }
};
</script>

<template>
  <div>
    <h4>Продвинутая</h4>
    <p>
      Когда пропс <code>filterDisplay</code> установлен в значение <code>menu</code>, фильтрация осуществляется через
      всплывающие окна с поддержкой нескольких ограничений и расширенных шаблонов..
    </p>

    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BDataTable
          v-model:filters="filters"
          :value="customers"
          paginator
          showGridlines
          :rows="10"
          dataKey="id"
          filterDisplay="menu"
          :loading="loading"
          :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"
          @column-filter-overlay-show="test('show', $event)"
          @column-filter-overlay-hide="test('hide', $event)"
        >
          <template #header>
            <div class="row justify-content-between">
              <div class="col-auto">
                <BButton
                  type="button"
                  severity="primary"
                  icon="pi pi-filter-slash"
                  label="Clear"
                  outlined
                  @click="clearFilter()"
                />
              </div>
              <div class="col-auto">
                <BInputText v-model="filters['global'].value" placeholder="Keyword Search" />
              </div>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <BColumn field="name" header="Name" style="min-width: 12rem" sortable>
            <template #body="{ data }">
              {{ data.name }}
            </template>
            <template #filter="{ filterModel }">
              <BInputText v-model="filterModel.value" type="text" size="sm" placeholder="Search by name" />
            </template>
          </BColumn>
          <BColumn header="Country" filterField="country.name" style="min-width: 12rem">
            <template #body="{ data }">
              <div class="row align-items-center g-2">
                <div class="col-auto">
                  <img
                    alt="flag"
                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                    :class="`flag flag-${data.country.code}`"
                    style="width: 24px"
                  />
                </div>
                <div class="col-auto">
                  {{ data.country.name }}
                </div>
              </div>
            </template>
            <template #filter="{ filterModel }">
              <BInputText v-model="filterModel.value" type="text" size="sm" placeholder="Search by country" />
            </template>
            <template #filterclear="{ filterCallback }">
              <BButton type="button" icon="pi pi-times" size="sm" @click="filterCallback()" severity="secondary" />
            </template>
            <template #filterapply="{ filterCallback }">
              <BButton type="button" icon="pi pi-check" size="sm" @click="filterCallback()" severity="success" />
            </template>
            <template #filterfooter>
              <div class="px-3 pt-0 pb-3 text-center">Customized Buttons</div>
            </template>
          </BColumn>
          <BColumn
            header="Agent"
            filterField="representative"
            :showFilterMatchModes="false"
            :filterMenuStyle="{ width: '14rem' }"
            style="min-width: 14rem"
          >
            <template #body="{ data }">
              <div class="row align-items-center g-2">
                <div class="col-auto">
                  <img
                    :alt="data.representative.name"
                    :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                    style="width: 32px"
                  />
                </div>
                <div class="col-auto">
                  {{ data.representative.name }}
                </div>
              </div>
            </template>
            <template #filter="{ filterModel }">
              <BMultiSelect
                v-model="filterModel.value"
                :options="representatives"
                optionLabel="name"
                placeholder="Any"
                size="sm"
              >
                <template #option="slotProps">
                  <div class="row align-items-center g-2 ms-2">
                    <div class="col-auto">
                      <img
                        :alt="slotProps.option.name"
                        :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                        style="width: 25px"
                      />
                    </div>
                    <div class="col-auto">{{ slotProps.option.name }}</div>
                  </div>
                </template>
              </BMultiSelect>
            </template>
          </BColumn>
          <BColumn header="Date" filterField="date" dataType="date" style="min-width: 10rem">
            <template #body="{ data }">
              {{ formatDate(data.date) }}
            </template>
            <template #filter="{ filterModel }">
              <BCalendar v-model="filterModel.value" dateFormat="dd.mm.yy" placeholder="dd.mm.yyyy" mask="99.99.9999" />
            </template>
          </BColumn>
          <BColumn header="Balance" filterField="balance" dataType="numeric" style="min-width: 10rem">
            <template #body="{ data }">
              {{ formatCurrency(data.balance) }}
            </template>
            <template #filter="{ filterModel }">
              <BInputNumber v-model="filterModel.value" mode="currency" currency="RUB" locale="ru-RU" size="sm" />
            </template>
          </BColumn>
          <BColumn header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
            <template #body="{ data }">
              <BTag :value="data.status" :severity="getSeverity(data.status)" />
            </template>
            <template #filter="{ filterModel }">
              <BDropdown
                v-model="filterModel.value"
                :options="statuses"
                placeholder="Select One"
                class="p-column-filter"
                showClear
              >
                <template #option="slotProps">
                  <BTag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
              </BDropdown>
            </template>
          </BColumn>
          <BColumn field="activity" header="Activity" :showFilterMatchModes="false" style="min-width: 12rem">
            <template #body="{ data }">
              <BProgressBar :value="data.activity" :showValue="false" style="height: 6px"></BProgressBar>
            </template>
            <template #filter="{ filterModel }">
              <BSlider v-model="filterModel.value" range class="m-3"></BSlider>
              <div class="flex align-items-center justify-content-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
              </div>
            </template>
          </BColumn>
          <BColumn
            field="verified"
            header="Verified"
            dataType="boolean"
            bodyClass="text-center"
            style="min-width: 8rem"
          >
            <template #body="{ data }">
              <i
                class="pi"
                :class="{
                  'pi-check-circle text-green-500 ': data.verified,
                  'pi-times-circle text-red-500': !data.verified
                }"
              ></i>
            </template>
            <template #filter="{ filterModel }">
              <label for="verified-filter" class="font-bold"> Verified </label>
              <BTriStateCheckbox v-model="filterModel.value" inputId="verified-filter" />
            </template>
          </BColumn>
        </BDataTable>
      </div>
    </div>
  </div>
</template>
