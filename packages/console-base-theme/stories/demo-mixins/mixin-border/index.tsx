import React from 'react';
import styled from 'styled-components';

import {
  H2
} from '@alicloud/demo-rc-elements';

import {
  mixinBorderBrandColor,
  mixinBorderBrand,
  mixinBorderBrandTop,
  mixinBorderBrandRight,
  mixinBorderBrandBottom,
  mixinBorderBrandLeft,
  mixinBorderAccentColor,
  mixinBorderAccent,
  mixinBorderAccentTop,
  mixinBorderAccentRight,
  mixinBorderAccentBottom,
  mixinBorderAccentLeft,
  mixinBorderPrimaryColor,
  mixinBorderPrimary,
  mixinBorderPrimaryTop,
  mixinBorderPrimaryRight,
  mixinBorderPrimaryBottom,
  mixinBorderPrimaryLeft,
  mixinBorderSecondaryColor,
  mixinBorderSecondary,
  mixinBorderSecondaryTop,
  mixinBorderSecondaryRight,
  mixinBorderSecondaryBottom,
  mixinBorderSecondaryLeft,
  mixinBorderTertiaryColor,
  mixinBorderTertiary,
  mixinBorderTertiaryTop,
  mixinBorderTertiaryRight,
  mixinBorderTertiaryBottom,
  mixinBorderTertiaryLeft,
  mixinBorderDisabledColor,
  mixinBorderDisabled,
  mixinBorderDisabledTop,
  mixinBorderDisabledRight,
  mixinBorderDisabledBottom,
  mixinBorderDisabledLeft,
  mixinBorderHelpColor,
  mixinBorderHelp,
  mixinBorderHelpTop,
  mixinBorderHelpRight,
  mixinBorderHelpBottom,
  mixinBorderHelpLeft,
  mixinBorderInfoColor,
  mixinBorderInfo,
  mixinBorderInfoTop,
  mixinBorderInfoRight,
  mixinBorderInfoBottom,
  mixinBorderInfoLeft,
  mixinBorderSuccessColor,
  mixinBorderSuccess,
  mixinBorderSuccessTop,
  mixinBorderSuccessRight,
  mixinBorderSuccessBottom,
  mixinBorderSuccessLeft,
  mixinBorderWarningColor,
  mixinBorderWarning,
  mixinBorderWarningTop,
  mixinBorderWarningRight,
  mixinBorderWarningBottom,
  mixinBorderWarningLeft,
  mixinBorderErrorColor,
  mixinBorderError,
  mixinBorderErrorTop,
  mixinBorderErrorRight,
  mixinBorderErrorBottom,
  mixinBorderErrorLeft,
  mixinBorderDangerColor,
  mixinBorderDanger,
  mixinBorderDangerTop,
  mixinBorderDangerRight,
  mixinBorderDangerBottom,
  mixinBorderDangerLeft
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

const ScMixinBorderBrandColor = styled(ScBrick)`
  ${mixinBorderBrandColor}
`;
const ScMixinBorderBrand = styled(ScBrick)`
  ${mixinBorderBrand}
`;
const ScMixinBorderBrandTop = styled(ScBrick)`
  ${mixinBorderBrandTop}
`;
const ScMixinBorderBrandRight = styled(ScBrick)`
  ${mixinBorderBrandRight}
`;
const ScMixinBorderBrandBottom = styled(ScBrick)`
  ${mixinBorderBrandBottom}
`;
const ScMixinBorderBrandLeft = styled(ScBrick)`
  ${mixinBorderBrandLeft}
`;
const ScMixinBorderAccentColor = styled(ScBrick)`
  ${mixinBorderAccentColor}
`;
const ScMixinBorderAccent = styled(ScBrick)`
  ${mixinBorderAccent}
`;
const ScMixinBorderAccentTop = styled(ScBrick)`
  ${mixinBorderAccentTop}
`;
const ScMixinBorderAccentRight = styled(ScBrick)`
  ${mixinBorderAccentRight}
`;
const ScMixinBorderAccentBottom = styled(ScBrick)`
  ${mixinBorderAccentBottom}
`;
const ScMixinBorderAccentLeft = styled(ScBrick)`
  ${mixinBorderAccentLeft}
`;
const ScMixinBorderPrimaryColor = styled(ScBrick)`
  ${mixinBorderPrimaryColor}
`;
const ScMixinBorderPrimary = styled(ScBrick)`
  ${mixinBorderPrimary}
`;
const ScMixinBorderPrimaryTop = styled(ScBrick)`
  ${mixinBorderPrimaryTop}
`;
const ScMixinBorderPrimaryRight = styled(ScBrick)`
  ${mixinBorderPrimaryRight}
`;
const ScMixinBorderPrimaryBottom = styled(ScBrick)`
  ${mixinBorderPrimaryBottom}
`;
const ScMixinBorderPrimaryLeft = styled(ScBrick)`
  ${mixinBorderPrimaryLeft}
`;
const ScMixinBorderSecondaryColor = styled(ScBrick)`
  ${mixinBorderSecondaryColor}
`;
const ScMixinBorderSecondary = styled(ScBrick)`
  ${mixinBorderSecondary}
`;
const ScMixinBorderSecondaryTop = styled(ScBrick)`
  ${mixinBorderSecondaryTop}
`;
const ScMixinBorderSecondaryRight = styled(ScBrick)`
  ${mixinBorderSecondaryRight}
`;
const ScMixinBorderSecondaryBottom = styled(ScBrick)`
  ${mixinBorderSecondaryBottom}
`;
const ScMixinBorderSecondaryLeft = styled(ScBrick)`
  ${mixinBorderSecondaryLeft}
`;
const ScMixinBorderTertiaryColor = styled(ScBrick)`
  ${mixinBorderTertiaryColor}
`;
const ScMixinBorderTertiary = styled(ScBrick)`
  ${mixinBorderTertiary}
`;
const ScMixinBorderTertiaryTop = styled(ScBrick)`
  ${mixinBorderTertiaryTop}
`;
const ScMixinBorderTertiaryRight = styled(ScBrick)`
  ${mixinBorderTertiaryRight}
`;
const ScMixinBorderTertiaryBottom = styled(ScBrick)`
  ${mixinBorderTertiaryBottom}
`;
const ScMixinBorderTertiaryLeft = styled(ScBrick)`
  ${mixinBorderTertiaryLeft}
`;
const ScMixinBorderDisabledColor = styled(ScBrick)`
  ${mixinBorderDisabledColor}
`;
const ScMixinBorderDisabled = styled(ScBrick)`
  ${mixinBorderDisabled}
`;
const ScMixinBorderDisabledTop = styled(ScBrick)`
  ${mixinBorderDisabledTop}
`;
const ScMixinBorderDisabledRight = styled(ScBrick)`
  ${mixinBorderDisabledRight}
`;
const ScMixinBorderDisabledBottom = styled(ScBrick)`
  ${mixinBorderDisabledBottom}
`;
const ScMixinBorderDisabledLeft = styled(ScBrick)`
  ${mixinBorderDisabledLeft}
`;
const ScMixinBorderHelpColor = styled(ScBrick)`
  ${mixinBorderHelpColor}
`;
const ScMixinBorderHelp = styled(ScBrick)`
  ${mixinBorderHelp}
`;
const ScMixinBorderHelpTop = styled(ScBrick)`
  ${mixinBorderHelpTop}
`;
const ScMixinBorderHelpRight = styled(ScBrick)`
  ${mixinBorderHelpRight}
`;
const ScMixinBorderHelpBottom = styled(ScBrick)`
  ${mixinBorderHelpBottom}
`;
const ScMixinBorderHelpLeft = styled(ScBrick)`
  ${mixinBorderHelpLeft}
`;
const ScMixinBorderInfoColor = styled(ScBrick)`
  ${mixinBorderInfoColor}
`;
const ScMixinBorderInfo = styled(ScBrick)`
  ${mixinBorderInfo}
`;
const ScMixinBorderInfoTop = styled(ScBrick)`
  ${mixinBorderInfoTop}
`;
const ScMixinBorderInfoRight = styled(ScBrick)`
  ${mixinBorderInfoRight}
`;
const ScMixinBorderInfoBottom = styled(ScBrick)`
  ${mixinBorderInfoBottom}
`;
const ScMixinBorderInfoLeft = styled(ScBrick)`
  ${mixinBorderInfoLeft}
`;
const ScMixinBorderSuccessColor = styled(ScBrick)`
  ${mixinBorderSuccessColor}
`;
const ScMixinBorderSuccess = styled(ScBrick)`
  ${mixinBorderSuccess}
`;
const ScMixinBorderSuccessTop = styled(ScBrick)`
  ${mixinBorderSuccessTop}
`;
const ScMixinBorderSuccessRight = styled(ScBrick)`
  ${mixinBorderSuccessRight}
`;
const ScMixinBorderSuccessBottom = styled(ScBrick)`
  ${mixinBorderSuccessBottom}
`;
const ScMixinBorderSuccessLeft = styled(ScBrick)`
  ${mixinBorderSuccessLeft}
`;
const ScMixinBorderWarningColor = styled(ScBrick)`
  ${mixinBorderWarningColor}
`;
const ScMixinBorderWarning = styled(ScBrick)`
  ${mixinBorderWarning}
`;
const ScMixinBorderWarningTop = styled(ScBrick)`
  ${mixinBorderWarningTop}
`;
const ScMixinBorderWarningRight = styled(ScBrick)`
  ${mixinBorderWarningRight}
`;
const ScMixinBorderWarningBottom = styled(ScBrick)`
  ${mixinBorderWarningBottom}
`;
const ScMixinBorderWarningLeft = styled(ScBrick)`
  ${mixinBorderWarningLeft}
`;
const ScMixinBorderErrorColor = styled(ScBrick)`
  ${mixinBorderErrorColor}
`;
const ScMixinBorderError = styled(ScBrick)`
  ${mixinBorderError}
`;
const ScMixinBorderErrorTop = styled(ScBrick)`
  ${mixinBorderErrorTop}
`;
const ScMixinBorderErrorRight = styled(ScBrick)`
  ${mixinBorderErrorRight}
`;
const ScMixinBorderErrorBottom = styled(ScBrick)`
  ${mixinBorderErrorBottom}
`;
const ScMixinBorderErrorLeft = styled(ScBrick)`
  ${mixinBorderErrorLeft}
`;
const ScMixinBorderDangerColor = styled(ScBrick)`
  ${mixinBorderDangerColor}
`;
const ScMixinBorderDanger = styled(ScBrick)`
  ${mixinBorderDanger}
`;
const ScMixinBorderDangerTop = styled(ScBrick)`
  ${mixinBorderDangerTop}
`;
const ScMixinBorderDangerRight = styled(ScBrick)`
  ${mixinBorderDangerRight}
`;
const ScMixinBorderDangerBottom = styled(ScBrick)`
  ${mixinBorderDangerBottom}
`;
const ScMixinBorderDangerLeft = styled(ScBrick)`
  ${mixinBorderDangerLeft}
`;

export default function MixinBorder(): JSX.Element {
  return <>
    <H2>mixins for border</H2>
    <ScBricks>
      <ScMixinBorderBrandColor>mixinBorderBrandColor</ScMixinBorderBrandColor>
      <ScMixinBorderBrand>mixinBorderBrand</ScMixinBorderBrand>
      <ScMixinBorderBrandTop>mixinBorderBrandTop</ScMixinBorderBrandTop>
      <ScMixinBorderBrandRight>mixinBorderBrandRight</ScMixinBorderBrandRight>
      <ScMixinBorderBrandBottom>mixinBorderBrandBottom</ScMixinBorderBrandBottom>
      <ScMixinBorderBrandLeft>mixinBorderBrandLeft</ScMixinBorderBrandLeft>
      <ScMixinBorderAccentColor>mixinBorderAccentColor</ScMixinBorderAccentColor>
      <ScMixinBorderAccent>mixinBorderAccent</ScMixinBorderAccent>
      <ScMixinBorderAccentTop>mixinBorderAccentTop</ScMixinBorderAccentTop>
      <ScMixinBorderAccentRight>mixinBorderAccentRight</ScMixinBorderAccentRight>
      <ScMixinBorderAccentBottom>mixinBorderAccentBottom</ScMixinBorderAccentBottom>
      <ScMixinBorderAccentLeft>mixinBorderAccentLeft</ScMixinBorderAccentLeft>
      <ScMixinBorderPrimaryColor>mixinBorderPrimaryColor</ScMixinBorderPrimaryColor>
      <ScMixinBorderPrimary>mixinBorderPrimary</ScMixinBorderPrimary>
      <ScMixinBorderPrimaryTop>mixinBorderPrimaryTop</ScMixinBorderPrimaryTop>
      <ScMixinBorderPrimaryRight>mixinBorderPrimaryRight</ScMixinBorderPrimaryRight>
      <ScMixinBorderPrimaryBottom>mixinBorderPrimaryBottom</ScMixinBorderPrimaryBottom>
      <ScMixinBorderPrimaryLeft>mixinBorderPrimaryLeft</ScMixinBorderPrimaryLeft>
      <ScMixinBorderSecondaryColor>mixinBorderSecondaryColor</ScMixinBorderSecondaryColor>
      <ScMixinBorderSecondary>mixinBorderSecondary</ScMixinBorderSecondary>
      <ScMixinBorderSecondaryTop>mixinBorderSecondaryTop</ScMixinBorderSecondaryTop>
      <ScMixinBorderSecondaryRight>mixinBorderSecondaryRight</ScMixinBorderSecondaryRight>
      <ScMixinBorderSecondaryBottom>mixinBorderSecondaryBottom</ScMixinBorderSecondaryBottom>
      <ScMixinBorderSecondaryLeft>mixinBorderSecondaryLeft</ScMixinBorderSecondaryLeft>
      <ScMixinBorderTertiaryColor>mixinBorderTertiaryColor</ScMixinBorderTertiaryColor>
      <ScMixinBorderTertiary>mixinBorderTertiary</ScMixinBorderTertiary>
      <ScMixinBorderTertiaryTop>mixinBorderTertiaryTop</ScMixinBorderTertiaryTop>
      <ScMixinBorderTertiaryRight>mixinBorderTertiaryRight</ScMixinBorderTertiaryRight>
      <ScMixinBorderTertiaryBottom>mixinBorderTertiaryBottom</ScMixinBorderTertiaryBottom>
      <ScMixinBorderTertiaryLeft>mixinBorderTertiaryLeft</ScMixinBorderTertiaryLeft>
      <ScMixinBorderDisabledColor>mixinBorderDisabledColor</ScMixinBorderDisabledColor>
      <ScMixinBorderDisabled>mixinBorderDisabled</ScMixinBorderDisabled>
      <ScMixinBorderDisabledTop>mixinBorderDisabledTop</ScMixinBorderDisabledTop>
      <ScMixinBorderDisabledRight>mixinBorderDisabledRight</ScMixinBorderDisabledRight>
      <ScMixinBorderDisabledBottom>mixinBorderDisabledBottom</ScMixinBorderDisabledBottom>
      <ScMixinBorderDisabledLeft>mixinBorderDisabledLeft</ScMixinBorderDisabledLeft>
      <ScMixinBorderHelpColor>mixinBorderHelpColor</ScMixinBorderHelpColor>
      <ScMixinBorderHelp>mixinBorderHelp</ScMixinBorderHelp>
      <ScMixinBorderHelpTop>mixinBorderHelpTop</ScMixinBorderHelpTop>
      <ScMixinBorderHelpRight>mixinBorderHelpRight</ScMixinBorderHelpRight>
      <ScMixinBorderHelpBottom>mixinBorderHelpBottom</ScMixinBorderHelpBottom>
      <ScMixinBorderHelpLeft>mixinBorderHelpLeft</ScMixinBorderHelpLeft>
      <ScMixinBorderInfoColor>mixinBorderInfoColor</ScMixinBorderInfoColor>
      <ScMixinBorderInfo>mixinBorderInfo</ScMixinBorderInfo>
      <ScMixinBorderInfoTop>mixinBorderInfoTop</ScMixinBorderInfoTop>
      <ScMixinBorderInfoRight>mixinBorderInfoRight</ScMixinBorderInfoRight>
      <ScMixinBorderInfoBottom>mixinBorderInfoBottom</ScMixinBorderInfoBottom>
      <ScMixinBorderInfoLeft>mixinBorderInfoLeft</ScMixinBorderInfoLeft>
      <ScMixinBorderSuccessColor>mixinBorderSuccessColor</ScMixinBorderSuccessColor>
      <ScMixinBorderSuccess>mixinBorderSuccess</ScMixinBorderSuccess>
      <ScMixinBorderSuccessTop>mixinBorderSuccessTop</ScMixinBorderSuccessTop>
      <ScMixinBorderSuccessRight>mixinBorderSuccessRight</ScMixinBorderSuccessRight>
      <ScMixinBorderSuccessBottom>mixinBorderSuccessBottom</ScMixinBorderSuccessBottom>
      <ScMixinBorderSuccessLeft>mixinBorderSuccessLeft</ScMixinBorderSuccessLeft>
      <ScMixinBorderWarningColor>mixinBorderWarningColor</ScMixinBorderWarningColor>
      <ScMixinBorderWarning>mixinBorderWarning</ScMixinBorderWarning>
      <ScMixinBorderWarningTop>mixinBorderWarningTop</ScMixinBorderWarningTop>
      <ScMixinBorderWarningRight>mixinBorderWarningRight</ScMixinBorderWarningRight>
      <ScMixinBorderWarningBottom>mixinBorderWarningBottom</ScMixinBorderWarningBottom>
      <ScMixinBorderWarningLeft>mixinBorderWarningLeft</ScMixinBorderWarningLeft>
      <ScMixinBorderErrorColor>mixinBorderErrorColor</ScMixinBorderErrorColor>
      <ScMixinBorderError>mixinBorderError</ScMixinBorderError>
      <ScMixinBorderErrorTop>mixinBorderErrorTop</ScMixinBorderErrorTop>
      <ScMixinBorderErrorRight>mixinBorderErrorRight</ScMixinBorderErrorRight>
      <ScMixinBorderErrorBottom>mixinBorderErrorBottom</ScMixinBorderErrorBottom>
      <ScMixinBorderErrorLeft>mixinBorderErrorLeft</ScMixinBorderErrorLeft>
      <ScMixinBorderDangerColor>mixinBorderDangerColor</ScMixinBorderDangerColor>
      <ScMixinBorderDanger>mixinBorderDanger</ScMixinBorderDanger>
      <ScMixinBorderDangerTop>mixinBorderDangerTop</ScMixinBorderDangerTop>
      <ScMixinBorderDangerRight>mixinBorderDangerRight</ScMixinBorderDangerRight>
      <ScMixinBorderDangerBottom>mixinBorderDangerBottom</ScMixinBorderDangerBottom>
      <ScMixinBorderDangerLeft>mixinBorderDangerLeft</ScMixinBorderDangerLeft>
    </ScBricks>
  </>;
}
