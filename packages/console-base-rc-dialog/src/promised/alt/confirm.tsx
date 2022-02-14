import React from 'react';

import {
  IDialogPropsConfirm,
  IAltConfirmExtra
} from '../../types';
import {
  SYS_DIALOG_PROPS_FIXED,
  SYS_DIALOG_PROPS_DEFAULT
} from '../../const';
import intl from '../../intl';
import {
  buildPropsForPromise
} from '../../util';
import AltWrap from '../../rc/alt-wrap';
import open from '../open';

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
export default function confirm(contentOrProps?: string | JSX.Element | IDialogPropsConfirm, extra: IAltConfirmExtra = {}): Promise<boolean> {
  const promiseProps = buildPropsForPromise<boolean>(contentOrProps, {
    buttons: [{
      spm: 'ok',
      label: extra.ok || intl('op:ok'),
      result: true
    }, {
      spm: 'cancel',
      label: extra.cancel || intl('op:cancel')
    }],
    ...SYS_DIALOG_PROPS_FIXED
  }, SYS_DIALOG_PROPS_DEFAULT);
  
  promiseProps.content = <AltWrap {...{
    type: 'confirm',
    title: promiseProps.title as IDialogPropsConfirm['title'],
    content: promiseProps.content
  }} />;
  
  delete promiseProps.title;
  
  return open<boolean>(promiseProps).then((result: unknown) => !!result);
}
