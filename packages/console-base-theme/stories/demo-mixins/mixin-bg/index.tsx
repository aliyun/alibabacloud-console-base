import React from 'react';
import styled from 'styled-components';

import {
  H1
} from '@alicloud/demo-rc-elements';

import {
  mixinBgDisabled,
  mixinBgBrand,
  mixinBgBrandHover,
  mixinBgBrandActive,
  mixinBgAccent,
  mixinBgAccentHover,
  mixinBgAccentActive,
  mixinBgPrimary,
  mixinBgSecondary,
  mixinBgTertiary,
  mixinBgSecondaryFade,
  mixinBgTertiaryFade,
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
const ScMixinBgBrandHover = styled(ScBrick)`
  ${mixinBgBrandHover}
`;
const ScMixinBgBrandActive = styled(ScBrick)`
  ${mixinBgBrandActive}
`;
const ScMixinBgAccent = styled(ScBrick)`
  ${mixinBgAccent}
`;
const ScMixinBgAccentHover = styled(ScBrick)`
  ${mixinBgAccentHover}
`;
const ScMixinBgAccentActive = styled(ScBrick)`
  ${mixinBgAccentActive}
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
const ScMixinBgSecondaryFade = styled(ScBrick)`
  ${mixinBgSecondaryFade}
`;
const ScMixinBgTertiaryFade = styled(ScBrick)`
  ${mixinBgTertiaryFade}
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
    <H1>mixins for bg</H1>
    <ScBricks>
      <ScMixinBgBrand>brand</ScMixinBgBrand>
      <ScMixinBgBrandHover>brand-hover</ScMixinBgBrandHover>
      <ScMixinBgBrandActive>brand-active</ScMixinBgBrandActive>
      <ScMixinBgAccent>accent</ScMixinBgAccent>
      <ScMixinBgAccentHover>accent-hover</ScMixinBgAccentHover>
      <ScMixinBgAccentActive>accent-active</ScMixinBgAccentActive>
      <ScMixinBgPrimary>primary</ScMixinBgPrimary>
      <ScMixinBgSecondary>secondary</ScMixinBgSecondary>
      <ScMixinBgTertiary>tertiary</ScMixinBgTertiary>
      <ScMixinBgSecondaryFade>secondary-fade</ScMixinBgSecondaryFade>
      <ScMixinBgTertiaryFade>tertiary-fade</ScMixinBgTertiaryFade>
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
