import React from 'react';

import {
  open,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import intl from '../../../intl';

/**
 * 风控 - 不支持的类型
 */
export default (message: string, urlSettings: string): Promise<void> => open<void>({
  title: intl('op:risk_invalid'),
  content: <AltWrap {...{
    type: 'alert',
    content: message
  }} />,
  buttons: [{
    label: intl('op:risk_invalid_go'),
    spm: 'add',
    href: urlSettings
  }, intl('op:cancel')]
});
