export { default } from './rc-container';

export {
  EDialogMode as DialogMode,
  EDialogSize as DialogSize
} from './enum';

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
