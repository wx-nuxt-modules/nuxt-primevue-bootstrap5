<script lang="ts" setup>
const basicOp = ref();

const states = reactive({
  basic: {
    members: [
      { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
    ]
  }
});

const eventEmitters = {
  toggleBasic(event: PointerEvent) {
    basicOp.value.toggle(event);
  }
};
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Панель поверх (OverlayPanel)</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовая</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0" :style="{ marginTop1: '500px!important' }">
        <div class="d-flex justify-content-center">
          <BButton
            severity="primary"
            type="button"
            icon="pi pi-share-alt"
            label="Поделиться"
            @click="eventEmitters.toggleBasic"
          />
        </div>

        <BOverlayPanel ref="basicOp">
          <div class="d-flex flex-column" :style="{ width: '25rem' }">
            <div>
              <span class="fw-bold text-black d-block mb-2">Share this document</span>
              <BInputText value="https://primevue.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly />
            </div>
            <div class="mt-2">
              <span class="fw-bold text-black d-block mb-2">Invite Member</span>
              <BButton label="Invite" icon="pi pi-users" severity="primary" size="sm" />
            </div>
            <div class="mt-2">
              <span class="fw-bold text-black d-block">Team Members</span>
              <ul class="list-none p-0 m-0 d-flex flex-column">
                <li v-for="member in states.basic.members" :key="member.name" class="d-flex align-items-center mt-2">
                  <img
                    :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`"
                    :alt="member.name"
                    style="width: 32px"
                    class="me-2"
                  />
                  <div>
                    <span class="fw-bold">{{ member.name }}</span>
                    <div class="text-sm text-secondary">{{ member.email }}</div>
                  </div>
                  <div class="d-flex align-items-center justify-content-end text-secondary ms-auto text-sm">
                    <span class="px-2">{{ member.role }}</span>
                    <i class="pi pi-angle-down"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </BOverlayPanel>
      </div>
    </div>
  </div>
</template>
