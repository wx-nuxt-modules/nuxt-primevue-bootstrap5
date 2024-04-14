<script setup lang="ts">
import { useProducts, type ProductSmallItem } from '../../composables/products';

onMounted(() => {
  useProducts()
    .getProductsSmall()
    .then((data) => {
      products.splice(0, products.length, ...data.slice(0, 9));
    });
});

const products = reactive<ProductSmallItem[]>([]);
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const getSeverity = (status: ProductSmallItem['inventoryStatus']) => {
  switch (status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warning';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return undefined;
  }
};

const toMoney = (val) => {
  return new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(+val);
};
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Карусель</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовая</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BCarousel :value="products" :num-scroll="3" :num-visible="3" :responsive-options="responsiveOptions">
          <template #item="{ data }">
            <BCard :title="data.name" class="mx-2">
              <template #body>
                <BCardBody>
                  <div class="position-relative">
                    <img class="w-100 rounded" :src="data.image" :alt="data.name" />
                    <BBadge
                      :severity="getSeverity(data.inventoryStatus)"
                      :value="data.inventoryStatus"
                      class="position-absolute"
                      :style="{ left: '5px', top: '5px' }"
                    />
                  </div>
                  <BCardText>{{ data.name }}</BCardText>

                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <strong class="fs-5">{{ toMoney(data.price) }}</strong>
                    </div>
                    <div class="col-auto">
                      <div class="row gx-1">
                        <div class="col-6">
                          <BButton icon="pi pi-heart" severity="danger" size="sm" outlined />
                        </div>
                        <div class="col-6">
                          <BButton icon="pi pi-shopping-cart" severity="primary" size="sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </template>
            </BCard>
          </template>
        </BCarousel>
      </div>
    </div>

    <h2>Зацикленная</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BCarousel :value="products" :num-scroll="1" :num-visible="3" circular :responsive-options="responsiveOptions">
          <template #item="{ data }">
            <BCard :title="data.name" class="mx-2">
              <template #body>
                <BCardBody>
                  <div class="position-relative">
                    <img class="w-100 rounded" :src="data.image" :alt="data.name" />
                    <BBadge
                      :severity="getSeverity(data.inventoryStatus)"
                      :value="data.inventoryStatus"
                      class="position-absolute"
                      :style="{ left: '5px', top: '5px' }"
                    />
                  </div>
                  <BCardText>{{ data.name }}</BCardText>

                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <strong class="fs-5">{{ toMoney(data.price) }}</strong>
                    </div>
                    <div class="col-auto">
                      <div class="row gx-1">
                        <div class="col-6">
                          <BButton icon="pi pi-heart" severity="danger" size="sm" outlined />
                        </div>
                        <div class="col-6">
                          <BButton icon="pi pi-shopping-cart" severity="primary" size="sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </template>
            </BCard>
          </template>
        </BCarousel>
      </div>
    </div>

    <h2>Автопроигрование (интервал 3 сек)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BCarousel
          :value="products"
          :num-scroll="1"
          :num-visible="3"
          :responsive-options="responsiveOptions"
          circular
          :autoplay-interval="3000"
        >
          <template #item="{ data }">
            <BCard :title="data.name" class="mx-2">
              <template #body>
                <BCardBody>
                  <div class="position-relative">
                    <img class="w-100 rounded" :src="data.image" :alt="data.name" />
                    <BBadge
                      :severity="getSeverity(data.inventoryStatus)"
                      :value="data.inventoryStatus"
                      class="position-absolute"
                      :style="{ left: '5px', top: '5px' }"
                    />
                  </div>
                  <BCardText>{{ data.name }}</BCardText>

                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <strong class="fs-5">{{ toMoney(data.price) }}</strong>
                    </div>
                    <div class="col-auto">
                      <div class="row gx-1">
                        <div class="col-6">
                          <BButton icon="pi pi-heart" severity="danger" size="sm" outlined />
                        </div>
                        <div class="col-6">
                          <BButton icon="pi pi-shopping-cart" severity="primary" size="sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </template>
            </BCard>
          </template>
        </BCarousel>
      </div>
    </div>

    <h2>Вертикальная</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BCarousel
          :value="products"
          :num-scroll="1"
          :num-visible="1"
          orientation="vertical"
          vertical-view-port-height="320px"
        >
          <template #item="{ data }">
            <BCard :title="data.name" style="width: 300px">
              <template #body>
                <BCardBody>
                  <div class="position-relative">
                    <img class="w-100 rounded" :src="data.image" :alt="data.name" />
                    <BBadge
                      :severity="getSeverity(data.inventoryStatus)"
                      :value="data.inventoryStatus"
                      class="position-absolute"
                      :style="{ left: '5px', top: '5px' }"
                    />
                  </div>
                  <BCardText>{{ data.name }}</BCardText>

                  <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                      <strong class="fs-5">{{ toMoney(data.price) }}</strong>
                    </div>
                    <div class="col-auto">
                      <div class="row gx-1">
                        <div class="col-6">
                          <BButton icon="pi pi-heart" severity="danger" size="sm" outlined />
                        </div>
                        <div class="col-6">
                          <BButton icon="pi pi-shopping-cart" severity="primary" size="sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </template>
            </BCard>
          </template>
        </BCarousel>
      </div>
    </div>
  </div>
</template>
