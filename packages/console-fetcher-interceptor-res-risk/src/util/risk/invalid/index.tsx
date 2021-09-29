import React from 'react';

import {
  open,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import intl from '../../../intl';

interface IProps {
  newRisk: boolean;
  message: string;
  urlSettings?: string;
}

export default function riskInvalid({
  newRisk,
  message,
  urlSettings
}: IProps): Promise<void> {
  return open<void>({
    title: newRisk ? intl('title:sub_default') : intl('op:risk_invalid'),
    content: <AltWrap {...{
      type: 'alert',
      content: message
    }} />,
    buttons: !newRisk && urlSettings ? [{
      label: intl('op:risk_invalid_go'),
      spm: 'add',
      href: urlSettings
    }, intl('op:cancel')] : [intl('op:cancel')]
  });
}