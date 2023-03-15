import React from 'react';

import {
  open,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import {
  slsRiskInvalid
} from '../../sls';
import {
  DEFAUT_DIALOG_SIZE
} from '../../const';
import intl from '../../intl';

interface IProps {
  newSubRisk: boolean;
  message: string;
  urlSettings?: string;
}

export default function riskInvalid({
  newSubRisk,
  message,
  urlSettings
}: IProps): Promise<void> {
  slsRiskInvalid();

  return open<void>({
    size: DEFAUT_DIALOG_SIZE,
    title: newSubRisk ? intl('title:sub_default') : intl('op:risk_invalid'),
    content: <AltWrap {...{
      type: 'alert',
      content: message
    }} />,
    buttons: !newSubRisk && urlSettings ? [{
      label: intl('op:risk_invalid_go'),
      spm: 'add',
      href: urlSettings
    }, intl('op:cancel')] : [intl('op:cancel')]
  });
}