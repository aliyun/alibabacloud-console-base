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
export { default as alert } from './promised/alt/alert';
export { default as confirm } from './promised/alt/confirm';
export { default as prompt } from './promised/alt/prompt';
export { default as openIndirect } from './promised/open-indirect';
export { default as AltWrap } from './rc/alt-wrap';
export {
  Context as DialogContext, // 用于外部不可用 hooks 的场景
  useDialog
} from './model';

export type {
  IDialogProps as DialogProps,
  IDialogPropsAlert as DialogPropsAlert,
  IDialogPropsConfirm as DialogPropsConfirm,
  IDialogPropsPrompt as DialogPropsPrompt,
  IDialogButtonProps as DialogButtonProps,
  IDialogIndirectPromise as DialogIndirectPromise
} from './types';
