<script lang="ts" setup>
const { isSm, isLg } = useOffcanvasLayout();
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Вне холста (макет)</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовое</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0 py-0 ps-0">
        <BOffcanvasLayout>
          <BOffcanvasLayoutAside title="Левое меню">
            <ul>
              <li v-for="num of [1, 2, 3, 4]">
                <span class="prefix">List item</span>
                {{ num }}
              </li>
            </ul>
          </BOffcanvasLayoutAside>

          <BOffcanvasLayoutBody>
            <div class="container-fluid">Any content</div>
          </BOffcanvasLayoutBody>
        </BOffcanvasLayout>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bpv-offcanvas-layout-aside {
  &.bpv-offcanvas-layout-aside-sm {
    .offcanvas-body .prefix {
      display: none;
    }

    ::v-deep(.offcanvas-title) {
      display: none;
    }
  }
}
</style>
