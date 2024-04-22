import { useState, computed } from '#imports';

import type { BPVOffcanvasSizes } from '../types';
import { BPV_OFFCANVAS_LAYOUT_SIZE_SM, BPV_OFFCANVAS_LAYOUT_SIZE_LG, BPV_OFFCANVAS_LAYOUT_SIZES } from '../constants';

interface Options {
  initialSize?: BPVOffcanvasSizes;
}

export function useOffcanvasLayout(options: Options = {}) {
  const _size = useState<BPVOffcanvasSizes>(
    'offcanvas-layout:size',
    () => options.initialSize || BPV_OFFCANVAS_LAYOUT_SIZE_LG
  );

  const size = computed<BPVOffcanvasSizes>(() => _size.value);
  const isSm = computed<boolean>(() => size.value === BPV_OFFCANVAS_LAYOUT_SIZE_SM);
  const isLg = computed<boolean>(() => size.value === BPV_OFFCANVAS_LAYOUT_SIZE_LG);

  function toggle() {
    _size.value = BPV_OFFCANVAS_LAYOUT_SIZES.find((item) => item !== _size.value)!;
  }

  return {
    size,
    isSm,
    isLg,
    toggle
  };
}
