import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  Button
} from '@alicloud/demo-rc-elements';

import {
  mixinButtonShadow,
  mixinButtonSizeXs,
  mixinButtonSizeS,
  mixinButtonSizeM,
  mixinButtonSizeL,
  mixinButtonSizeXl,
  mixinButtonReset,
  mixinButtonDanger,
  mixinButtonMenu,
  mixinButtonPrimary,
  mixinButtonSecondary,
  mixinButtonSecondaryAlt,
  mixinButtonTertiary,
  mixinButtonTertiaryAlt,
  mixinButtonBrandPrimary,
  mixinButtonBrandSecondary,
  mixinButtonBrandSecondaryAlt,
  mixinButtonBrandTertiary,
  mixinButtonTextPrimary,
  mixinButtonTextSecondary,
  mixinButtonTextTertiary,
  mixinButtonTextBrandPrimary,
  mixinButtonTextBrandSecondary
} from '../../../src';

const ScButton = styled.button`
  ${mixinButtonReset};
`;

const ScButtonBase = styled(ScButton)`
  margin: 8px 2px;
  padding: 4px 4px;
`;
const ScButtonBaseText = styled(ScButton)`
  margin: 8px 2px;
`;

const ScMixinButtonSizeXs = styled(ScButtonBase)`
  ${mixinButtonSizeXs}
  ${mixinButtonShadow}
  ${mixinButtonDanger}
`;
const ScMixinButtonSizeS = styled(ScButtonBase)`
  ${mixinButtonSizeS}
  ${mixinButtonShadow}
  ${mixinButtonDanger}
`;
const ScMixinButtonSizeM = styled(ScButtonBase)`
  ${mixinButtonSizeM}
  ${mixinButtonShadow}
  ${mixinButtonDanger}
`;
const ScMixinButtonSizeL = styled(ScButtonBase)`
  ${mixinButtonSizeL}
  ${mixinButtonShadow}
  ${mixinButtonDanger}
`;
const ScMixinButtonSizeXl = styled(ScButtonBase)`
  ${mixinButtonSizeXl}
  ${mixinButtonShadow}
  ${mixinButtonDanger}
`;
const ScMixinButtonDanger = styled(ScButtonBase)`
  ${mixinButtonDanger}
`;
const ScMixinButtonMenu = styled(ScButtonBase)`
  ${mixinButtonMenu}
`;
const ScMixinButtonPrimary = styled(ScButtonBase)`
  ${mixinButtonPrimary}
`;
const ScMixinButtonSecondary = styled(ScButtonBase)`
  ${mixinButtonSecondary}
`;
const ScMixinButtonSecondaryAlt = styled(ScButtonBase)`
  ${mixinButtonSecondaryAlt}
`;
const ScMixinButtonTertiary = styled(ScButtonBase)`
  ${mixinButtonTertiary}
`;
const ScMixinButtonTertiaryAlt = styled(ScButtonBase)`
  ${mixinButtonTertiaryAlt}
`;
const ScMixinButtonBrandPrimary = styled(ScButtonBase)`
  ${mixinButtonBrandPrimary}
`;
const ScMixinButtonBrandSecondary = styled(ScButtonBase)`
  ${mixinButtonBrandSecondary}
`;
const ScMixinButtonBrandSecondaryAlt = styled(ScButtonBase)`
  ${mixinButtonBrandSecondaryAlt}
`;
const ScMixinButtonBrandTertiary = styled(ScButtonBase)`
  ${mixinButtonBrandTertiary}
`;
const ScMixinButtonTextPrimary = styled(ScButtonBaseText)`
  ${mixinButtonTextPrimary};
`;
const ScMixinButtonTextSecondary = styled(ScButtonBaseText)`
  ${mixinButtonTextSecondary};
`;
const ScMixinButtonTextTertiary = styled(ScButtonBaseText)`
  ${mixinButtonTextTertiary};
`;
const ScMixinButtonTextBrandPrimary = styled(ScButtonBaseText)`
  ${mixinButtonTextBrandPrimary}
`;
const ScMixinButtonTextBrandSecondary = styled(ScButtonBaseText)`
  ${mixinButtonTextBrandSecondary}
`;

export default function MixinButton(): JSX.Element {
  const [stateDisabled, setStateDisabled] = useState<boolean>(false);
  const handleToggleDisabled = useCallback(() => setStateDisabled(!stateDisabled), [stateDisabled, setStateDisabled]);
  
  return <>
    <Button onClick={handleToggleDisabled}>toggle disabled - {`${stateDisabled}`}</Button>
    <div>
      <ScMixinButtonSizeXs disabled={stateDisabled}>size-xs size + shadow</ScMixinButtonSizeXs>
      <ScMixinButtonSizeS disabled={stateDisabled}>size-s size + shadow</ScMixinButtonSizeS>
      <ScMixinButtonSizeM disabled={stateDisabled}>size-m size + shadow</ScMixinButtonSizeM>
      <ScMixinButtonSizeL disabled={stateDisabled}>size-l size + shadow</ScMixinButtonSizeL>
      <ScMixinButtonSizeXl disabled={stateDisabled}>size-xl size + shadow</ScMixinButtonSizeXl>
    </div>
    <div>
      <ScMixinButtonDanger disabled={stateDisabled}>danger</ScMixinButtonDanger>
      <ScMixinButtonMenu disabled={stateDisabled}>menu</ScMixinButtonMenu>
    </div>
    <div>
      <ScMixinButtonPrimary disabled={stateDisabled}>primary</ScMixinButtonPrimary>
      <ScMixinButtonSecondary disabled={stateDisabled}>secondary</ScMixinButtonSecondary>
      <ScMixinButtonSecondaryAlt disabled={stateDisabled}>secondary:alt</ScMixinButtonSecondaryAlt>
      <ScMixinButtonTertiary disabled={stateDisabled}>tertiary</ScMixinButtonTertiary>
      <ScMixinButtonTertiaryAlt disabled={stateDisabled}>tertiary:alt</ScMixinButtonTertiaryAlt>
    </div>
    <div>
      <ScMixinButtonBrandPrimary disabled={stateDisabled}>brand-primary</ScMixinButtonBrandPrimary>
      <ScMixinButtonBrandSecondary disabled={stateDisabled}>brand-secondary</ScMixinButtonBrandSecondary>
      <ScMixinButtonBrandSecondaryAlt disabled={stateDisabled}>brand-secondary:alt</ScMixinButtonBrandSecondaryAlt>
      <ScMixinButtonBrandTertiary disabled={stateDisabled}>brand-tertiary</ScMixinButtonBrandTertiary>
    </div>
    <div>
      <ScMixinButtonTextPrimary disabled={stateDisabled}>text-primary</ScMixinButtonTextPrimary>
      <ScMixinButtonTextSecondary disabled={stateDisabled}>text-secondary</ScMixinButtonTextSecondary>
      <ScMixinButtonTextTertiary disabled={stateDisabled}>text-tertiary</ScMixinButtonTextTertiary>
      <ScMixinButtonTextBrandPrimary disabled={stateDisabled}>text-brand-primary</ScMixinButtonTextBrandPrimary>
      <ScMixinButtonTextBrandSecondary disabled={stateDisabled}>text-brand-secondary</ScMixinButtonTextBrandSecondary>
    </div>
  </>;
}
