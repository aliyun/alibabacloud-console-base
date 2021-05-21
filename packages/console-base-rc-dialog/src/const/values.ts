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
 * 系统级 Dialog 共享的不可覆盖 props
 */
export const COMMON_PROPS_SYS_DIALOG: Partial<IDialogProps<any, any>> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  mode: EDialogMode.NORMAL,
  backdrop: true,
  zIndex: Z_INDEX.DIALOG_SYS,
  zIndexBackdrop: Z_INDEX.BACKDROP_SYS,
  esc: -1
};
