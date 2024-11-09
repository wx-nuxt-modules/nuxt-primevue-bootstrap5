import {
  BPV_SEVERITY,
  BPV_BADGE_SIZE,
  BPV_BUTTON_SIZE,
  BPV_FORM_STATE,
  BPV_OFFCANVAS_LAYOUT_SIZE,
  BPV_TABLE_SIZE,
  BPV_DROPDOWN_SIZE,
  BPV_PAGINATOR_ALIGNMENT,
  BPV_SIDEBAR_POSITION,
  BPV_DIALOG_SIZE
} from '../constants';

export type BPVSeverity = (typeof BPV_SEVERITY)[number];
export type BPVBadgeSize = (typeof BPV_BADGE_SIZE)[number];
export type BPVButtonSize = (typeof BPV_BUTTON_SIZE)[number];
export type BPVFormState = (typeof BPV_FORM_STATE)[number];
export type BPVOffcanvasSize = (typeof BPV_OFFCANVAS_LAYOUT_SIZE)[number];
export type BPVTableSize = (typeof BPV_TABLE_SIZE)[number];
export type BPVDialogSize = (typeof BPV_DIALOG_SIZE)[number];
export type BPVPaginatorAlignment = (typeof BPV_PAGINATOR_ALIGNMENT)[number];
export type BPVSidebarPosition = (typeof BPV_SIDEBAR_POSITION)[number];
export type BPVDropdownSize = (typeof BPV_DROPDOWN_SIZE)[number];
