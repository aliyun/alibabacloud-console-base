import {
  DialogProps
} from '@alicloud/console-base-rc-dialog-core';

import {
  TDialogAltIconType,
  IPromptOptions
} from './common';

/**
 * 用于 alert/confirm/prompt 的 props
 */
export type TDialogPropsForAlts<T = void, D extends object = Record<string, unknown>> = Omit<DialogProps<T, D>, 'content' | 'buttons' | 'mode' | 'backdrop' | 'zIndex' | 'zIndexBackdrop'>;

export interface IDialogPropsAlert extends Omit<TDialogPropsForAlts, 'data'> {
  title?: string | JSX.Element;
  content: string | JSX.Element;
}

export interface IDialogPropsConfirm extends Omit<TDialogPropsForAlts<boolean>, 'data'> {
  title?: string | JSX.Element;
  content: string | JSX.Element;
}

export interface IDialogPropsPrompt<D extends object = Record<string, unknown>> extends TDialogPropsForAlts<string, D>, IPromptOptions {}

export interface IDialogIndirectPromise<T = void, D extends object = Record<string, unknown>> {
  renderUpdate(changedProps: Partial<DialogProps<T, D>>): void;
  close(result?: T | Error, rejected?: boolean): void;
  promise: Promise<T>;
}

export interface IAltAlertExtra {
  type?: TDialogAltIconType;
  ok?: string;
}

export interface IAltConfirmExtra {
  type?: TDialogAltIconType;
  ok?: string;
  cancel?: string;
}

export interface IAltPromptExtra {
  ok?: string;
  cancel?: string;
}
