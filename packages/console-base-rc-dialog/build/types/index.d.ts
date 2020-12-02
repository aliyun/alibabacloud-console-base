import { IDialogProps as DialogProps, IDialogPropsAlert as DialogPropsAlert, IDialogPropsConfirm as DialogPropsConfirm, IDialogPropsPrompt as DialogPropsPrompt, IDialogButtonProps as DialogButtonProps, IDialogIndirectPromise as DialogIndirectPromise } from './types';
import { EDialogMode, EDialogSize } from './const';
import { Context as DialogContext, // 用于外部不可用 hooks 的场景
useDialog } from './model';
import AltWrap from './rc/alt-wrap';
import openIndirect from './promised/open-indirect';
import open, { slide, slideUp } from './promised/open';
import { alert, confirm, prompt } from './promised/alt';
export { default } from './rc-container';
export type { DialogProps, DialogPropsAlert, DialogPropsConfirm, DialogPropsPrompt, DialogButtonProps, DialogIndirectPromise };
export { EDialogMode, EDialogSize, DialogContext, AltWrap, useDialog, openIndirect, open, slide, slideUp, alert, confirm, prompt };
