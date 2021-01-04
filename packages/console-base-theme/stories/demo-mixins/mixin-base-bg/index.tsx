import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  H1
} from '@alicloud/demo-rc-elements';

import MixinElements from '../../rc/mixin-elements';

const REG = /^mixinBg(\w+)$/;

const ScBricks = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

const cssExtra = css`
  padding: 8px;
  color: #666;
`;

export default function MixinBaseBg(): JSX.Element {
  return <>
    <H1>mixins for bg</H1>
    <ScBricks>
      <MixinElements reg={REG} extra={cssExtra} />
    </ScBricks>
  </>;
}
