import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  mixinButtonSizeXs,
  mixinButtonSizeS,
  mixinButtonSizeM,
  mixinButtonSizeL,
  mixinButtonSizeXl,
  mixinButtonReset,
  mixinButtonDanger,
  mixinButtonMenu,
  mixinButtonMenuActive,
  mixinButtonPrimary,
  mixinButtonSecondary,
  mixinButtonTertiary,
  mixinButtonBrandPrimary,
  mixinButtonBrandSecondary,
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
  ${mixinButtonDanger}
`;
const ScMixinButtonSizeS = styled(ScButtonBase)`
  ${mixinButtonSizeS}
  ${mixinButtonPrimary}
`;
const ScMixinButtonSizeM = styled(ScButtonBase)`
  ${mixinButtonSizeM}
  ${mixinButtonSecondary}
`;
const ScMixinButtonSizeL = styled(ScButtonBase)`
  ${mixinButtonSizeL}
  ${mixinButtonBrandPrimary}
`;
const ScMixinButtonSizeXl = styled(ScButtonBase)`
  ${mixinButtonSizeXl}
  ${mixinButtonBrandSecondary}
`;
const ScMixinButtonPrimary = styled(ScButtonBase)`
  ${mixinButtonPrimary}
`;
const ScMixinButtonSecondary = styled(ScButtonBase)`
  ${mixinButtonSecondary}
`;
const ScMixinButtonTertiary = styled(ScButtonBase)`
  ${mixinButtonTertiary}
`;
const ScMixinButtonBrandPrimary = styled(ScButtonBase)`
  ${mixinButtonBrandPrimary}
`;
const ScMixinButtonBrandSecondary = styled(ScButtonBase)`
  ${mixinButtonBrandSecondary}
`;
const ScMixinButtonBrandTertiary = styled(ScButtonBase)`
  ${mixinButtonBrandTertiary}
`;
const ScMixinButtonDanger = styled(ScButtonBase)`
  ${mixinButtonDanger}
`;
const ScMixinButtonMenu = styled(ScButtonBase)`
  ${mixinButtonMenu}
`;
const ScMixinButtonMenuActive = styled(ScButtonBase)`
  ${mixinButtonMenuActive}
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
    <H1>mixins for button</H1>
    <Button onClick={handleToggleDisabled}>toggle disabled - {`${stateDisabled}`}</Button>
    <div>
      <ScMixinButtonSizeXs disabled={stateDisabled}>size-xs</ScMixinButtonSizeXs>
      <ScMixinButtonSizeS disabled={stateDisabled}>size-s</ScMixinButtonSizeS>
      <ScMixinButtonSizeM disabled={stateDisabled}>size-m</ScMixinButtonSizeM>
      <ScMixinButtonSizeL disabled={stateDisabled}>size-l</ScMixinButtonSizeL>
      <ScMixinButtonSizeXl disabled={stateDisabled}>size-xl</ScMixinButtonSizeXl>
    </div>
    <div>
      <ScMixinButtonDanger disabled={stateDisabled}>danger</ScMixinButtonDanger>
      <ScMixinButtonMenu disabled={stateDisabled}>menu</ScMixinButtonMenu>
      <ScMixinButtonMenuActive disabled={stateDisabled}>menu-active</ScMixinButtonMenuActive>
    </div>
    <div>
      <ScMixinButtonPrimary disabled={stateDisabled}>primary</ScMixinButtonPrimary>
      <ScMixinButtonSecondary disabled={stateDisabled}>secondary</ScMixinButtonSecondary>
      <ScMixinButtonTertiary disabled={stateDisabled}>tertiary</ScMixinButtonTertiary>
    </div>
    <div>
      <ScMixinButtonBrandPrimary disabled={stateDisabled}>brand-primary</ScMixinButtonBrandPrimary>
      <ScMixinButtonBrandSecondary disabled={stateDisabled}>brand-secondary</ScMixinButtonBrandSecondary>
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
