import {
  Z_INDEX
} from '@alicloud/console-base-theme';

import {
  IDialogProps
} from '../types';

import {
  EDialogMode
} from './enum';

/**
 * 系统级 Dialog 共享的 props（不可覆盖），需要将这些 props 从类型中 omit 掉
 */
export const SYS_DIALOG_PROPS_FIXED: Partial<IDialogProps<any, any>> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  mode: EDialogMode.NORMAL,
  backdrop: true,
  zIndex: Z_INDEX.DIALOG_SYS,
  zIndexBackdrop: Z_INDEX.BACKDROP_SYS
};

/**
 * 系统级 Dialog 共享的 props（可覆盖）
 */
export const SYS_DIALOG_PROPS_DEFAULT: Partial<IDialogProps<any, any>> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  closable: true,
  esc: -1
};