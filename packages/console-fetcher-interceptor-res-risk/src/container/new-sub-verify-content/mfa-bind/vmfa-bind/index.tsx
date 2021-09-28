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
  EIconType
} from '../../../../const';
import {
  INewSubAccountRisk
} from '../../../../types';
import intl from '../../../../intl';
import Message from '../../_components/message';

import VMfaBindInfo from './vmfa-bind-info';
import VMfaBindForm from './vmfa-bind-form';

interface IProps {
  hasTopMargin?: boolean;
}

const ScWrapper = styled.div<IProps>`
  padding: 16px;
  ${mixinBorderSecondary}
  ${mixinBgSecondary}
  ${props => {
    if (props.hasTopMargin) {
      return 'margin-top: 16px';
    }

    return '';
  }}
`;

const ScDiv = styled.div`
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  margin-bottom: 10px;
  ${mixinTextPrimary}
`;

export default function VMfaBind(): JSX.Element {
  const {
    data: {
      errorMessage
    }
  } = useDialog<void, INewSubAccountRisk>();

  return <>
    {errorMessage ? <Message {...{
      iconType: EIconType.error,
      message: errorMessage
    }} /> : null}
    <ScWrapper>
      <ScDiv>{intl('message:vmfa_bind_step1')}</ScDiv>
      <VMfaBindInfo />
    </ScWrapper>
    <ScWrapper hasTopMargin>
      <ScDiv>{intl('message:vmfa_bind_step2')}</ScDiv>
      <VMfaBindForm />
    </ScWrapper>
  </>;
}