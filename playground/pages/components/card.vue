<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Карточки</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <div class="bd-callout bd-callout-warning">
      <p><strong>Ранняя версия!</strong></p>
      <p>Смотреть в <code>TODO.MD</code> для доработок!</p>
    </div>

    <h2>Базовые</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BCard :style="{ width: '25rem' }" title="Simple Card">
          <BCardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </BCardText>
        </BCard>
      </div>
    </div>

    <h2>Продвинутые (с картинкой)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="d-flex justify-content-center">
          <BCard style="width: 25rem; overflow: hidden">
            <template #img>
              <BCardImg src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" alt="user header" />
            </template>

            <template #title>
              <BCardTitle> <strong class="text-success">Advanced</strong> Card </BCardTitle>
            </template>
            <template #subtitle>
              <BCardSubtitle> <span class="text-info">Advanced</span> subtitle </BCardSubtitle>
            </template>

            <BCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
              cupiditate neque quas!
            </BCardText>

            <div class="row">
              <div class="col-6">
                <BButton label="Cancel" severity="secondary" outlined class="w-full" block />
              </div>
              <div class="col-6">
                <BButton label="Save" class="w-full" severity="primary" block />
              </div>
            </div>
          </BCard>
        </div>
      </div>
    </div>

    <h2>Продвинутые (с header/footer)</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="d-flex justify-content-center">
          <BCard style="width: 25rem; overflow: hidden">
            <template #header>
              <BCardHeader>Featured</BCardHeader>
            </template>

            <template #title>
              <BCardTitle> <strong class="text-success">Advanced</strong> Card </BCardTitle>
            </template>
            <template #subtitle>
              <BCardSubtitle> <span class="text-info">Advanced</span> subtitle </BCardSubtitle>
            </template>

            <BCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
              cupiditate neque quas!
            </BCardText>

            <div class="row">
              <div class="col-6">
                <BButton label="Cancel" severity="secondary" outlined class="w-full" block />
              </div>
              <div class="col-6">
                <BButton label="Save" class="w-full" severity="primary" block />
              </div>
            </div>

            <template #footer>
              <BCardFooter>2 days ago</BCardFooter>
            </template>
          </BCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
