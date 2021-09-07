import React from 'react';

import {
  open,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import intl from '../../../intl';

/**
 * 不支持的子账号风控类型
 * @param message 提示信息
 * @param urlSetting 设置子账号风控方式的链接
 */
export default (message: string, urlSetting: string): Promise<void> => open<void>({
  title: intl('op:risk_invalid'),
  content: <AltWrap {...{
    type: 'alert',
    content: message
  }} />,
  buttons: [{
    label: intl('op:risk_invalid_go'),
    spm: 'add',
    href: urlSetting
  }, intl('op:cancel')]
});