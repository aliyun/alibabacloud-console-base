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
import intl from '../../intl';
import AltWrap from '../../rc/alt-wrap';

import getSubAuthValidatorsTabs from './get-sub-auh-validators-tabs';

const ScWrapper = styled.div`
  & nav {
    padding-left: 0;
  }
`;

export default function NewSubRiskUi(): JSX.Element {
  const {
    data: {
      subVerificationDeviceType,
      subGetVerificationToAuthData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const tabs = getSubAuthValidatorsTabs(subGetVerificationToAuthData);
  
  if (!tabs.length) {
    return <AltWrap content={intl('message:invalid_unknown!lines')} />;
  }

  return <ScWrapper>
    <Tabs {...{
      tabs,
      activeKey: subVerificationDeviceType,
      onChange: tabKey => {
        if (tabKey === 'bind_mfa') {
          updateData({
            subVerificationDeviceType: 'bind_mfa'
          });
        } else {
          updateData({
            subVerificationDeviceType: tabKey as ESubVerificationDeviceType
          });
        }
      }
    }} />
  </ScWrapper>;
}