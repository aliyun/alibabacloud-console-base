import React from 'react';

import {
  IDialogPropsAlert
} from '../../types';
import {
  COMMON_PROPS_SYS_DIALOG
} from '../../const';
import intl from '../../intl';
import buildPropsForPromise from '../../util/build-props-for-promise';
import AltWrap from '../../rc/alt-wrap';
import open from '../open';

interface IExtraAlert {
  /**
   * 自定义按钮文字
   */
  ok?: string;
  /**
   * 图标选择
   */
  type?: 'alert' | 'info' | 'success' | 'error';
}

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
export default function alert(contentOrProps: string | JSX.Element | IDialogPropsAlert, extra: IExtraAlert = {}): Promise<void> {
  const promiseProps = buildPropsForPromise(contentOrProps, {
    buttons: [{
      spm: 'ok',
      label: extra.ok ?? intl('op:ok'),
      
      primary: true
    }],
    ...COMMON_PROPS_SYS_DIALOG
  });
  
  promiseProps.content = <AltWrap {...{
    type: extra.type || 'alert',
    title: promiseProps.title as IDialogPropsAlert['title'],
    content: promiseProps.content
  }} />;
  
  delete promiseProps.title;
  
  return open<void>(promiseProps);
}
