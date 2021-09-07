import React from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary,
  SIZE
} from '@alicloud/console-base-theme';

import intl from '../../../../intl';

import VMfaBindInfo from './vmfa-bind-info';
import VMfaBindForm from './vmfa-bind-form';

const ScWrapper = styled.div`
  margin: 12px 10px;
`;

const ScDiv = styled.div`
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  margin-bottom: 10px;
  ${mixinTextPrimary}
`;

export default function VMfaBind(): JSX.Element {
  return <>
    <ScWrapper>
      <ScDiv>{intl('message:vmfa_bind_step1')}</ScDiv>
      <VMfaBindInfo />
    </ScWrapper>
    <ScWrapper>
      <ScDiv>{intl('message:vmfa_bind_step2')}</ScDiv>
      <VMfaBindForm />
    </ScWrapper>
  </>;
}