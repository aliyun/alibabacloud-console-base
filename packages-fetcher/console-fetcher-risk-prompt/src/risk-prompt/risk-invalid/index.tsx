import React from 'react';

import {
  open
} from '@alicloud/console-base-rc-dialog';

import {
  DEFAULT_DIALOG_SIZE
} from '../../const';
import AltWrap from '../../rc/alt-wrap';
import intl from '../../intl';
import {
  slsRiskInvalid
} from '../../sls';

interface IProps {
  subRisk: boolean;
  errorMessage: string;
  urlSetting: string;
}

export default function riskInvalid({
  subRisk,
  errorMessage,
  urlSetting
}: IProps): Promise<void> {
  slsRiskInvalid();
  
  return open<void>({
    size: DEFAULT_DIALOG_SIZE,
    title: subRisk ? intl('title:sub_default') : intl('op:risk_invalid'),
    content: <AltWrap content={errorMessage} />,
    buttons: !subRisk ? [{
      label: intl('op:risk_invalid_go'),
      spm: 'add',
      href: urlSetting
    }, intl('op:cancel')] : [intl('op:cancel')]
  });
}