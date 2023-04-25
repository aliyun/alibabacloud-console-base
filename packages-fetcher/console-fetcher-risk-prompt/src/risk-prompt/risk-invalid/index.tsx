import React from 'react';
import styled from 'styled-components';

import {
  open,
  AltWrap
} from '@alicloud/console-base-rc-dialog';

import {
  DEFAULT_DIALOG_SIZE
} from '../../const';
import intl from '../../intl';
import {
  slsRiskInvalid
} from '../../sls';

interface IRiskInvalidProps {
  accountId: string;
  subRisk?: boolean;
  errorMessage: string;
  urlSetting: string;
  stringifiedRiskResponse: string;
}

const ScWrapper = styled.div`
  margin-top: 20px;
`;

export default function riskInvalid({
  accountId,
  urlSetting,
  errorMessage,
  subRisk = false,
  stringifiedRiskResponse
}: IRiskInvalidProps): Promise<void> {
  slsRiskInvalid({
    accountId,
    stringifiedRiskResponse
  });
  
  return open<void>({
    size: DEFAULT_DIALOG_SIZE,
    title: subRisk ? intl('title:default') : intl('op:risk_invalid'),
    buttons: urlSetting ? [{
      label: intl('op:risk_invalid_go'),
      spm: 'add',
      href: urlSetting
    }, intl('op:cancel')] : [intl('op:cancel')],
    content: <ScWrapper>
      <AltWrap content={errorMessage} />
    </ScWrapper>
  });
}