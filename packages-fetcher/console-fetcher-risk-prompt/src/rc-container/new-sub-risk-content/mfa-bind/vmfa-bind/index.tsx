import React from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinBgSecondary,
  mixinBorderSecondary,
  mixinTextPrimary
} from '@alicloud/console-base-theme';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../../types';
import {
  EIconType,
  ESceneKey
} from '../../../../enum';
import intl from '../../../../intl';
import Message from '../../../../rc/message';

import VmfaBindInfo from './vmfa-bind-info';
import VmfaBindForm from './vmfa-bind-form';

interface IProps {
  hasTopMargin?: boolean;
}

const ScWrapper = styled.div<IProps>`
  padding: 16px;
  ${mixinBorderSecondary}
  ${mixinBgSecondary}
  ${props => {
    if (props.hasTopMargin) {
      return 'margin-top: 16px;';
    }

    return '';
  }}
`;

const ScDiv = styled.div`
  margin-bottom: 10px;
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextPrimary}
`;

export default function VmfaBind(): JSX.Element {
  const {
    data: {
      errorMessageObject
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  return <>
    <Message {...{
      iconType: EIconType.ERROR,
      message: errorMessageObject[ESceneKey.BIND_MFA],
      visible: Boolean(errorMessageObject[ESceneKey.BIND_MFA])
    }} />
    <ScWrapper>
      <ScDiv>{intl('message:vmfa_bind_step1')}</ScDiv>
      <VmfaBindInfo />
    </ScWrapper>
    <ScWrapper hasTopMargin>
      <ScDiv>{intl('message:vmfa_bind_step2')}</ScDiv>
      <VmfaBindForm />
    </ScWrapper>
  </>;
}
