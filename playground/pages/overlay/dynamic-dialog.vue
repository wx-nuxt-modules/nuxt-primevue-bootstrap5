<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Динамическое модальное окно</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <PagesOverlayDynamicDialogExample />
  </div>

  <BDynamicDialog />
  <BToast group="dynamic-dialog">
    <template #message(body)="slotProps">
      <div v-bind="slotProps.attrs">
        <code>{{ slotProps.message.detail }}</code>
      </div>
    </template>
  </BToast>
</template>
