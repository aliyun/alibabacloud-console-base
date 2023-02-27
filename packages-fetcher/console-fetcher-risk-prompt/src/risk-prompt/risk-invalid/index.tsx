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

interface IRiskInvalidProps {
  subRisk?: boolean;
  errorMessage: string;
  urlSetting: string;
  stringifiedRiskResponse: string;
}

export default function riskInvalid({
  urlSetting,
  errorMessage,
  subRisk = false,
  stringifiedRiskResponse
}: IRiskInvalidProps): Promise<void> {
  slsRiskInvalid({
    stringifiedRiskResponse
  });
  
  return open<void>({
    size: DEFAULT_DIALOG_SIZE,
    title: subRisk ? intl('title:default') : intl('op:risk_invalid'),
    content: <AltWrap content={errorMessage} />,
    buttons: urlSetting ? [{
      label: intl('op:risk_invalid_go'),
      spm: 'add',
      href: urlSetting
    }, intl('op:cancel')] : [intl('op:cancel')]
  });
}