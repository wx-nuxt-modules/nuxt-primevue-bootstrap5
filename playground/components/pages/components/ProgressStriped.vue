<template>
  <div>
    <h2>Полосатые</h2>
    <p>С помощью пропса <code>striped</code> можно включить режим полосками</p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BProgressBar :value="20" :show-value="false" striped />
        <BProgressBar :value="40" severity="success" :show-value="false" striped />
        <BProgressBar :value="60" severity="info" :show-value="false" striped />
        <BProgressBar :value="80" severity="warning" :show-value="false" striped />
        <BProgressBar :value="100" severity="danger" :show-value="false" striped />
      </div>
    </div>
  </div>
</template>
