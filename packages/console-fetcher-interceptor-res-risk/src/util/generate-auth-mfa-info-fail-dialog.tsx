import React from 'react';

import {
  open,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import intl from '../intl';

export default function generateAuthMfaInfoFailDialog(errMsg: string): Promise<unknown> {
  /**
   *  当获取用户绑定的 MFA 设备类型接口（URL_GET_MFA_INFO_TO_AUTH）失败时，直接调用 open 方法展示报错的 message。
   *  此时用户点击【取消】按钮或者右上角的 X 会关闭弹窗，调用 reject 方法，并被 riskNewSubVerify 的 catch 捕获。
   */
  const buttonCancel = intl('op:cancel');

  return open<void>({
    title: intl('title:sub_default'),
    content: <AltWrap {...{
      type: 'alert',
      content: errMsg
    }} />,
    buttons: [buttonCancel],
    undefinedAsReject: true
  });
}