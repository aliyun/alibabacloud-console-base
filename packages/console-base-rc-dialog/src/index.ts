export { default } from './rc-container';

export {
  EDialogMode as DialogMode,
  EDialogSize as DialogSize,
  // TODO 删除以下
  EDialogMode,
  EDialogSize
} from './const';

export * from './promised';

export { default as AltWrap } from './rc/alt-wrap';

export {
  useDialog
} from './model';

export type {
  IDialogProps as DialogProps,
  IDialogPropsAlert as DialogPropsAlert,
  IDialogPropsConfirm as DialogPropsConfirm,
  IDialogPropsPrompt as DialogPropsPrompt,
  IDialogButtonProps as DialogButtonProps,
  IDialogIndirectPromise as DialogIndirectPromise,
  IAltAlertExtra as AlertExtra,
  IAltConfirmExtra as ConfirmExtra,
  IAltPromptExtra as PromptExtra
} from './types';
