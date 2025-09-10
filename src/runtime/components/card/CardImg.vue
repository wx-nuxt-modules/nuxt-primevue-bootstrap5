<script lang="ts" setup>
import type { CardImgProps } from './types';
import { tryOmit } from '@windx-foobar/shared';
import { computed } from '#imports';

const props = withDefaults(defineProps<CardImgProps>(), {
  position: 'top'
});

const rootClasses = computed(() => [`card-img-${props.position}`]);
const bindedProps = computed(() => tryOmit(props, ['position']));
</script>

<template>
  <img v-bind="bindedProps" :class="rootClasses" :src="src" />
</template>
