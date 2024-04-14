<script lang="ts" setup>
import type { CardProps } from './types';

import CardImg from './CardImg.vue';
import CardTitle from './CardTitle.vue';
import CardSubtitle from './CardSubtitle.vue';
import CardHeader from './CardHeader.vue';
import CardBody from './CardBody.vue';
import CardFooter from './CardFooter.vue';

const props = withDefaults(defineProps<CardProps>(), {
  imgPosition: 'top',
  titleTag: 'h5',
  subtitleTag: 'h6',
  headerTag: 'div',
  footerTag: 'div',
  bodyTag: 'div'
});
</script>

<template>
  <div class="card bpv-card">
    <slot v-if="!$slots.header" name="img">
      <CardImg
        v-if="imgSrc"
        :src="props.imgSrc"
        :position="props.imgPosition"
        :alt="props.imgAlt"
        :title="props.imgTitle"
      />
    </slot>

    <slot name="header">
      <CardHeader v-if="header" :tag="headerTag">
        {{ header }}
      </CardHeader>
    </slot>

    <slot name="body">
      <CardBody :tag="bodyTag">
        <slot name="title">
          <CardTitle v-if="title" :tag="titleTag">
            {{ title }}
          </CardTitle>
        </slot>

        <slot name="subtitle">
          <CardSubtitle v-if="subtitle" :tag="subtitleTag">
            {{ subtitle }}
          </CardSubtitle>
        </slot>

        <slot />
      </CardBody>
    </slot>

    <slot name="footer">
      <CardFooter v-if="footer" :tag="footerTag">
        {{ footer }}
      </CardFooter>
    </slot>
  </div>
</template>
