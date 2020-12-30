import React from 'react';
import styled from 'styled-components';

import {
  H1
} from '@alicloud/demo-rc-elements';

import {
  mixinBorderDisabledColor,
  mixinBorderDisabled,
  mixinBorderDisabledTop,
  mixinBorderDisabledRight,
  mixinBorderDisabledBottom,
  mixinBorderDisabledLeft,
  mixinBorderBrandColor,
  mixinBorderBrand,
  mixinBorderBrandTop,
  mixinBorderBrandRight,
  mixinBorderBrandBottom,
  mixinBorderBrandLeft,
  mixinBorderBrandHoverColor,
  mixinBorderBrandHover,
  mixinBorderBrandHoverTop,
  mixinBorderBrandHoverRight,
  mixinBorderBrandHoverBottom,
  mixinBorderBrandHoverLeft,
  mixinBorderBrandActiveColor,
  mixinBorderBrandActive,
  mixinBorderBrandActiveTop,
  mixinBorderBrandActiveRight,
  mixinBorderBrandActiveBottom,
  mixinBorderBrandActiveLeft,
  mixinBorderAccentColor,
  mixinBorderAccent,
  mixinBorderAccentTop,
  mixinBorderAccentRight,
  mixinBorderAccentBottom,
  mixinBorderAccentLeft,
  mixinBorderAccentHoverColor,
  mixinBorderAccentHover,
  mixinBorderAccentHoverTop,
  mixinBorderAccentHoverRight,
  mixinBorderAccentHoverBottom,
  mixinBorderAccentHoverLeft,
  mixinBorderAccentActiveColor,
  mixinBorderAccentActive,
  mixinBorderAccentActiveTop,
  mixinBorderAccentActiveRight,
  mixinBorderAccentActiveBottom,
  mixinBorderAccentActiveLeft,
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
  border: 3px dashed transparent;
  background-color: rgba(0, 0, 0, 0.01);
  color: #666;
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
const ScMixinBorderBrandHoverColor = styled(ScBrick)`
  ${mixinBorderBrandHoverColor}
`;
const ScMixinBorderBrandHover = styled(ScBrick)`
  ${mixinBorderBrandHover}
`;
const ScMixinBorderBrandHoverTop = styled(ScBrick)`
  ${mixinBorderBrandHoverTop}
`;
const ScMixinBorderBrandHoverRight = styled(ScBrick)`
  ${mixinBorderBrandHoverRight}
`;
const ScMixinBorderBrandHoverBottom = styled(ScBrick)`
  ${mixinBorderBrandHoverBottom}
`;
const ScMixinBorderBrandHoverLeft = styled(ScBrick)`
  ${mixinBorderBrandHoverLeft}
`;
const ScMixinBorderBrandActiveColor = styled(ScBrick)`
  ${mixinBorderBrandActiveColor}
`;
const ScMixinBorderBrandActive = styled(ScBrick)`
  ${mixinBorderBrandActive}
`;
const ScMixinBorderBrandActiveTop = styled(ScBrick)`
  ${mixinBorderBrandActiveTop}
`;
const ScMixinBorderBrandActiveRight = styled(ScBrick)`
  ${mixinBorderBrandActiveRight}
`;
const ScMixinBorderBrandActiveBottom = styled(ScBrick)`
  ${mixinBorderBrandActiveBottom}
`;
const ScMixinBorderBrandActiveLeft = styled(ScBrick)`
  ${mixinBorderBrandActiveLeft}
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
const ScMixinBorderAccentHoverColor = styled(ScBrick)`
  ${mixinBorderAccentHoverColor}
`;
const ScMixinBorderAccentHover = styled(ScBrick)`
  ${mixinBorderAccentHover}
`;
const ScMixinBorderAccentHoverTop = styled(ScBrick)`
  ${mixinBorderAccentHoverTop}
`;
const ScMixinBorderAccentHoverRight = styled(ScBrick)`
  ${mixinBorderAccentHoverRight}
`;
const ScMixinBorderAccentHoverBottom = styled(ScBrick)`
  ${mixinBorderAccentHoverBottom}
`;
const ScMixinBorderAccentHoverLeft = styled(ScBrick)`
  ${mixinBorderAccentHoverLeft}
`;
const ScMixinBorderAccentActiveColor = styled(ScBrick)`
  ${mixinBorderAccentActiveColor}
`;
const ScMixinBorderAccentActive = styled(ScBrick)`
  ${mixinBorderAccentActive}
`;
const ScMixinBorderAccentActiveTop = styled(ScBrick)`
  ${mixinBorderAccentActiveTop}
`;
const ScMixinBorderAccentActiveRight = styled(ScBrick)`
  ${mixinBorderAccentActiveRight}
`;
const ScMixinBorderAccentActiveBottom = styled(ScBrick)`
  ${mixinBorderAccentActiveBottom}
`;
const ScMixinBorderAccentActiveLeft = styled(ScBrick)`
  ${mixinBorderAccentActiveLeft}
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
    <H1>mixins for border</H1>
    <ScBricks>
      <ScMixinBorderDisabledColor>disabled-color</ScMixinBorderDisabledColor>
      <ScMixinBorderDisabled>disabled</ScMixinBorderDisabled>
      <ScMixinBorderDisabledTop>disabled-top</ScMixinBorderDisabledTop>
      <ScMixinBorderDisabledRight>disabled-right</ScMixinBorderDisabledRight>
      <ScMixinBorderDisabledBottom>disabled-bottom</ScMixinBorderDisabledBottom>
      <ScMixinBorderDisabledLeft>disabled-left</ScMixinBorderDisabledLeft>
      <ScMixinBorderBrandColor>brand-color</ScMixinBorderBrandColor>
      <ScMixinBorderBrand>brand</ScMixinBorderBrand>
      <ScMixinBorderBrandTop>brand-top</ScMixinBorderBrandTop>
      <ScMixinBorderBrandRight>brand-right</ScMixinBorderBrandRight>
      <ScMixinBorderBrandBottom>brand-bottom</ScMixinBorderBrandBottom>
      <ScMixinBorderBrandLeft>brand-left</ScMixinBorderBrandLeft>
      <ScMixinBorderBrandHoverColor>brandHover-color</ScMixinBorderBrandHoverColor>
      <ScMixinBorderBrandHover>brandHover</ScMixinBorderBrandHover>
      <ScMixinBorderBrandHoverTop>brandHover-top</ScMixinBorderBrandHoverTop>
      <ScMixinBorderBrandHoverRight>brandHover-right</ScMixinBorderBrandHoverRight>
      <ScMixinBorderBrandHoverBottom>brandHover-bottom</ScMixinBorderBrandHoverBottom>
      <ScMixinBorderBrandHoverLeft>brandHover-left</ScMixinBorderBrandHoverLeft>
      <ScMixinBorderBrandActiveColor>brandActive-color</ScMixinBorderBrandActiveColor>
      <ScMixinBorderBrandActive>brandActive</ScMixinBorderBrandActive>
      <ScMixinBorderBrandActiveTop>brandActive-top</ScMixinBorderBrandActiveTop>
      <ScMixinBorderBrandActiveRight>brandActive-right</ScMixinBorderBrandActiveRight>
      <ScMixinBorderBrandActiveBottom>brandActive-bottom</ScMixinBorderBrandActiveBottom>
      <ScMixinBorderBrandActiveLeft>brandActive-left</ScMixinBorderBrandActiveLeft>
      <ScMixinBorderAccentColor>accent-color</ScMixinBorderAccentColor>
      <ScMixinBorderAccent>accent</ScMixinBorderAccent>
      <ScMixinBorderAccentTop>accent-top</ScMixinBorderAccentTop>
      <ScMixinBorderAccentRight>accent-right</ScMixinBorderAccentRight>
      <ScMixinBorderAccentBottom>accent-bottom</ScMixinBorderAccentBottom>
      <ScMixinBorderAccentLeft>accent-left</ScMixinBorderAccentLeft>
      <ScMixinBorderAccentHoverColor>accentHover-color</ScMixinBorderAccentHoverColor>
      <ScMixinBorderAccentHover>accentHover</ScMixinBorderAccentHover>
      <ScMixinBorderAccentHoverTop>accentHover-top</ScMixinBorderAccentHoverTop>
      <ScMixinBorderAccentHoverRight>accentHover-right</ScMixinBorderAccentHoverRight>
      <ScMixinBorderAccentHoverBottom>accentHover-bottom</ScMixinBorderAccentHoverBottom>
      <ScMixinBorderAccentHoverLeft>accentHover-left</ScMixinBorderAccentHoverLeft>
      <ScMixinBorderAccentActiveColor>accentActive-color</ScMixinBorderAccentActiveColor>
      <ScMixinBorderAccentActive>accentActive</ScMixinBorderAccentActive>
      <ScMixinBorderAccentActiveTop>accentActive-top</ScMixinBorderAccentActiveTop>
      <ScMixinBorderAccentActiveRight>accentActive-right</ScMixinBorderAccentActiveRight>
      <ScMixinBorderAccentActiveBottom>accentActive-bottom</ScMixinBorderAccentActiveBottom>
      <ScMixinBorderAccentActiveLeft>accentActive-left</ScMixinBorderAccentActiveLeft>
      <ScMixinBorderPrimaryColor>primary-color</ScMixinBorderPrimaryColor>
      <ScMixinBorderPrimary>primary</ScMixinBorderPrimary>
      <ScMixinBorderPrimaryTop>primary-top</ScMixinBorderPrimaryTop>
      <ScMixinBorderPrimaryRight>primary-right</ScMixinBorderPrimaryRight>
      <ScMixinBorderPrimaryBottom>primary-bottom</ScMixinBorderPrimaryBottom>
      <ScMixinBorderPrimaryLeft>primary-left</ScMixinBorderPrimaryLeft>
      <ScMixinBorderSecondaryColor>secondary-color</ScMixinBorderSecondaryColor>
      <ScMixinBorderSecondary>secondary</ScMixinBorderSecondary>
      <ScMixinBorderSecondaryTop>secondary-top</ScMixinBorderSecondaryTop>
      <ScMixinBorderSecondaryRight>secondary-right</ScMixinBorderSecondaryRight>
      <ScMixinBorderSecondaryBottom>secondary-bottom</ScMixinBorderSecondaryBottom>
      <ScMixinBorderSecondaryLeft>secondary-left</ScMixinBorderSecondaryLeft>
      <ScMixinBorderTertiaryColor>tertiary-color</ScMixinBorderTertiaryColor>
      <ScMixinBorderTertiary>tertiary</ScMixinBorderTertiary>
      <ScMixinBorderTertiaryTop>tertiary-top</ScMixinBorderTertiaryTop>
      <ScMixinBorderTertiaryRight>tertiary-right</ScMixinBorderTertiaryRight>
      <ScMixinBorderTertiaryBottom>tertiary-bottom</ScMixinBorderTertiaryBottom>
      <ScMixinBorderTertiaryLeft>tertiary-left</ScMixinBorderTertiaryLeft>
      <ScMixinBorderHelpColor>help-color</ScMixinBorderHelpColor>
      <ScMixinBorderHelp>help</ScMixinBorderHelp>
      <ScMixinBorderHelpTop>help-top</ScMixinBorderHelpTop>
      <ScMixinBorderHelpRight>help-right</ScMixinBorderHelpRight>
      <ScMixinBorderHelpBottom>help-bottom</ScMixinBorderHelpBottom>
      <ScMixinBorderHelpLeft>help-left</ScMixinBorderHelpLeft>
      <ScMixinBorderInfoColor>info-color</ScMixinBorderInfoColor>
      <ScMixinBorderInfo>info</ScMixinBorderInfo>
      <ScMixinBorderInfoTop>info-top</ScMixinBorderInfoTop>
      <ScMixinBorderInfoRight>info-right</ScMixinBorderInfoRight>
      <ScMixinBorderInfoBottom>info-bottom</ScMixinBorderInfoBottom>
      <ScMixinBorderInfoLeft>info-left</ScMixinBorderInfoLeft>
      <ScMixinBorderSuccessColor>success-color</ScMixinBorderSuccessColor>
      <ScMixinBorderSuccess>success</ScMixinBorderSuccess>
      <ScMixinBorderSuccessTop>success-top</ScMixinBorderSuccessTop>
      <ScMixinBorderSuccessRight>success-right</ScMixinBorderSuccessRight>
      <ScMixinBorderSuccessBottom>success-bottom</ScMixinBorderSuccessBottom>
      <ScMixinBorderSuccessLeft>success-left</ScMixinBorderSuccessLeft>
      <ScMixinBorderWarningColor>warning-color</ScMixinBorderWarningColor>
      <ScMixinBorderWarning>warning</ScMixinBorderWarning>
      <ScMixinBorderWarningTop>warning-top</ScMixinBorderWarningTop>
      <ScMixinBorderWarningRight>warning-right</ScMixinBorderWarningRight>
      <ScMixinBorderWarningBottom>warning-bottom</ScMixinBorderWarningBottom>
      <ScMixinBorderWarningLeft>warning-left</ScMixinBorderWarningLeft>
      <ScMixinBorderErrorColor>error-color</ScMixinBorderErrorColor>
      <ScMixinBorderError>error</ScMixinBorderError>
      <ScMixinBorderErrorTop>error-top</ScMixinBorderErrorTop>
      <ScMixinBorderErrorRight>error-right</ScMixinBorderErrorRight>
      <ScMixinBorderErrorBottom>error-bottom</ScMixinBorderErrorBottom>
      <ScMixinBorderErrorLeft>error-left</ScMixinBorderErrorLeft>
      <ScMixinBorderDangerColor>danger-color</ScMixinBorderDangerColor>
      <ScMixinBorderDanger>danger</ScMixinBorderDanger>
      <ScMixinBorderDangerTop>danger-top</ScMixinBorderDangerTop>
      <ScMixinBorderDangerRight>danger-right</ScMixinBorderDangerRight>
      <ScMixinBorderDangerBottom>danger-bottom</ScMixinBorderDangerBottom>
      <ScMixinBorderDangerLeft>danger-left</ScMixinBorderDangerLeft>
    </ScBricks>
  </>;
}
