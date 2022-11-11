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
  subRisk: boolean;
  verifyType: string;
  verifyDetail: string;
  errorMessage: string;
  urlSetting: string;
}

export default function riskInvalid({
  subRisk,
  verifyType,
  verifyDetail,
  errorMessage,
  urlSetting
}: IRiskInvalidProps): Promise<void> {
  slsRiskInvalid({
    verifyType,
    verifyDetail
  });
  
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