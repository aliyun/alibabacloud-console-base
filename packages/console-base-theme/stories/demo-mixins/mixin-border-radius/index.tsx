import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  H1
} from '@alicloud/demo-rc-elements';

import MixinElements from '../../rc/mixin-elements';

const REG = /^mixinBorderRadius(\w+)$/;

const ScBricks = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

const cssExtra = css`
  padding: 8px;
  border: 1px solid #999;
  background-color: rgba(128, 0, 240, 0.01);
  color: #666;
`;

export default function MixinBorderRadius(): JSX.Element {
  return <>
    <H1>mixins for border-radius</H1>
    <ScBricks>
      <MixinElements reg={REG} extra={cssExtra} />
    </ScBricks>
  </>;
}
