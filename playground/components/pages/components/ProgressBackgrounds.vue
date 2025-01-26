<template>
  <div>
    <h2>Фон</h2>
    <p>
      Передайте значение фона пропсом <code>severity</code>. По умолчанию используется значение <code>primary</code>.
    </p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BProgressBar :value="25" severity="success" label="Success progress bar" />
        <BProgressBar :value="50" severity="info" label="Info progress bar" />
        <BProgressBar :value="75" severity="warning" label="Warning progress bar" />
        <BProgressBar :value="100" severity="danger" label="Danger progress bar" />
      </div>
    </div>
  </div>
</template>
