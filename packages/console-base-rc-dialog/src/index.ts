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
  IAlertExtra as AlertExtra,
  IConfirmExtra as ConfirmExtra,
  IPromptExtra as PromptExtra
} from './types';
