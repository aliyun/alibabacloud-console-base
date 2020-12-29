import React from 'react';
import styled from 'styled-components';

import {
  H2
} from '@alicloud/demo-rc-elements';

import {
  mixinShadowM,
  mixinShadowMUp,
  mixinShadowMRight,
  mixinShadowMDown,
  mixinShadowMLeft,
  mixinShadowL,
  mixinShadowLUp,
  mixinShadowLRight,
  mixinShadowLDown,
  mixinShadowLLeft,
  mixinShadowXl,
  mixinShadowXlUp,
  mixinShadowXlRight,
  mixinShadowXlDown,
  mixinShadowXlLeft
} from '../../../src';

const ScBricks = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

const ScBrick = styled.div`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.01);
  color: #666;
`;

const ScMixinShadowM = styled(ScBrick)`
  ${mixinShadowM}
`;
const ScMixinShadowMUp = styled(ScBrick)`
  ${mixinShadowMUp}
`;
const ScMixinShadowMRight = styled(ScBrick)`
  ${mixinShadowMRight}
`;
const ScMixinShadowMDown = styled(ScBrick)`
  ${mixinShadowMDown}
`;
const ScMixinShadowMLeft = styled(ScBrick)`
  ${mixinShadowMLeft}
`;
const ScMixinShadowL = styled(ScBrick)`
  ${mixinShadowL}
`;
const ScMixinShadowLUp = styled(ScBrick)`
  ${mixinShadowLUp}
`;
const ScMixinShadowLRight = styled(ScBrick)`
  ${mixinShadowLRight}
`;
const ScMixinShadowLDown = styled(ScBrick)`
  ${mixinShadowLDown}
`;
const ScMixinShadowLLeft = styled(ScBrick)`
  ${mixinShadowLLeft}
`;
const ScMixinShadowXl = styled(ScBrick)`
  ${mixinShadowXl}
`;
const ScMixinShadowXlUp = styled(ScBrick)`
  ${mixinShadowXlUp}
`;
const ScMixinShadowXlRight = styled(ScBrick)`
  ${mixinShadowXlRight}
`;
const ScMixinShadowXlDown = styled(ScBrick)`
  ${mixinShadowXlDown}
`;
const ScMixinShadowXlLeft = styled(ScBrick)`
  ${mixinShadowXlLeft}
`;

export default function MixinShadow(): JSX.Element {
  return <>
    <H2>mixins for shadow</H2>
    <ScBricks>
      <ScMixinShadowM>mixinShadowM</ScMixinShadowM>
      <ScMixinShadowMUp>mixinShadowMUp</ScMixinShadowMUp>
      <ScMixinShadowMRight>mixinShadowMRight</ScMixinShadowMRight>
      <ScMixinShadowMDown>mixinShadowMDown</ScMixinShadowMDown>
      <ScMixinShadowMLeft>mixinShadowMLeft</ScMixinShadowMLeft>
      <ScMixinShadowL>mixinShadowL</ScMixinShadowL>
      <ScMixinShadowLUp>mixinShadowLUp</ScMixinShadowLUp>
      <ScMixinShadowLRight>mixinShadowLRight</ScMixinShadowLRight>
      <ScMixinShadowLDown>mixinShadowLDown</ScMixinShadowLDown>
      <ScMixinShadowLLeft>mixinShadowLLeft</ScMixinShadowLLeft>
      <ScMixinShadowXl>mixinShadowXl</ScMixinShadowXl>
      <ScMixinShadowXlUp>mixinShadowXlUp</ScMixinShadowXlUp>
      <ScMixinShadowXlRight>mixinShadowXlRight</ScMixinShadowXlRight>
      <ScMixinShadowXlDown>mixinShadowXlDown</ScMixinShadowXlDown>
      <ScMixinShadowXlLeft>mixinShadowXlLeft</ScMixinShadowXlLeft>
    </ScBricks>
  </>;
}
