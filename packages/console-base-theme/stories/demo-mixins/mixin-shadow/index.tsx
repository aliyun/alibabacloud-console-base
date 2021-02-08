import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  H1
} from '@alicloud/demo-rc-elements';

import MixinElements from '../../rc/mixin-elements';

const REG = /^mixinShadow(\w+)$/;

const ScBricks = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

const cssExtra = css`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.01);
  color: #666;
`;

export default function MixinShadow(): JSX.Element {
  return <>
    <H1>mixins for shadow</H1>
    <ScBricks>
      <MixinElements reg={REG} extra={cssExtra} />
    </ScBricks>
  </>;
}
