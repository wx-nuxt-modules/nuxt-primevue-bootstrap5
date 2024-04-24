<script lang="ts" setup>
const props = reactive({
  templates: { first: 0 }
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Пагинация</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовое</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BPaginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]" alignment="center" />
      </div>
    </div>

    <h2>Шаблоны</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BPaginator
          v-model:first="props.templates.first"
          :rows="1"
          :total-records="12"
          alignment="center"
          template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        />

        <div class="p-3">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-7">
              <img
                :src="`https://primefaces.org/cdn/primevue/images/nature/nature${props.templates.first + 1}.jpg`"
                :alt="props.templates.first"
                class="rounded-3 w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2>Своя надпись о текущей странице</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BPaginator
          :rows="10"
          :total-records="120"
          alignment="center"
          template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="Показаны с {first} по {last} из {totalRecords}"
        />
      </div>
    </div>

    <h2>Адаптивность</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BPaginator
          :template="{
            sm: 'PrevPageLink CurrentPageReport NextPageLink',
            md: 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
            lg: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
          }"
          :rows="10"
          :totalRecords="120"
        />
      </div>
    </div>
  </div>
</template>
