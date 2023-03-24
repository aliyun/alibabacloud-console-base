import React from 'react';
import styled, {
  css
} from 'styled-components';

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
  EIconType
} from '../../../../enum';
import {
  IDialogDataNewSubAccountRisk
} from '../../../../types';
import intl from '../../../../intl';
import Message from '../../_components/message';

import VmfaBindInfo from './vmfa-bind-info';
import VmfaBindForm from './vmfa-bind-form';

interface IProps {
  hasTopMargin?: boolean;
}

const ScWrapper = styled.div<IProps>`
  padding: 16px;
  ${mixinBorderSecondary}
  ${mixinBgSecondary}
  ${props => (props.hasTopMargin ? css`
    margin-top: 16px;
  ` : null)}
`;

const ScDiv = styled.div`
  margin-bottom: 10px;
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextPrimary}
`;

export default function VmfaBind(): JSX.Element {
  const {
    data: {
      errorMessage
    }
  } = useDialog<void, IDialogDataNewSubAccountRisk>();

  return <>
    {errorMessage ? <Message {...{
      iconType: EIconType.ERROR,
      message: errorMessage
    }} /> : null}
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
