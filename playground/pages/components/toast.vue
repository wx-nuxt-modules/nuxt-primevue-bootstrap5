<script setup lang="ts">
import type { BPVToastMessageOptions } from '#nuxt-primevue-bootstrap5/types';

const toast = useBpvToast();

const visibleCustomTemplate = ref(false);

function onClickShow(message: BPVToastMessageOptions) {
  toast.add(message);
}

function onClickShowMultiple() {
  toast.add({ summary: 'Default toast', detail: 'Default toast content', life: 3e3 });
  toast.add({ severity: 'success', summary: 'Success toast', detail: 'Success toast content', life: 3e3 });
  toast.add({ severity: 'danger', summary: 'Danger toast', detail: 'Danger toast content', life: 3e3 });
  toast.add({ severity: 'info', summary: 'Info toast', detail: 'Info toast content', life: 3e3 });
}

function onClickClear() {
  toast.removeAllGroups();
}

function onClickShowCustomTemplate() {
  if (!visibleCustomTemplate.value) {
    toast.add({ severity: 'success', summary: '5 + 5 = 10', group: 'ct' });
    visibleCustomTemplate.value = true;
  }
}

function onClickReplyCustomTemplate() {
  toast.removeGroup('ct');
  onCloseCustomTemplate();
}

function onCloseCustomTemplate() {
  visibleCustomTemplate.value = false;
}
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Пуш уведомления</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <BToast />
    <BToast position="top-left" group="tl" />
    <BToast position="bottom-left" group="bl" />
    <BToast position="bottom-right" group="br" />

    <h2>Базовые</h2>
    <p>
      Идеальное расположение Toast — это основной шаблон приложения, чтобы его мог использовать любой компонент
      приложения. Отдельное сообщение представлено интерфейсом сообщений, который определяет такие свойства, как цвет,
      заголовок и текст сообщения.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-auto">
            <BButton
              label="Показать"
              severity="primary"
              @click="onClickShow({ summary: 'Default toast', detail: 'Default toast content', life: 3e3 })"
            />
          </div>
        </div>
      </div>
    </div>

    <h2>Варианты</h2>
    <p>Проп <code>severity</code> указывает цветовой вариант сообщения.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center gx-2">
          <div class="col-auto">
            <BButton
              label="Success"
              severity="success"
              @click="
                onClickShow({
                  severity: 'success',
                  summary: 'Success toast',
                  detail: 'Success toast content',
                  life: 3e3
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Info"
              severity="info"
              @click="
                onClickShow({
                  severity: 'info',
                  summary: 'Info toast',
                  detail: 'Info toast content',
                  life: 3e3
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Warning"
              severity="warning"
              @click="
                onClickShow({
                  severity: 'warning',
                  summary: 'Warning toast',
                  detail: 'Warning toast content',
                  life: 3e3
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Danger"
              severity="danger"
              @click="
                onClickShow({
                  severity: 'danger',
                  summary: 'Danger toast',
                  detail: 'Danger toast content',
                  life: 3e3
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Primary"
              severity="primary"
              @click="
                onClickShow({
                  severity: 'primary',
                  summary: 'Primary toast',
                  detail: 'Primary toast content',
                  life: 3e3
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Secondary"
              severity="secondary"
              @click="
                onClickShow({
                  severity: 'secondary',
                  summary: 'Secondary toast',
                  detail: 'Secondary toast content',
                  life: 3e3
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Dark"
              severity="dark"
              @click="
                onClickShow({
                  severity: 'dark',
                  summary: 'Dark toast',
                  detail: 'Dark toast content',
                  life: 3e3
                })
              "
            />
          </div>
        </div>
      </div>
    </div>

    <h2>Позиционирование</h2>
    <p>
      Сообщение может быть нацелено на определенный компонент Toast, сопоставляя ключ <code>group</code>, тогда как
      местоположение настраивается в зависимости от <code>position</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center gx-2">
          <div class="col-auto">
            <BButton
              label="Top left"
              severity="primary"
              @click="
                onClickShow({
                  summary: 'Default toast',
                  detail: 'Default toast content',
                  life: 3e3,
                  group: 'tl'
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Bottom left"
              severity="primary"
              @click="
                onClickShow({
                  summary: 'Default toast',
                  detail: 'Default toast content',
                  life: 3e3,
                  group: 'bl'
                })
              "
            />
          </div>
          <div class="col-auto">
            <BButton
              label="Bottom right"
              severity="primary"
              @click="
                onClickShow({
                  summary: 'Default toast',
                  detail: 'Default toast content',
                  life: 3e3,
                  group: 'br'
                })
              "
            />
          </div>
        </div>
      </div>
    </div>

    <h2>Сразу несколько</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center gx-2">
          <div class="col-auto">
            <BButton label="Показать все" severity="primary" @click="onClickShowMultiple" />
          </div>
        </div>
      </div>
    </div>

    <h2>Закрепленное</h2>
    <p>
      Сообщение исчезает через количество миллисекунд, определенное в опции <code>life</code>. Опустите опцию
      <code>life</code>, чтобы сделать сообщение закрепленным.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center gx-2">
          <div class="col-auto">
            <BButton
              label="Показать"
              severity="primary"
              @click="onClickShow({ summary: 'Default toast', detail: 'Default toast content' })"
            />
          </div>
          <div class="col-auto">
            <BButton label="Очистить" severity="secondary" @click="onClickClear" />
          </div>
        </div>
      </div>
    </div>

    <h2>Свой шаблон сообщения</h2>
    <p>Пользовательский контент внутри сообщения определяется слотом <code>message(root)</code>.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BToast position="bottom-center" group="ct" @close="onCloseCustomTemplate">
          <template #message(root)="slotProps">
            <div class="toast-header">
              <div class="d-flex align-items-center g-2">
                <img
                  class="img-fluid rounded-circle bpv-toast-icon"
                  src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  width="28"
                  height="28"
                  alt="avatar"
                />
                <strong class="text-dark">Amy Elsner</strong>
              </div>
            </div>
            <div class="toast-body">
              <div class="mb-3 fs-5">
                {{ slotProps.message.summary }}
              </div>

              <BButton severity="dark" size="sm" label="Конечно" @click="onClickReplyCustomTemplate" />
            </div>
          </template>
        </BToast>

        <div class="row justify-content-center gx-2">
          <div class="col-auto">
            <BButton label="Показать" severity="primary" @click="onClickShowCustomTemplate" />
          </div>
        </div>
      </div>
    </div>

    <h2>Свой шаблон сообщения <span class="badge text-bg-warning">exclusive</span></h2>
    <div>
      Доступные слоты для переопределения

      <ul>
        <li><code>message(header)</code></li>
        <li><code>message(body)</code></li>
        <li><code>message(icon)</code></li>
        <li><code>message(closeicon)</code></li>
      </ul>
    </div>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BToast position="top-center" group="act" @close="onCloseCustomTemplate">
          <template #message(header)="slotProps">
            <div v-bind="slotProps.attrs">
              <div class="d-flex align-items-center g-2">
                <img
                  class="img-fluid rounded-circle bpv-toast-icon"
                  src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  width="28"
                  height="28"
                  alt="avatar"
                />
                <strong class="text-dark">{{ slotProps.message.summary }}</strong>
              </div>
            </div>
          </template>

          <template #message(body)="slotProps">
            <div v-bind="slotProps.attrs">
              <div class="mb-2">{{ slotProps.message.detail }}</div>

              <BButton label="Закрыть" severity="primary" size="sm" @click="slotProps.closeCallback()" />
            </div>
          </template>
        </BToast>

        <div class="row justify-content-center gx-2">
          <div class="col-auto">
            <BButton
              label="Показать"
              severity="primary"
              @click="
                onClickShow({
                  group: 'act',
                  summary: 'Hi!',
                  detail: 'Значимость этих проблем настолько очевидна, что сложившаяся структура организации.'
                })
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
