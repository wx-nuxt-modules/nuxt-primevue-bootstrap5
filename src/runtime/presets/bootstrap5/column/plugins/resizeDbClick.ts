import type { ColumnPassThroughMethodOptions } from 'primevue/column';

import { DomHandler, ObjectUtils } from 'primevue/utils';

export function registerResizeDbClick(instance: ColumnPassThroughMethodOptions['instance']) {
  if (!instance) return;

  const ONCE_KEY = '__bpv-double-click__';
  const CONTENT_WIDTH_KEY = '__bpv-content-width-key__';

  const getColumnContentWidth = <T extends HTMLElement = HTMLElement>(el: T, offset: number = 0) => {
    const savedDisplay = el.style.display;

    let newWidth: number;

    el.style.display = 'inline-flex';
    newWidth = DomHandler.getWidth(el);

    if (savedDisplay) {
      el.style.display = savedDisplay;
    } else {
      el.style.removeProperty('display');
    }

    return newWidth + offset;
  };

  const registerEvent = <T extends HTMLElement = HTMLElement>(el: T) => {
    const handler = (event: HTMLElementEventMap['dblclick']) => {
      const parentInstance = instance.$parentInstance.$parentInstance;

      const target = event.target as T;
      const parentEl = target.parentElement as any;

      if (ObjectUtils.isFunction(parentInstance.resizeTableCells)) {
        const contentEl = DomHandler.getNextElementSibling(target, '[data-pc-section="headercontent"]');
        const nextHeadingEl = DomHandler.getNextElementSibling(parentEl, '[data-pc-section="headercell"]');

        const offset = DomHandler.getOuterWidth(parentEl, true) - DomHandler.getWidth(parentEl);
        const oldWidth = DomHandler.getWidth(parentEl);
        const newWidth = getColumnContentWidth(contentEl, offset);

        if (parentEl.hasOwnProperty(CONTENT_WIDTH_KEY)) {
          const tempWidths = parentEl[CONTENT_WIDTH_KEY];

          if (
            Math.round(newWidth) === Math.round(tempWidths[1]) &&
            Math.round(oldWidth) === Math.round(tempWidths[0])
          ) {
            return;
          } else {
            delete parentEl[CONTENT_WIDTH_KEY];
          }
        }

        let nextWidth = undefined;
        if (nextHeadingEl) {
          const oldNextWidth = DomHandler.getWidth(nextHeadingEl);
          nextWidth = oldNextWidth + (oldWidth - newWidth);
        }

        parentInstance.resizeTableCells(newWidth, nextWidth);
        Object.defineProperty(parentEl, CONTENT_WIDTH_KEY, {
          value: [oldWidth, newWidth],
          enumerable: false,
          configurable: true,
          writable: true
        });
      }
    };

    el.addEventListener('dblclick', handler);

    return () => {
      el.removeEventListener('dblclick', handler);
    };
  };

  instance.$nextTick(() => {
    const el: HTMLElement = DomHandler.findSingle(instance.$el, '[data-pc-section="columnresizer"]');

    if (!el.hasOwnProperty(ONCE_KEY)) {
      Object.defineProperty(el, ONCE_KEY, {
        value: true,
        enumerable: false
      });

      if (instance.$parentInstance?.$parentInstance) {
        registerEvent(el);
      }
    }
  });
}
