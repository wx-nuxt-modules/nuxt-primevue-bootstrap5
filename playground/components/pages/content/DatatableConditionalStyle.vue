<script lang="ts" setup documentation>
const { getProductsSmall } = useProducts();

const products = ref<Awaited<ReturnType<typeof getProductsSmall>>>();
const loading = ref(true);

const rowClass = (data: NonNullable<typeof products.value>[number]) => {
  return [{ 'table-primary': data.category === 'обувь' }];
};
const rowStyle = (data: NonNullable<typeof products.value>[number]) => {
  if (data.quantity === 0) {
    return { fontWeight: 'bold', fontStyle: 'italic' };
  }
};
const stockClass = (data: NonNullable<typeof products.value>[number]) => {
  return [
    'rounded-circle d-inline-flex fw-bold justify-content-center align-items-center text-sm',
    {
      'bg-danger text-white': data.quantity === 0,
      'bg-primary text-white': data.quantity > 0 && data.quantity < 10,
      'bg-info': data.quantity > 10
    }
  ];
};

onMounted(() => {
  getProductsSmall().then((data) => {
    products.value = data;
    loading.value = false;
  });
});
</script>

<template>
  <BDataTable :value="products" :row-class="rowClass" :row-style="rowStyle">
    <BColumn field="code" header="Code" />
    <BColumn field="name" header="Name" />
    <BColumn field="category" header="Category" />
    <BColumn field="quantity" header="Quantity">
      <template #body="slotProps">
        <div :class="stockClass(slotProps.data)" :style="{ width: '2rem', height: '2rem' }">
          {{ slotProps.data.quantity }}
        </div>
      </template>
    </BColumn>
  </BDataTable>
</template>
