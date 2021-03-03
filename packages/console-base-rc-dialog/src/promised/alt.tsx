import React from 'react';

import {
  Z_INDEX
} from '@alicloud/console-base-theme';

import {
  IDialogProps,
  IDialogPropsAlert,
  IDialogPropsConfirm,
  IDialogPropsPrompt
} from '../types';
import {
  EDialogMode
} from '../const';
import intl from '../intl';
import buildPropsForPromise from '../util/build-props-for-promise';
import AltWrap from '../rc/alt-wrap';

import open from './open';
import PromptContent, {
  IDataPrompt
} from './prompt-content';

interface IExtraOk { // 自定义按钮文字
  ok?: string;
}

interface IExtraOkCancel { // 自定义按钮文字
  ok?: string;
  cancel?: string;
}

/**
 * 系统级 Dialog 共享的不可覆盖 props
 */
const COMMON_PROPS: Partial<IDialogProps<any, any>> = {
  mode: EDialogMode.NORMAL,
  backdrop: true,
  zIndex: Z_INDEX.DIALOG_SYS,
  zIndexBackdrop: Z_INDEX.BACKDROP_SYS,
  esc: -1
};

/**
 * 系统 window.alert 的替代
 *
 * ```typescript
 * alert('some message').then(...);
 * alert(<Content />).then(...);
 * alert({
 *   title: 'some title',
 *   content: 'message',
 * }, {
 *   ok: 自定义 OK 按钮文案
 * }).then(...);
 *
 * // 也可以用 async-await
 * await alert(...);
 * ```
 */
export function alert(contentOrProps: string | JSX.Element | IDialogPropsAlert, extra: IExtraOk = {}): Promise<void> {
  const promiseProps = buildPropsForPromise(contentOrProps, {
    buttons: [{
      spm: 'ok',
      label: extra.ok ?? intl('op:ok'),
      
      primary: true
    }],
    ...COMMON_PROPS
  });
  
  promiseProps.content = <AltWrap {...{
    type: 'alert',
    title: promiseProps.title as IDialogPropsAlert['title'],
    content: promiseProps.content
  }} />;
  
  delete promiseProps.title;
  
  return open<void>(promiseProps);
}

/**
 * 系统 window.confirm 的替代
 *
 * ```
 * import {
 *   confirm
 * } from '@alicloud/console-base-rc-dialog';
 *
 * confirm(...).then(yes => {
 *   ...
 * });
 *
 * // 也可以用 async-await
 * const yes = await alert(...);
 * ```
 */
export function confirm(contentOrProps?: string | JSX.Element | IDialogPropsConfirm, extra: IExtraOkCancel = {}): Promise<boolean> {
  const promiseProps = buildPropsForPromise<boolean>(contentOrProps, {
    buttons: [{
      spm: 'ok',
      label: extra.ok ?? intl('op:ok'),
      result: true
    }, {
      spm: 'cancel',
      label: extra.cancel ?? intl('op:cancel')
    }],
    ...COMMON_PROPS
  });
  
  promiseProps.content = <AltWrap {...{
    type: 'confirm',
    title: promiseProps.title as IDialogPropsConfirm['title'],
    content: promiseProps.content
  }} />;
  
  delete promiseProps.title;
  
  return open<boolean>(promiseProps).then(result => !!result);
}

/**
 * 系统 window.prompt 的替代
 */
export function prompt(props?: IDialogPropsPrompt<IDataPrompt>, extra: IExtraOkCancel = {}): Promise<string> {
  return open<string, IDataPrompt>(buildPropsForPromise<string, IDataPrompt>(props, {
    content: <PromptContent />,
    buttons: [{
      spm: 'ok',
      label: extra.ok ?? intl('op:ok'),
      result: data => data.value
    }, {
      spm: 'cancel',
      label: extra.cancel ?? intl('op:cancel')
    }],
    ...COMMON_PROPS
  })).then((result: string) => (result === undefined ? '' : result));
}
