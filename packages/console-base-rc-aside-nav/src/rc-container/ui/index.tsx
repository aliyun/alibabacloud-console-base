import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderPrimaryRight,
  mixinShadowMRight
} from '@alicloud/console-base-theme';

import UiHeader from './ui-header';
import UiBody from './ui-body';
import UiFooter from './ui-footer';

const ScUi = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all linear 200ms;
  ${mixinBorderPrimaryRight}
  
  &:hover {
    ${mixinShadowMRight}
  }
`;

export default function Ui(): JSX.Element {
  return <ScUi>
    <UiHeader />
    <UiBody />
    <UiFooter />
  </ScUi>;
}
