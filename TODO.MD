### Bootstrap PrimeVue TASKS

- [ ] Создать кастомный компонент карточки, т.к. базовый имеет реализацию, не совместимую с bootstrap
  - Опираться на bootstrap-vue
  - Что сходу вспомнил
    - [x] Добавить пропсы `title`, `title-html`, `title-tag[default='h5']`
    - [x] Добавить пропсы `subtitle`, `subtitle-html`, `subtitle-tag[default='h6']`
    - [x] Добавить пропсы `img-src`, `img-alt`, `img-title` (из интерфейса `ImgHTMLAttributes`)
    - [ ] Пропс `img-src` должен учитывать что src может быть из @/assets, а не только из public (в bootstrap-vue есть решение)
    - [x] Точно оставить слоты `header`, `body`, `footer`, `title`
    - [x] Добавить отдельные компоненты - `BCardText[props=tag[default='p']]`, `BCardTitle[props=tag[default='h5']]`, `BCardSubtitle[props=tag[default='h6']]`, `BCardImg[props=...ImgHTMLAttributes]`
