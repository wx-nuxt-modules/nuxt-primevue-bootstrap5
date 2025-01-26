<template>
  <div>
    <h2>Фон</h2>
    <p>
      Передайте значение фона пропсом <code>severity</code>. По умолчанию используется значение <code>primary</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BProgressBar :value="25" severity="success" />
        <BProgressBar :value="50" severity="info" />
        <BProgressBar :value="75" severity="warning" />
        <BProgressBar :value="100" severity="danger" />
      </div>
    </div>
  </div>
</template>
