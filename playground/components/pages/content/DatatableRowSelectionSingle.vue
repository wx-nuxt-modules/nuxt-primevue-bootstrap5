<script lang="ts" setup documentation>
const { getProductsMini } = useProducts();

const products = ref<Awaited<ReturnType<typeof getProductsMini>>>();
const selectedProduct = ref();
const loading = ref(true);

onMounted(() => {
  getProductsMini().then((data) => {
    products.value = data;
    loading.value = false;
  });
});
</script>

<template>
  <BDataTable
    v-model:selection="selectedProduct"
    data-key="id"
    selection-mode="single"
    :value="products"
    :loading="loading"
    lazy
  >
    <BColumn field="code" header="Code" />
    <BColumn field="name" header="Name" />
    <BColumn field="category" header="Category" />
    <BColumn field="quantity" header="Quantity" />
  </BDataTable>
</template>
