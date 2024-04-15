<script lang="ts" setup>
const items = reactive({
  basic: [
    {
      label: 'File',
      icon: 'pi pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-plus',
          items: [
            {
              label: 'Document',
              icon: 'pi pi-file'
            },
            {
              label: 'Image',
              icon: 'pi pi-image'
            },
            {
              label: 'Video',
              icon: 'pi pi-video'
            }
          ]
        },
        {
          label: 'Open',
          icon: 'pi pi-folder-open'
        },
        {
          label: 'Print',
          icon: 'pi pi-print'
        }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-file-edit',
      items: [
        {
          label: 'Copy',
          icon: 'pi pi-copy'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        }
      ]
    },
    {
      label: 'Search',
      icon: 'pi pi-search'
    },
    {
      separator: true
    },
    {
      label: 'Share',
      icon: 'pi pi-share-alt',
      items: [
        {
          label: 'Slack',
          icon: 'pi pi-slack'
        },
        {
          label: 'Whatsapp',
          icon: 'pi pi-whatsapp'
        }
      ]
    }
  ]
});
</script>

<template>
  <div class="bd-intro pt-2 ps-lg-2">
    <h1 class="bd-title mb-0" id="content">Панельное меню</h1>
  </div>

  <div class="bd-content ps-lg-2">
    <h2>Базовое</h2>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div class="row justify-content-center">
          <div class="col-3">
            <BPanelMenu :model="items.basic" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
