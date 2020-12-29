import React from 'react';
import styled from 'styled-components';

import {
  H2
} from '@alicloud/demo-rc-elements';

import {
  mixinBgBrand,
  mixinBgAccent,
  mixinBgPrimary,
  mixinBgSecondary,
  mixinBgTertiary,
  mixinBgDisabled,
  mixinBgHelp,
  mixinBgInfo,
  mixinBgSuccess,
  mixinBgWarning,
  mixinBgError,
  mixinBgDanger,
  mixinBgBackdrop
} from '../../../src';

const ScBricks = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

const ScBrick = styled.div`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.01);
  color: #666;
`;

const ScMixinBgBrand = styled(ScBrick)`
  ${mixinBgBrand}
`;
const ScMixinBgAccent = styled(ScBrick)`
  ${mixinBgAccent}
`;
const ScMixinBgPrimary = styled(ScBrick)`
  ${mixinBgPrimary}
`;
const ScMixinBgSecondary = styled(ScBrick)`
  ${mixinBgSecondary}
`;
const ScMixinBgTertiary = styled(ScBrick)`
  ${mixinBgTertiary}
`;
const ScMixinBgDisabled = styled(ScBrick)`
  ${mixinBgDisabled}
`;
const ScMixinBgHelp = styled(ScBrick)`
  ${mixinBgHelp}
`;
const ScMixinBgInfo = styled(ScBrick)`
  ${mixinBgInfo}
`;
const ScMixinBgSuccess = styled(ScBrick)`
  ${mixinBgSuccess}
`;
const ScMixinBgWarning = styled(ScBrick)`
  ${mixinBgWarning}
`;
const ScMixinBgError = styled(ScBrick)`
  ${mixinBgError}
`;
const ScMixinBgDanger = styled(ScBrick)`
  ${mixinBgDanger}
`;
const ScMixinBgBackdrop = styled(ScBrick)`
  ${mixinBgBackdrop}
`;

export default function MixinBg(): JSX.Element {
  return <>
    <H2>mixins for bg</H2>
    <ScBricks>
      <ScMixinBgBrand>brand</ScMixinBgBrand>
      <ScMixinBgAccent>accent</ScMixinBgAccent>
      <ScMixinBgPrimary>primary</ScMixinBgPrimary>
      <ScMixinBgSecondary>secondary</ScMixinBgSecondary>
      <ScMixinBgTertiary>tertiary</ScMixinBgTertiary>
      <ScMixinBgDisabled>disabled</ScMixinBgDisabled>
      <ScMixinBgHelp>help</ScMixinBgHelp>
      <ScMixinBgInfo>info</ScMixinBgInfo>
      <ScMixinBgSuccess>success</ScMixinBgSuccess>
      <ScMixinBgWarning>warning</ScMixinBgWarning>
      <ScMixinBgError>error</ScMixinBgError>
      <ScMixinBgDanger>danger</ScMixinBgDanger>
      <ScMixinBgBackdrop>backdrop</ScMixinBgBackdrop>
    </ScBricks>
  </>;
}
