<template>
  <div>
    <h2>Анимированные полосы</h2>
    <p>С помощью пропса <code>striped</code> и пропса <code>animated</code> можно включить режим анимации полосок.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BProgressBar :value="80" :show-value="false" striped animated />
      </div>
    </div>
  </div>
</template>
