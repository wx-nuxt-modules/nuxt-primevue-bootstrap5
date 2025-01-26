<script lang="ts" setup>
const toast = useToast();

// non-reactive
let destroyInterval: (() => void) | undefined = undefined;
// end non-reactive

const dynamicValue = ref(0);

const startProgress = () => {
  const intervalId = setInterval(() => {
    let newValue = dynamicValue.value + Math.floor(Math.random() * 10) + 1;
    if (newValue >= 100) {
      newValue = 100;
      toast.add({
        severity: 'info',
        summary: 'Success',
        detail: 'Успешно завершено',
        life: 1000,
        group: 'progress-bar-dynamic'
      });

      endProgress();
    }
    dynamicValue.value = newValue;
  }, 500);

  destroyInterval = () => clearInterval(intervalId);
};

const endProgress = () => {
  destroyInterval && destroyInterval();
  destroyInterval = undefined;
};

onMounted(() => {
  startProgress();
});

onBeforeUnmount(() => {
  endProgress();
});
</script>

<template>
  <div>
    <h2>Динамическое</h2>
    <p>Компонент реагирует на изменение пропса <code>value</code></p>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <BProgressBar :value="dynamicValue" />

        <BToast group="progress-bar-dynamic" />
      </div>
    </div>
  </div>
</template>
