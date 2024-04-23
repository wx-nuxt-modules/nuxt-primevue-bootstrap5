<script lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import { defineComponent, type PropType, h } from '#imports';
import { NuxtLink } from '#components';

export default defineComponent({
  props: {
    href: String,
    to: [String, Object] as PropType<RouteLocationRaw>,
    titleId: String
  },
  setup(props, { slots }) {
    return () => {
      const content = [
        h('div', { class: 'offcanvas-brand' }, slots.brand()),
        h('h5', { class: 'offcanvas-title', id: props.titleId }, slots.title())
      ];

      let link;

      if (props.to) {
        link = h(NuxtLink, { to: props.to, class: 'offcanvas-header-link' }, content);
      } else {
        link = h('a', { class: 'offcanvas-header-link', href: props.href }, content);
      }

      return h(
        'div',
        {
          class: 'offcanvas-header'
        },
        [link]
      );
    };
  }
});
</script>
