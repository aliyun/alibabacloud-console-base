export { default } from './rc-container';
export {
  EDialogMode,
  EDialogSize
} from './const';
export {
  default as open,
  slide,
  slideUp
} from './promised/open';
export {
  alert,
  confirm,
  prompt
} from './promised/alt';
export {
  Context as DialogContext, // 用于外部不可用 hooks 的场景
  useDialog
} from './model';
export { default as openIndirect } from './promised/open-indirect';
export { default as AltWrap } from './rc/alt-wrap';

export type {
  IDialogProps as DialogProps,
  IDialogPropsAlert as DialogPropsAlert,
  IDialogPropsConfirm as DialogPropsConfirm,
  IDialogPropsPrompt as DialogPropsPrompt,
  IDialogButtonProps as DialogButtonProps,
  IDialogIndirectPromise as DialogIndirectPromise
} from './types';
