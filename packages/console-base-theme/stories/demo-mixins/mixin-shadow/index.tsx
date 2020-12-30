import React from 'react';
import styled from 'styled-components';

import {
  H1
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
    <H1>mixins for shadow</H1>
    <ScBricks>
      <ScMixinShadowM>shadow-m</ScMixinShadowM>
      <ScMixinShadowMUp>shadow-m-up</ScMixinShadowMUp>
      <ScMixinShadowMRight>shadow-m-right</ScMixinShadowMRight>
      <ScMixinShadowMDown>shadow-m-down</ScMixinShadowMDown>
      <ScMixinShadowMLeft>shadow-m-left</ScMixinShadowMLeft>
      <ScMixinShadowL>shadow-l</ScMixinShadowL>
      <ScMixinShadowLUp>shadow-l-up</ScMixinShadowLUp>
      <ScMixinShadowLRight>shadow-l-right</ScMixinShadowLRight>
      <ScMixinShadowLDown>shadow-l-down</ScMixinShadowLDown>
      <ScMixinShadowLLeft>shadow-l-left</ScMixinShadowLLeft>
      <ScMixinShadowXl>shadow-xl</ScMixinShadowXl>
      <ScMixinShadowXlUp>shadow-xl-up</ScMixinShadowXlUp>
      <ScMixinShadowXlRight>shadow-xl-right</ScMixinShadowXlRight>
      <ScMixinShadowXlDown>shadow-xl-down</ScMixinShadowXlDown>
      <ScMixinShadowXlLeft>shadow-xl-left</ScMixinShadowXlLeft>
    </ScBricks>
  </>;
}
