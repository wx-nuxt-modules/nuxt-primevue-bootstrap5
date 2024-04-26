<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';

const state = reactive({
  basic: <MenuItem[]>[
    { label: 'Dashboard', url: 'javascript:void(0);' },
    { label: 'Transactions', url: 'javascript:void(0);' },
    { label: 'Products', url: 'javascript:void(0);' },
    { label: 'Messages', url: 'javascript:void(0);' }
  ],
  controlled: {
    activeIndex: 0,
    items: [
      { label: 'Dashboard', url: 'javascript:void(0);' },
      { label: 'Transactions', url: 'javascript:void(0);' },
      { label: 'Products', url: 'javascript:void(0);' },
      { label: 'Messages', url: 'javascript:void(0);' }
    ]
  },
  content: {
    dynamic: <MenuItem[]>[
      { title: 'Tab 1', content: 'Tab 1 Content' },
      { title: 'Tab 2', content: 'Tab 2 Content' },
      { title: 'Tab 3', content: 'Tab 3 Content' },
      { title: 'Tab 4', content: 'Tab 4 Content' }
    ],
    controlled: {
      activeIndex: 0,
      items: [
        { title: 'Tab 1', content: 'Tab 1 Content' },
        { title: 'Tab 2', content: 'Tab 2 Content' },
        { title: 'Tab 3', content: 'Tab 3 Content' },
        { title: 'Tab 4', content: 'Tab 4 Content' }
      ]
    }
  }
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Табы</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BTabMenu :model="state.basic" />
      </div>
    </div>

    <h2>Плитки</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BTabMenu :model="state.basic" pill />
      </div>
    </div>

    <h2>Нижнее подчеркивание</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BTabMenu :model="state.basic" underline />
      </div>
    </div>

    <h2>Контролируемый</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-end g-2 mb-3">
          <div class="col-auto">
            <BButton
              label="1"
              severity="primary"
              rounded
              :outlined="state.controlled.activeIndex !== 0"
              @click="state.controlled.activeIndex = 0"
            />
          </div>
          <div class="col-auto">
            <BButton
              label="2"
              severity="primary"
              rounded
              :outlined="state.controlled.activeIndex !== 1"
              @click="state.controlled.activeIndex = 1"
            />
          </div>
          <div class="col-auto">
            <BButton
              label="3"
              severity="primary"
              rounded
              :outlined="state.controlled.activeIndex !== 2"
              @click="state.controlled.activeIndex = 2"
            />
          </div>
        </div>

        <BTabMenu :model="state.controlled.items" v-model:active-index="state.controlled.activeIndex" />
      </div>
    </div>

    <h2>С контентом (базовый)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BTabView>
          <BTabPanel header="Header I">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BTabPanel>
          <BTabPanel header="Header II">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed
              quia non numquam eius modi.
            </p>
          </BTabPanel>
          <BTabPanel header="Header III">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus.
            </p>
          </BTabPanel>
        </BTabView>
      </div>
    </div>

    <h2>С контентом (динамический)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BTabView>
          <BTabPanel v-for="(tab, idx) of state.content.dynamic" :key="idx" :header="tab.title">
            <p class="m-0">
              {{ tab.content }}
            </p>
          </BTabPanel>
        </BTabView>
      </div>
    </div>

    <h2>С контентом (контролируемый)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-end g-2 mb-3">
          <div class="col-auto">
            <BButton
              label="1"
              severity="primary"
              rounded
              :outlined="state.content.controlled.activeIndex !== 0"
              @click="state.content.controlled.activeIndex = 0"
            />
          </div>
          <div class="col-auto">
            <BButton
              label="2"
              severity="primary"
              rounded
              :outlined="state.content.controlled.activeIndex !== 1"
              @click="state.content.controlled.activeIndex = 1"
            />
          </div>
          <div class="col-auto">
            <BButton
              label="3"
              severity="primary"
              rounded
              :outlined="state.content.controlled.activeIndex !== 2"
              @click="state.content.controlled.activeIndex = 2"
            />
          </div>
        </div>

        <BTabView v-model:active-index="state.content.controlled.activeIndex">
          <BTabPanel v-for="(tab, idx) of state.content.controlled.items" :key="idx" :header="tab.title">
            <p class="m-0">
              {{ tab.content }}
            </p>
          </BTabPanel>
        </BTabView>
      </div>
    </div>
  </div>
</template>
