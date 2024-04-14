<script setup lang="ts">
const messages = shallowRef<
  { id: number; severity: import('../../../src/runtime/types').BPVSeverity; content: string }[]
>([]);
const id = ref(1);
const sticky = ref(true);

function addMessages() {
  messages.value = [
    { id: id.value++, severity: 'info', content: 'Dynamic Info Alert' },
    { id: id.value++, severity: 'success', content: 'Dynamic Success Alert' },
    { id: id.value++, severity: 'warning', content: 'Dynamic Warning Alert' },
    { id: id.value++, severity: 'danger', content: 'Dynamic Danger Alert' }
  ];
}

function clearMessages() {
  messages.value = [];
}
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Уведомления</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовые</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BMessage>Alert Content</BMessage>
      </div>
    </div>

    <h2>Варианты</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BMessage severity="primary">Primary alert</BMessage>
        <BMessage severity="secondary">Secondary alert</BMessage>
        <BMessage severity="info">Info alert</BMessage>
        <BMessage severity="success">Success alert</BMessage>
        <BMessage severity="danger">Danger alert</BMessage>
        <BMessage severity="warning">Warning alert</BMessage>
        <BMessage severity="light">Light alert</BMessage>
        <BMessage severity="dark">Dark alert</BMessage>
      </div>
    </div>

    <h2>Динамические сообщения</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row g-2 mb-3">
          <div class="col-auto">
            <BButton label="Show" severity="primary" @click="addMessages" />
          </div>
          <div class="col-auto">
            <BButton label="Clear" severity="secondary" @click="clearMessages" />
          </div>
        </div>

        <transition-group name="alert" tag="div">
          <BMessage v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</BMessage>
        </transition-group>
      </div>
    </div>

    <h2>Нельзя закрыть</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BMessage :closable="false">Not Closable</BMessage>
      </div>
    </div>

    <h2>Временные сообщения</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton class="mb-3" severity="primary" label="Turn off Sticky" @click="sticky = false" />

        <BMessage severity="info" :sticky="sticky" :life="1000">Info alert</BMessage>
        <BMessage severity="success" :sticky="sticky" :life="2000">Success alert</BMessage>
        <BMessage severity="danger" :sticky="sticky" :life="3000">Danger alert</BMessage>
        <BMessage severity="warning" :sticky="sticky" :life="4000">Warning alert</BMessage>
      </div>
    </div>

    <h2>Пользовательская иконка</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BMessage severity="info" icon="pi pi-send">Info Alert</BMessage>
        <BMessage severity="success">
          <template #messageicon>
            <img
              src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              alt=""
              class="img-fluid rounded-circle me-2"
              :style="{ maxWidth: '28px' }"
            />
          </template>
          <span class="ml-2">How may I help you?</span>
        </BMessage>
      </div>
    </div>
  </div>
</template>
