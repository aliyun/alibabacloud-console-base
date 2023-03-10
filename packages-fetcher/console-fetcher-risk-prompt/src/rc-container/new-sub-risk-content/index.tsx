import React from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';
import Tabs from '@alicloud/console-base-rc-tabs';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  ESceneKey
} from '../../enum';
import intl from '../../intl';
import AltWrap from '../../rc/alt-wrap';

import {
  getSubAuthValidatorsTabs,
  getSubAuthValidatorsContent
} from './get-sub-auth-validators-props';

const ScWrapper = styled.div`
  & nav {
    padding-left: 0;
  }
`;

export default function NewSubRiskUi(): JSX.Element {
  const {
    data: {
      currentSubVerificationDeviceType,
      subGetVerificationToAuthData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const {
    verificationOrBindValidatorArray
  } = subGetVerificationToAuthData ?? {};

  if (!verificationOrBindValidatorArray?.length) {
    return <AltWrap content={intl('message:invalid_unknown!lines')} />;
  }

  if (verificationOrBindValidatorArray.length === 1) {
    return getSubAuthValidatorsContent(verificationOrBindValidatorArray[0]);
  }

  const tabs = getSubAuthValidatorsTabs(subGetVerificationToAuthData);

  return <ScWrapper>
    <Tabs {...{
      tabs,
      activeKey: currentSubVerificationDeviceType,
      onChange: tabKey => {
        if (tabKey === ESceneKey.BIND_MFA) {
          updateData({
            currentSubVerificationDeviceType: ESceneKey.BIND_MFA
          });
        } else {
          updateData({
            currentSubVerificationDeviceType: tabKey as ESubVerificationDeviceType
          });
        }
      }
    }} />
  </ScWrapper>;
}