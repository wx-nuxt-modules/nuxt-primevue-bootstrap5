<script setup lang="ts">
const state = reactive({
  basic: false,
  position: {
    left: false,
    right: false,
    top: false,
    bottom: false
  },
  size: false,
  template: false
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Вне холста (sidebar | offcanvas)</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BSidebar v-model:visible="state.basic" header="Sidebar">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </BSidebar>

        <div class="d-flex justify-content-center">
          <BButton icon="pi pi-arrow-right" severity="primary" @click="state.basic = true" />
        </div>
      </div>
    </div>

    <h2>Позиционирование</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BSidebar v-model:visible="state.position.left" header="Left Sidebar">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </BSidebar>

        <BSidebar v-model:visible="state.position.right" header="Right Sidebar" position="right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </BSidebar>

        <BSidebar v-model:visible="state.position.top" header="Top Sidebar" position="top">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </BSidebar>

        <BSidebar v-model:visible="state.position.bottom" header="Bottom Sidebar" position="bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </BSidebar>

        <div class="row justify-content-center g-2">
          <div class="col-auto">
            <BButton icon="pi pi-arrow-right" severity="primary" @click="state.position.left = true" />
          </div>
          <div class="col-auto">
            <BButton icon="pi pi-arrow-left" severity="primary" @click="state.position.right = true" />
          </div>
          <div class="col-auto">
            <BButton icon="pi pi-arrow-up" severity="primary" @click="state.position.top = true" />
          </div>
          <div class="col-auto">
            <BButton icon="pi pi-arrow-down" severity="primary" @click="state.position.bottom = true" />
          </div>
        </div>
      </div>
    </div>

    <h2>Размеры</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BSidebar v-model:visible="state.size" header="Sidebar" :style="{ width: '600px' }">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </BSidebar>

        <div class="row justify-content-center g-2">
          <div class="col-auto">
            <BButton icon="pi pi-arrow-right" severity="primary" @click="state.size = true" />
          </div>
        </div>
      </div>
    </div>

    <h2>Шаблон</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BSidebar v-model:visible="state.template">
          <template #header>
            <div class="row align-items-center gx-2">
              <div class="col-auto">
                <img
                  class="rounded-circle"
                  src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  alt="Avatar"
                  width="30"
                />
              </div>
              <div class="col">
                <strong>Amy Elsner</strong>
              </div>
            </div>
          </template>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </BSidebar>

        <div class="row justify-content-center g-2">
          <div class="col-auto">
            <BButton icon="pi pi-arrow-right" severity="primary" @click="state.template = true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
