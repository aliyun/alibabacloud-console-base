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
      <ScMixinBorderBrandColor>brand-color</ScMixinBorderBrandColor>
      <ScMixinBorderBrand>brand</ScMixinBorderBrand>
      <ScMixinBorderBrandTop>brand-top</ScMixinBorderBrandTop>
      <ScMixinBorderBrandRight>brand-right</ScMixinBorderBrandRight>
      <ScMixinBorderBrandBottom>brand-bottom</ScMixinBorderBrandBottom>
      <ScMixinBorderBrandLeft>brandLeft</ScMixinBorderBrandLeft>
      <ScMixinBorderAccentColor>accent-color</ScMixinBorderAccentColor>
      <ScMixinBorderAccent>accent</ScMixinBorderAccent>
      <ScMixinBorderAccentTop>accent-top</ScMixinBorderAccentTop>
      <ScMixinBorderAccentRight>accent-right</ScMixinBorderAccentRight>
      <ScMixinBorderAccentBottom>accent-bottom</ScMixinBorderAccentBottom>
      <ScMixinBorderAccentLeft>accentLeft</ScMixinBorderAccentLeft>
      <ScMixinBorderPrimaryColor>primary-color</ScMixinBorderPrimaryColor>
      <ScMixinBorderPrimary>primary</ScMixinBorderPrimary>
      <ScMixinBorderPrimaryTop>primary-top</ScMixinBorderPrimaryTop>
      <ScMixinBorderPrimaryRight>primary-right</ScMixinBorderPrimaryRight>
      <ScMixinBorderPrimaryBottom>primary-bottom</ScMixinBorderPrimaryBottom>
      <ScMixinBorderPrimaryLeft>primaryLeft</ScMixinBorderPrimaryLeft>
      <ScMixinBorderSecondaryColor>secondary-color</ScMixinBorderSecondaryColor>
      <ScMixinBorderSecondary>secondary</ScMixinBorderSecondary>
      <ScMixinBorderSecondaryTop>secondary-top</ScMixinBorderSecondaryTop>
      <ScMixinBorderSecondaryRight>secondary-right</ScMixinBorderSecondaryRight>
      <ScMixinBorderSecondaryBottom>secondary-bottom</ScMixinBorderSecondaryBottom>
      <ScMixinBorderSecondaryLeft>secondaryLeft</ScMixinBorderSecondaryLeft>
      <ScMixinBorderTertiaryColor>tertiary-color</ScMixinBorderTertiaryColor>
      <ScMixinBorderTertiary>tertiary</ScMixinBorderTertiary>
      <ScMixinBorderTertiaryTop>tertiary-top</ScMixinBorderTertiaryTop>
      <ScMixinBorderTertiaryRight>tertiary-right</ScMixinBorderTertiaryRight>
      <ScMixinBorderTertiaryBottom>tertiary-bottom</ScMixinBorderTertiaryBottom>
      <ScMixinBorderTertiaryLeft>tertiaryLeft</ScMixinBorderTertiaryLeft>
      <ScMixinBorderDisabledColor>disabled-color</ScMixinBorderDisabledColor>
      <ScMixinBorderDisabled>disabled</ScMixinBorderDisabled>
      <ScMixinBorderDisabledTop>disabled-top</ScMixinBorderDisabledTop>
      <ScMixinBorderDisabledRight>disabled-right</ScMixinBorderDisabledRight>
      <ScMixinBorderDisabledBottom>disabled-bottom</ScMixinBorderDisabledBottom>
      <ScMixinBorderDisabledLeft>disabledLeft</ScMixinBorderDisabledLeft>
      <ScMixinBorderHelpColor>help-color</ScMixinBorderHelpColor>
      <ScMixinBorderHelp>help</ScMixinBorderHelp>
      <ScMixinBorderHelpTop>help-top</ScMixinBorderHelpTop>
      <ScMixinBorderHelpRight>help-right</ScMixinBorderHelpRight>
      <ScMixinBorderHelpBottom>help-bottom</ScMixinBorderHelpBottom>
      <ScMixinBorderHelpLeft>helpLeft</ScMixinBorderHelpLeft>
      <ScMixinBorderInfoColor>info-color</ScMixinBorderInfoColor>
      <ScMixinBorderInfo>info</ScMixinBorderInfo>
      <ScMixinBorderInfoTop>info-top</ScMixinBorderInfoTop>
      <ScMixinBorderInfoRight>info-right</ScMixinBorderInfoRight>
      <ScMixinBorderInfoBottom>info-bottom</ScMixinBorderInfoBottom>
      <ScMixinBorderInfoLeft>infoLeft</ScMixinBorderInfoLeft>
      <ScMixinBorderSuccessColor>success-color</ScMixinBorderSuccessColor>
      <ScMixinBorderSuccess>success</ScMixinBorderSuccess>
      <ScMixinBorderSuccessTop>success-top</ScMixinBorderSuccessTop>
      <ScMixinBorderSuccessRight>success-right</ScMixinBorderSuccessRight>
      <ScMixinBorderSuccessBottom>success-bottom</ScMixinBorderSuccessBottom>
      <ScMixinBorderSuccessLeft>successLeft</ScMixinBorderSuccessLeft>
      <ScMixinBorderWarningColor>warning-color</ScMixinBorderWarningColor>
      <ScMixinBorderWarning>warning</ScMixinBorderWarning>
      <ScMixinBorderWarningTop>warning-top</ScMixinBorderWarningTop>
      <ScMixinBorderWarningRight>warning-right</ScMixinBorderWarningRight>
      <ScMixinBorderWarningBottom>warning-bottom</ScMixinBorderWarningBottom>
      <ScMixinBorderWarningLeft>warningLeft</ScMixinBorderWarningLeft>
      <ScMixinBorderErrorColor>error-color</ScMixinBorderErrorColor>
      <ScMixinBorderError>error</ScMixinBorderError>
      <ScMixinBorderErrorTop>error-top</ScMixinBorderErrorTop>
      <ScMixinBorderErrorRight>error-right</ScMixinBorderErrorRight>
      <ScMixinBorderErrorBottom>error-bottom</ScMixinBorderErrorBottom>
      <ScMixinBorderErrorLeft>errorLeft</ScMixinBorderErrorLeft>
      <ScMixinBorderDangerColor>danger-color</ScMixinBorderDangerColor>
      <ScMixinBorderDanger>danger</ScMixinBorderDanger>
      <ScMixinBorderDangerTop>danger-top</ScMixinBorderDangerTop>
      <ScMixinBorderDangerRight>danger-right</ScMixinBorderDangerRight>
      <ScMixinBorderDangerBottom>danger-bottom</ScMixinBorderDangerBottom>
      <ScMixinBorderDangerLeft>dangerLeft</ScMixinBorderDangerLeft>
    </ScBricks>
  </>;
}
