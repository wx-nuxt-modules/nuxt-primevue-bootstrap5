import type { ColumnPassThroughOptions, ColumnPassThroughMethodOptions } from './types';

import { buttonPTIcon, buttonPTRoot } from '../button';
import { overlaypanelPTRoot } from '../overlaypanel';
import { sharedDropdownPT } from '../dropdown';
import { isUndefined, isTruthy } from '../../../utils/validators';
import { registerResizeDbClick } from './plugins';

export const columnPT = <ColumnPassThroughOptions>{
  headerCell: ({ column, parent, instance }: ColumnPassThroughMethodOptions & { column: any }) => {
    const isResiableColumns = parent?.props?.resizableColumns;
    const isFitResizableMode = (parent?.props?.columnResizeMode || 'fit') === 'fit';

    if (isResiableColumns && isFitResizableMode) {
      // registerResizeDbClick(instance);
    }

    const classes = [
      'bpv-table-column bpv-table-column-header',
      column.props &&
        !isUndefined(column.props.sortable) &&
        column.props.sortable !== false &&
        'bpv-table-column-sortable',
      column.context && column.context.sorted && 'bpv-table-column-sorted',
      column.parent && column.parent.props && column.parent.props.filterDisplay && 'bpv-table-column-filterable',
      isResiableColumns && 'bpv-table-column-resizable',
      column.props && [true, ''].includes(column.props.frozen) && 'bpv-table-column-frozen',
      column.parent && column.parent.props && column.parent.props.reorderableColumns && 'bpv-table-column-reorderable'
    ];

    return { class: classes };
  },
  bodyCell: () => {
    const classes = ['bpv-table-column'];

    return { class: classes };
  },
  columnResizer: (...args) => {
    const classes = ['bpv-table-column-resizer'];

    return { class: classes };
  },
  sort: () => {
    const classes = ['bpv-table-column-sort'];

    return { class: classes };
  },
  columnFilter: () => {
    const classes = ['bpv-table-column-filter'];

    return { class: classes };
  },
  filterMenuButton: () => {
    const { class: buttonClasses } = buttonPTRoot({
      block: false,
      size: 'sm',
      text: undefined,
      rounded: undefined,
      raised: undefined,
      link: undefined,
      severity: undefined,
      outlined: undefined
    });

    const classes = [...buttonClasses, 'bpv-table-column-filter-menu-button'];

    return { class: classes };
  },
  filterMenuIcon: () => {
    const { class: buttonClasses } = buttonPTIcon({ iconPos: undefined });

    const classes = [...buttonClasses, 'bpv-table-column-filter-menu-button-icon'];

    return { class: classes };
  },
  headerContent: () => {
    const classes = ['bpv-table-column-header-content'];

    return { class: classes };
  },
  filterOverlay: () => {
    const { class: overlaypanelClasses } = overlaypanelPTRoot();

    const classes = [...overlaypanelClasses, 'bpv-table-column-filter-overlay'];

    return { class: classes };
  },
  filterOperatorDropdown: {
    input: () =>
      sharedDropdownPT.input({
        isPlaceholder: false,
        isDisabled: false,
        size: 'sm',
        state: undefined
      }),
    panel: () => sharedDropdownPT.panel({ size: 'sm' })
  },
  filterMatchModeDropdown: {
    root: () => {
      const { class: baseDropdownClass } = sharedDropdownPT.root();

      return { class: [...baseDropdownClass, 'bpv-table-column-filter-overlay-match-mode'] };
    },
    input: () =>
      sharedDropdownPT.input({
        isPlaceholder: false,
        isDisabled: false,
        size: 'sm',
        state: undefined
      }),
    panel: () => sharedDropdownPT.panel({ size: 'sm' })
  },
  filterAddRuleButton: {
    root: () => {
      const { class: btnClasses } = buttonPTRoot({
        block: true,
        size: 'sm',
        severity: 'info',
        outlined: true
      });

      return { class: [...btnClasses, 'bpv-table-column-filter-overlay-add-button'] };
    }
  },
  filterRemoveButton: {
    root: () => {
      const { class: btnClasses } = buttonPTRoot({
        block: true,
        size: 'sm',
        severity: 'danger',
        outlined: true
      });

      return { class: [...btnClasses, 'bpv-table-column-filter-overlay-remove-button'] };
    }
  },
  filterButtonbar: () => {
    const classes = ['bpv-table-column-filter-overlay-button-bar'];

    return { class: classes };
  },
  filterClearButton: {
    root: () => {
      const { class: btnClasses } = buttonPTRoot({
        size: 'sm',
        severity: 'primary',
        outlined: true
      });

      return { class: [...btnClasses, 'bpv-table-column-filter-overlay-clear-button'] };
    }
  },
  filterApplyButton: {
    root: () => {
      const { class: btnClasses } = buttonPTRoot({
        size: 'sm',
        severity: 'primary'
      });

      return { class: [...btnClasses, 'bpv-table-column-filter-overlay-apply-button'] };
    }
  },
  filterConstraints: () => {
    const classes = ['bpv-table-column-filter-constraints'];

    return { class: classes };
  },
  filterConstraint: () => {
    const classes = ['bpv-table-column-filter-constraint-item'];

    return { class: classes };
  },
  headerTitle: () => {
    const classes = ['bpv-table-column-header-title'];

    return { class: classes };
  },
  rowReorderIcon: () => {
    return {
      class: ['bpv-table-column-reorderablerow-handle']
    };
  },
  transition: {
    name: 'bpv-overlaypanel'
  }
};
