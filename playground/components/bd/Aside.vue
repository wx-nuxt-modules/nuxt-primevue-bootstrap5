<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface MenuItem {
  title: string;
  items: { title: string; to: RouteLocationRaw }[];
}

const menu = reactive<MenuItem[]>([
  {
    title: 'Контент',
    items: [{ title: 'Таблицы с данными', to: '/content/datatable' }]
  },
  {
    title: 'Компоненты',
    items: [
      { title: 'Аккордеон', to: '/components/accordion' },
      { title: 'Уведомления', to: '/components/alert' },
      { title: 'Пуш уведомления', to: '/components/toast' },
      { title: 'Значки', to: '/components/badge' },
      { title: 'Крошки', to: '/components/breadcrumb' },
      { title: 'Кнопки', to: '/components/button' },
      { title: 'Карточки', to: '/components/card' },
      { title: 'Карусели', to: '/components/carousel' },
      { title: 'Меню', to: '/components/menu' },
      { title: 'Многоуровневое меню', to: '/components/tiered-menu' },
      { title: 'Панельное меню', to: '/components/panel-menu' },
      { title: 'Вне холста', to: '/components/offcanvas' },
      { title: 'Вне холста (макет)', to: '/components/offcanvas-layout' },
      { title: 'Пагинация', to: '/components/pagination' },
      { title: 'Панель поверх', to: '/components/overlaypanel' },
      { title: 'Табы', to: '/components/tabs' },
      { title: 'Прогрессбар', to: '/components/progress' }
    ]
  },
  {
    title: 'Формы',
    items: [
      { title: 'Базовое поле', to: '/forms/inputtext' },
      { title: 'Базовое поле (с маской)', to: '/forms/inputmask' },
      { title: 'Числовое поле', to: '/forms/inputnumber' },
      { title: 'Пароль', to: '/forms/password' },
      { title: 'Чекбокс', to: '/forms/checkbox' },
      { title: 'Радиокнопки', to: '/forms/radiobutton' },
      { title: 'Выпадающий список', to: '/forms/dropdown' },
      { title: 'Выпадающий список (множественный выбор)', to: '/forms/multiselect' },
      { title: 'Календарь', to: '/forms/calendar' },
      { title: 'Большое поле', to: '/forms/textarea' },
      { title: 'Кнопки с выбором', to: '/forms/selectbutton' },
      { title: 'Выбор цвета', to: '/forms/colorpicker' }
    ]
  },
  {
    title: 'Оверлеи',
    items: [
      { title: 'Модальное окно-подтверждение', to: '/overlay/confirm-dialog' },
      { title: 'Модальное окно', to: '/overlay/dialog' },
      { title: 'Динамическое модальное окно', to: '/overlay/dynamic-dialog' },
      { title: 'Подсказки', to: '/overlay/tooltip' }
    ]
  }
]);
</script>

<template>
  <aside class="bd-sidebar">
    <div class="offcanvas-lg offcanvas-start" tabindex="-1" id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel">
      <div class="offcanvas-body">
        <nav class="bd-links w-100" id="bd-docs-nav" aria-label="Docs navigation">
          <ul class="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
            <li v-for="item of menu" class="bd-links-group py-2">
              <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                {{ item.title }}
              </strong>
              <ul class="list-unstyled fw-normal pb-2 small">
                <li v-for="child of item.items">
                  <NuxtLink :to="child.to" class="bd-links-link d-inline-block rounded" exact-active-class="active">
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>
