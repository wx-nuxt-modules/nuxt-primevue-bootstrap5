<script lang="ts" setup documentation>
const { getProductsMini } = useProducts();

const products = ref<Awaited<ReturnType<typeof getProductsMini>>>();
const selectedProduct = ref();
const loading = ref(true);
const metaKey = ref(true);

onMounted(() => {
  getProductsMini().then((data) => {
    products.value = data;
    loading.value = false;
  });
});
</script>

<template>
  <div>
    <BCheckboxWithLabel v-model="metaKey" label="MetaKey" binary />

    <BDataTable
      v-model:selection="selectedProduct"
      data-key="id"
      selection-mode="multiple"
      :value="products"
      :loading="loading"
      :meta-key-selection="metaKey"
      lazy
    >
      <BColumn field="code" header="Code" />
      <BColumn field="name" header="Name" />
      <BColumn field="category" header="Category" />
      <BColumn field="quantity" header="Quantity" />
    </BDataTable>
  </div>
</template>
