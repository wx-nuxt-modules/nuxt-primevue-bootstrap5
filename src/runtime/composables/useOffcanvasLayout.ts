import { useState, computed } from '#imports';

import type { BPVOffcanvasSize } from '../types';
import { BPV_OFFCANVAS_LAYOUT_SIZE_SM, BPV_OFFCANVAS_LAYOUT_SIZE_LG, BPV_OFFCANVAS_LAYOUT_SIZE } from '../constants';

interface Options {
  initialSize?: BPVOffcanvasSize;
}

export function useOffcanvasLayout(options: Options = {}) {
  const _size = useState<BPVOffcanvasSize>(
    'offcanvas-layout:size',
    () => options.initialSize || BPV_OFFCANVAS_LAYOUT_SIZE_LG
  );

  const size = computed<BPVOffcanvasSize>(() => _size.value);
  const isSm = computed<boolean>(() => size.value === BPV_OFFCANVAS_LAYOUT_SIZE_SM);
  const isLg = computed<boolean>(() => size.value === BPV_OFFCANVAS_LAYOUT_SIZE_LG);

  function toggle() {
    _size.value = BPV_OFFCANVAS_LAYOUT_SIZE.find((item) => item !== _size.value)!;
  }

  return {
    size,
    isSm,
    isLg,
    toggle
  };
}
