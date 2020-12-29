import React from 'react';
import styled from 'styled-components';

import {
  H2,
  P
} from '@alicloud/demo-rc-elements';

import {
  mixinButtonSizeXS,
  mixinButtonSizeS,
  mixinButtonSizeM,
  mixinButtonSizeL,
  mixinButtonSizeXL,
  mixinButtonReset,
  mixinButtonDanger,
  mixinButtonPrimary,
  mixinButtonSecondary,
  mixinButtonTertiary,
  mixinButtonBrandPrimary,
  mixinButtonBrandSecondary,
  mixinButtonBrandTertiary,
  mixinButtonTextPrimary,
  mixinButtonTextSecondary,
  mixinButtonTextTertiary
} from '../../../src';

const ScButtonBase = styled.button`
  ${mixinButtonReset};
  margin: 16px 8px;
  padding: 6px 8px;
`;

const ScMixinButtonSizeXS = styled(ScButtonBase)`
  ${mixinButtonSizeXS}
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
const ScMixinButtonSizeXL = styled(ScButtonBase)`
  ${mixinButtonSizeXL}
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
const ScMixinButtonTextPrimary = styled(ScButtonBase)`
  ${mixinButtonTextPrimary};
`;
const ScMixinButtonTextSecondary = styled(ScButtonBase)`
  ${mixinButtonTextSecondary};
`;
const ScMixinButtonTextTertiary = styled(ScButtonBase)`
  ${mixinButtonTextTertiary};
`;

export default function MixinButton(): JSX.Element {
  return <>
    <H2>mixins for button</H2>
    <div>
      <ScMixinButtonSizeXS>size-xs</ScMixinButtonSizeXS>
      <ScMixinButtonSizeS>size-s</ScMixinButtonSizeS>
      <ScMixinButtonSizeM>size-m</ScMixinButtonSizeM>
      <ScMixinButtonSizeL>size-l</ScMixinButtonSizeL>
      <ScMixinButtonSizeXL>size-xl</ScMixinButtonSizeXL>
    </div>
    <div>
      <ScMixinButtonDanger>danger</ScMixinButtonDanger>
      <ScMixinButtonPrimary>primary</ScMixinButtonPrimary>
      <ScMixinButtonSecondary>secondary</ScMixinButtonSecondary>
      <ScMixinButtonTertiary>tertiary</ScMixinButtonTertiary>
      <ScMixinButtonBrandPrimary>brand-primary</ScMixinButtonBrandPrimary>
      <ScMixinButtonBrandSecondary>brand-secondary</ScMixinButtonBrandSecondary>
      <ScMixinButtonBrandTertiary>brand-tertiary</ScMixinButtonBrandTertiary>
      <ScMixinButtonTextPrimary>text-primary</ScMixinButtonTextPrimary>
      <ScMixinButtonTextSecondary>text-secondary</ScMixinButtonTextSecondary>
      <ScMixinButtonTextTertiary>text-tertiary</ScMixinButtonTextTertiary>
    </div>
    <div>
      <ScMixinButtonDanger disabled>danger</ScMixinButtonDanger>
      <ScMixinButtonPrimary disabled>primary</ScMixinButtonPrimary>
      <ScMixinButtonSecondary disabled>secondary</ScMixinButtonSecondary>
      <ScMixinButtonTertiary disabled>tertiary</ScMixinButtonTertiary>
      <ScMixinButtonBrandPrimary disabled>brand-primary</ScMixinButtonBrandPrimary>
      <ScMixinButtonBrandSecondary disabled>brand-secondary</ScMixinButtonBrandSecondary>
      <ScMixinButtonBrandTertiary disabled>brand-tertiary</ScMixinButtonBrandTertiary>
      <ScMixinButtonTextPrimary disabled>text-primary</ScMixinButtonTextPrimary>
      <ScMixinButtonTextSecondary disabled>text-secondary</ScMixinButtonTextSecondary>
      <ScMixinButtonTextTertiary disabled>text-tertiary</ScMixinButtonTextTertiary>
    </div>
    <P>让底部可见...</P>
  </>;
}
