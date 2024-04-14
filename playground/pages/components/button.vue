<script setup lang="ts">
const loading = ref(false);

const emulateLoad = async () => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loading.value = false;
};
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Кнопки</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовая</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton label="Отправить" />
      </div>
    </div>

    <h2>Ссылки</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton label="Ссылка" link />
        <NuxtLink to="https://example.org" target="_blank" class="px-1">
          <BButton severity="primary" label="Внешняя" />
        </NuxtLink>
        <NuxtLink to="/">
          <BButton severity="primary" type="submit" label="Внутренняя" />
        </NuxtLink>
      </div>
    </div>

    <h2>Иконки</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" icon="pi pi-check" aria-label="Submit" />
        <BButton severity="primary" icon="pi pi-check" label="Submit" />
        <BButton severity="primary" icon="pi pi-check" icon-pos="right" label="Submit" />
      </div>
    </div>

    <h2>Загрузка</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" icon="pi pi-search" label="Submit" :loading="loading" @click="emulateLoad" />
      </div>
    </div>

    <h2>Варианты</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" label="Primary" />
        <BButton severity="secondary" label="Secondary" />
        <BButton severity="success" label="Success" />
        <BButton severity="danger" label="Danger" />
        <BButton severity="warning" label="Warning" />
        <BButton severity="info" label="Info" />
        <BButton severity="light" label="Light" />
        <BButton severity="dark" label="Dark" />
        <BButton link>Link</BButton>
      </div>
    </div>

    <h2>Отключенная</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" label="Disabled" disabled />
      </div>
    </div>

    <h2>С тенью</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" label="Primary" raised />
        <BButton severity="secondary" label="Secondary" raised />
        <BButton severity="success" label="Success" raised />
        <BButton severity="danger" label="Danger" raised />
        <BButton severity="warning" label="Warning" raised />
        <BButton severity="info" label="Info" raised />
        <BButton severity="light" label="Light" raised />
        <BButton severity="dark" label="Dark" raised />
      </div>
    </div>

    <h2>Радиус</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" label="Primary" rounded />
        <BButton severity="secondary" label="Secondary" rounded />
        <BButton severity="success" label="Success" rounded />
        <BButton severity="danger" label="Danger" rounded />
        <BButton severity="warning" label="Warning" rounded />
        <BButton severity="info" label="Info" rounded />
        <BButton severity="light" label="Light" rounded />
        <BButton severity="dark" label="Dark" rounded />
      </div>
    </div>

    <h2>Текст</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" label="Primary" text />
        <BButton severity="secondary" label="Secondary" text />
        <BButton severity="success" label="Success" text />
        <BButton severity="danger" label="Danger" text />
        <BButton severity="warning" label="Warning" text />
        <BButton severity="info" label="Info" text />
        <BButton severity="light" label="Light" text />
        <BButton severity="dark" label="Dark" text />
      </div>
    </div>

    <h2>Текст с тенью</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" label="Primary" text raised />
        <BButton severity="secondary" label="Secondary" text raised />
        <BButton severity="success" label="Success" text raised />
        <BButton severity="danger" label="Danger" text raised />
        <BButton severity="warning" label="Warning" text raised />
        <BButton severity="info" label="Info" text raised />
        <BButton severity="light" label="Light" text raised />
        <BButton severity="dark" label="Dark" text raised />
      </div>
    </div>

    <h2>Контурные кнопки</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" label="Primary" outlined />
        <BButton severity="secondary" label="Secondary" outlined />
        <BButton severity="success" label="Success" outlined />
        <BButton severity="danger" label="Danger" outlined />
        <BButton severity="warning" label="Warning" outlined />
        <BButton severity="info" label="Info" outlined />
        <BButton severity="light" label="Light" outlined />
        <BButton severity="dark" label="Dark" outlined />
      </div>
    </div>

    <h2>Кнопки-иконки</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton icon="pi pi-check" severity="primary" aria-label="Filter" />
        <BButton icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
        <BButton icon="pi pi-search" severity="success" aria-label="Search" />
        <BButton icon="pi pi-user" severity="info" aria-label="User" />
        <BButton icon="pi pi-bell" severity="warning" aria-label="Notification" />
        <BButton icon="pi pi-times" severity="danger" aria-label="Cancel" />

        <br />

        <BButton icon="pi pi-check" severity="primary" rounded aria-label="Filter" />
        <BButton icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
        <BButton icon="pi pi-search" severity="success" rounded aria-label="Search" />
        <BButton icon="pi pi-user" severity="info" rounded aria-label="User" />
        <BButton icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
        <BButton icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />

        <br />

        <BButton icon="pi pi-check" severity="primary" rounded outlined aria-label="Filter" />
        <BButton icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
        <BButton icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
        <BButton icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
        <BButton icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
        <BButton icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />

        <br />

        <BButton icon="pi pi-check" severity="primary" text raised rounded aria-label="Filter" />
        <BButton icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
        <BButton icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
        <BButton icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
        <BButton icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
        <BButton icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />

        <br />

        <BButton icon="pi pi-check" severity="primary" text rounded />
        <BButton icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
        <BButton icon="pi pi-search" severity="success" text rounded aria-label="Search" />
        <BButton icon="pi pi-user" severity="info" text rounded aria-label="User" />
        <BButton icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
        <BButton icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
      </div>
    </div>

    <h2>Кнопка с бейджем</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BButton severity="primary" badge="2" label="Emails" />
        <BButton severity="primary" outlined label="Messages" badge="2" badge-severity="dark" />
      </div>
    </div>

    <h2>Группа кнопок</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="btn-group" role="group" aria-label="Basic example">
          <BButton label="Save" icon="pi pi-check" severity="primary" />
          <BButton label="Delete" icon="pi pi-trash" severity="primary" />
          <BButton label="Cancel" icon="pi pi-times" severity="primary" />
        </div>
      </div>
    </div>

    <h2>Пользовательская кнопка</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="btn-group" role="group" aria-label="Basic example">
          <BButton severity="primary" outlined>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 118 94" role="img">
              <title>Bootstrap</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              ></path>
            </svg>
          </BButton>
        </div>
      </div>
    </div>
  </div>
</template>
