<script lang="ts" setup>
const home = {
  icon: 'pi pi-home',
  to: '/'
};

const items = reactive([
  { label: 'Electronics' },
  { label: 'Computer' },
  { label: 'Accessories' },
  { label: 'Keyboard' },
  { label: 'Wireless' }
]);
const userItems = reactive([
  { icon: 'pi pi-sitemap' },
  { icon: 'pi pi-book' },
  { icon: 'pi pi-wallet' },
  { icon: 'pi pi-shopping-bag' },
  { icon: 'pi pi-calculator' }
]);
const routeItems = reactive([
  { label: 'Компоненты', to: '/components', icon: 'pi pi-sitemap' },
  { label: 'Хлебные крошки', to: '/components/breadcrumb' }
]);
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Хлебные крошки</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовые</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BBreadcrumb :home="home" :model="items" />
      </div>
    </div>

    <h2>Пользовательские</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BBreadcrumb :home="home" :model="userItems">
          <template #item="{ item }">
            <a :href="item.url || '#'">
              <span :class="item.icon" />
            </a>
          </template>

          <template #separator>|</template>
        </BBreadcrumb>
      </div>
    </div>

    <h2>Используя Vue router</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BBreadcrumb :home="home" :model="routeItems">
          <template #item="{ item, props }">
            <NuxtLink v-if="item.to" v-slot="{ href, navigate, isExactActive }" :to="item.to" custom>
              <a
                :href="!isExactActive ? href : undefined"
                :class="{ active: isExactActive }"
                v-bind="props.action"
                @click="navigate"
              >
                <span v-if="item.icon" :class="[item.icon, { 'me-2': !!item.label }]" />
                <span class="font-semibold">{{ item.label }}</span>
              </a>
            </NuxtLink>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
              <span class="text-color">{{ item.label }}</span>
            </a>
          </template>
        </BBreadcrumb>
      </div>
    </div>
  </div>
</template>
