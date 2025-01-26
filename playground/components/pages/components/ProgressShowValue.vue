<template>
  <div>
    <h2>Показ значения</h2>
    <p>С помощью пропса <code>show-value</code> можно управлять показом значения в прогресс баре.</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BProgressBar :value="50" :show-value="false" />
      </div>
    </div>
  </div>
</template>
