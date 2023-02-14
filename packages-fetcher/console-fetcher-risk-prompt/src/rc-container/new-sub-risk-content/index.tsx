import React from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Tabs from '@alicloud/console-base-rc-tabs';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import intl from '../../intl';
import AltWrap from '../../rc/alt-wrap';

import getSubAuthValidatorsTabs from './get-sub-auh-validators-tabs';

const ScWrapper = styled.div`
  & nav {
    padding-left: 0px;
  }
`;

export default function NewSubRiskUi(): JSX.Element {
  const {
    data: {
      subVerificationDeviceType,
      subIdentityServiceData
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const tabs = getSubAuthValidatorsTabs(subIdentityServiceData);
  
  if (!tabs.length) {
    updateData({
      subInvalidValidators: true
    });

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