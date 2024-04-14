<script setup lang="ts">
const items = reactive(
  Array(4)
    .fill(undefined)
    .map<{ id: number; title: string; content: string }>((_, idx) => ({
      id: idx + 1,
      title: `Tab ${idx + 1}`,
      content: `Content ${idx + 1}`
    }))
);

const activeIndex = ref(0);
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Аккордеон</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовый</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BAccordion :activeIndex="0">
          <BAccordionTab header="Header I">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header II">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed
              quia non numquam eius modi.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header III">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus.
            </p>
          </BAccordionTab>
        </BAccordion>
      </div>
    </div>

    <h2>Динамический</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BAccordion :activeIndex="0">
          <BAccordionTab v-for="item of items" :key="item.id" :header="item.title">
            <p class="m-0" v-html="item.content" />
          </BAccordionTab>
        </BAccordion>
      </div>
    </div>

    <h2>Открыты несколько</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BAccordion :activeIndex="[0]" multiple>
          <BAccordionTab header="Header I">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header II">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed
              quia non numquam eius modi.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header III">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus.
            </p>
          </BAccordionTab>
        </BAccordion>
      </div>
    </div>

    <h2>Выключен</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BAccordion :activeIndex="0">
          <BAccordionTab header="Header I">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header II">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed
              quia non numquam eius modi.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header III">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header IV" :disabled="true" />
        </BAccordion>
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
              :outlined="activeIndex !== 0"
              :disabled="activeIndex === 0"
              @click="activeIndex = 0"
            />
          </div>
          <div class="col-auto">
            <BButton
              label="2"
              severity="primary"
              rounded
              :outlined="activeIndex !== 1"
              :disabled="activeIndex === 1"
              @click="activeIndex = 1"
            />
          </div>
          <div class="col-auto">
            <BButton
              label="3"
              severity="primary"
              rounded
              :outlined="activeIndex !== 2"
              :disabled="activeIndex === 2"
              @click="activeIndex = 2"
            />
          </div>
        </div>

        <BAccordion v-model:active-index="activeIndex">
          <BAccordionTab header="Header I">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header II">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed
              quia non numquam eius modi.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header III">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus.
            </p>
          </BAccordionTab>
          <BAccordionTab header="Header IV" :disabled="true" />
        </BAccordion>
      </div>
    </div>

    <h2>Пользовательская реализация</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BAccordion :active-index="0">
          <BAccordionTab>
            <template #header>
              <div class="row g-2 align-items-center w-100">
                <div class="col" :style="{ maxWidth: '36px' }">
                  <img
                    class="img-fluid rounded-circle"
                    src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                    alt="avatar"
                  />
                </div>
                <div class="col-auto">Amy Elsner</div>
                <div class="col-auto ms-auto me-2">
                  <p class="mb-0">
                    <BBadge severity="success" rounded value="2" />
                  </p>
                </div>
              </div>
            </template>

            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BAccordionTab>
          <BAccordionTab>
            <template #header>
              <div class="row g-2 align-items-center w-100">
                <div class="col" :style="{ maxWidth: '36px' }">
                  <img
                    class="img-fluid rounded-circle"
                    src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
                    alt="avatar"
                  />
                </div>
                <div class="col-auto">Onayama Limba</div>
                <div class="col-auto ms-auto me-2">
                  <p class="mb-0">
                    <BBadge severity="success" rounded value="4" />
                  </p>
                </div>
              </div>
            </template>

            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BAccordionTab>
          <BAccordionTab>
            <template #header>
              <div class="row g-2 align-items-center w-100">
                <div class="col" :style="{ maxWidth: '36px' }">
                  <img
                    class="img-fluid rounded-circle"
                    src="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png"
                    alt="avatar"
                  />
                </div>
                <div class="col-auto">Ioni Bowcher</div>
                <div class="col-auto ms-auto me-2">
                  <p class="mb-0">
                    <BBadge severity="success" rounded value="2" />
                  </p>
                </div>
              </div>
            </template>

            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </BAccordionTab>
        </BAccordion>
      </div>
    </div>
  </div>
</template>
