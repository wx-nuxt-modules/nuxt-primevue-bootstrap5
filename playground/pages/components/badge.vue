<script setup lang="ts"></script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Значки</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовые</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BBadge value="2" />
      </div>
    </div>

    <h2>Варианты</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row g-1">
          <div class="col-auto">
            <BBadge value="2" />
          </div>
          <div class="col-auto">
            <BBadge value="6" severity="primary" pill />
          </div>
          <div class="col-auto">
            <BBadge value="8" severity="success" />
          </div>
          <div class="col-auto">
            <BBadge value="4" severity="info" />
          </div>
          <div class="col-auto">
            <BBadge value="12" severity="warning" />
          </div>
          <div class="col-auto">
            <BBadge value="3" severity="danger" />
          </div>
        </div>
        <div class="row g-1">
          <div class="col-auto">
            <BBadge value="2" pill />
          </div>
          <div class="col-auto">
            <BBadge value="6" severity="primary" pill />
          </div>
          <div class="col-auto">
            <BBadge value="8" severity="success" pill />
          </div>
          <div class="col-auto">
            <BBadge value="4" severity="info" pill />
          </div>
          <div class="col-auto">
            <BBadge value="12" severity="warning" pill />
          </div>
          <div class="col-auto">
            <BBadge value="3" severity="danger" pill />
          </div>
        </div>
        <div class="row g-1">
          <div class="col-auto">
            <BBadge value="2" rounded />
          </div>
          <div class="col-auto">
            <BBadge value="6" severity="primary" rounded />
          </div>
          <div class="col-auto">
            <BBadge value="8" severity="success" rounded />
          </div>
          <div class="col-auto">
            <BBadge value="4" severity="info" rounded />
          </div>
          <div class="col-auto">
            <BBadge value="12" severity="warning" rounded />
          </div>
          <div class="col-auto">
            <BBadge value="3" severity="danger" rounded />
          </div>
        </div>
      </div>
    </div>

    <h2>Размеры</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row g-1 align-items-end">
          <div class="col-auto">
            <BBadge value="6" severity="success" size="xl" rounded />
          </div>
          <div class="col-auto">
            <BBadge value="4" severity="warning" size="lg" rounded />
          </div>
          <div class="col-auto">
            <BBadge value="2" rounded />
          </div>
        </div>
      </div>
    </div>

    <h2>Позиционирование</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row g-3 align-items-end">
          <div class="col-auto">
            <i class="pi pi-bell" style="font-size: 2rem" v-badge="2" />
          </div>
          <div class="col-auto">
            <i class="pi pi-calendar" style="font-size: 2rem" v-badge.danger="'5+'" />
          </div>
          <div class="col-auto">
            <i class="pi pi-envelope" style="font-size: 2rem" v-badge.danger />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
