import React from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Tabs from '@alicloud/console-base-rc-tabs';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  EUnexpectedErrorType,
  ESubVerificationDeviceType
} from '../../enum';
import intl from '../../intl';
import {
  useModelProps
} from '../../model';
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
    setRiskCanceledErrorProps
  } = useModelProps();
  const {
    subValidators = []
  } = subGetVerificationToAuthData ?? {};

  if (!subValidators.length) {
    setRiskCanceledErrorProps({
      unexpectedErrorType: EUnexpectedErrorType.SUB_INVALID_VALIDATORS
    });

    // 没有解析出合法的子账号核身方式，需要隐藏确定按钮
    updateData({
      hideSubRiskSubmitButton: true
    });

    return <AltWrap content={intl('message:invalid_unknown!lines')} />;
  }

  if (subValidators.length === 1 && subValidators[0]) {
    return getSubAuthValidatorsContent(subValidators[0]);
  }

  const tabs = getSubAuthValidatorsTabs(subGetVerificationToAuthData);

  return <ScWrapper>
    <Tabs {...{
      tabs,
      activeKey: currentSubVerificationDeviceType,
      onChange: tabKey => {
        updateData({
          currentSubVerificationDeviceType: tabKey as ESubVerificationDeviceType
        });
      }
    }} />
  </ScWrapper>;
}
