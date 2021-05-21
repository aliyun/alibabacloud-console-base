import React from 'react';

import {
  IDialogPropsConfirm
} from '../../types';
import {
  COMMON_PROPS_SYS_DIALOG
} from '../../const';
import intl from '../../intl';
import buildPropsForPromise from '../../util/build-props-for-promise';
import AltWrap from '../../rc/alt-wrap';
import open from '../open';

interface IExtraConfirm { // 自定义按钮文字
  ok?: string;
  cancel?: string;
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
export default function confirm(contentOrProps?: string | JSX.Element | IDialogPropsConfirm, extra: IExtraConfirm = {}): Promise<boolean> {
  const promiseProps = buildPropsForPromise<boolean>(contentOrProps, {
    buttons: [{
      spm: 'ok',
      label: extra.ok ?? intl('op:ok'),
      result: true
    }, {
      spm: 'cancel',
      label: extra.cancel ?? intl('op:cancel')
    }],
    ...COMMON_PROPS_SYS_DIALOG
  });
  
  promiseProps.content = <AltWrap {...{
    type: 'confirm',
    title: promiseProps.title as IDialogPropsConfirm['title'],
    content: promiseProps.content
  }} />;
  
  delete promiseProps.title;
  
  return open<boolean>(promiseProps).then((result: unknown) => !!result);
}
