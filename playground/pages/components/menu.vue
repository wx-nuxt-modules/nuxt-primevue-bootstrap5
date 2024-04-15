<script lang="ts" setup>
const items = reactive({
  basic: [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
  ],
  group: [
    {
      label: 'Documents',
      items: [
        {
          label: 'New',
          icon: 'pi pi-plus'
        },
        {
          label: 'Search',
          icon: 'pi pi-search'
        }
      ]
    },
    {
      label: 'Profile',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-cog'
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out'
        }
      ]
    }
  ]
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Меню</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовое</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-3">
            <BMenu :model="items.basic" />
          </div>
        </div>
      </div>
    </div>

    <h2>Группировка</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-3">
            <BMenu :model="items.group" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
