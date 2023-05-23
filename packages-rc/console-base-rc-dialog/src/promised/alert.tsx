import React from 'react';

import {
  IDialogPropsAlert,
  IAltAlertExtra
} from '../types';
import {
  SYS_DIALOG_PROPS_FIXED,
  SYS_DIALOG_PROPS_DEFAULT
} from '../const';
import intl from '../intl';
import {
  buildPropsForPromise
} from '../util';
import {
  AltWrap
} from '../rc';

import {
  open
} from './open';

/**
 * 系统 `window.alert` 的替代
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
export default function alert(contentOrProps: string | JSX.Element | IDialogPropsAlert, extra: IAltAlertExtra = {}): Promise<void> {
  const promiseProps = buildPropsForPromise(contentOrProps, {
    buttons: [{
      spm: 'ok',
      label: extra.ok || intl('op:ok'),
      primary: true
    }],
    ...SYS_DIALOG_PROPS_FIXED
  }, SYS_DIALOG_PROPS_DEFAULT);
  
  promiseProps.content = <AltWrap {...{
    type: extra.type || 'alert',
    title: promiseProps.title as IDialogPropsAlert['title'],
    content: promiseProps.content
  }} />;
  
  delete promiseProps.title;
  
  return open<void>(promiseProps);
}
