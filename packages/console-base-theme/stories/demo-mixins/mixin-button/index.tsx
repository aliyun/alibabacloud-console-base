import React from 'react';
import styled from 'styled-components';

import {
  H2,
  P
} from '@alicloud/demo-rc-elements';

import {
  mixinButtonReset,
  mixinButtonDanger,
  mixinButtonPrimary,
  mixinButtonSecondary,
  mixinButtonTertiary,
  mixinButtonTextPrimary,
  mixinButtonTextSecondary,
  mixinButtonTextTertiary
} from '../../../src';

const ScButtonBase = styled.button`
  ${mixinButtonReset};
  margin: 16px 8px;
  padding: 6px 8px;
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
      <ScMixinButtonDanger>mixinButtonDanger</ScMixinButtonDanger>
      <ScMixinButtonPrimary>mixinButtonPrimary</ScMixinButtonPrimary>
      <ScMixinButtonSecondary>mixinButtonSecondary</ScMixinButtonSecondary>
      <ScMixinButtonTertiary>mixinButtonTertiary</ScMixinButtonTertiary>
      <ScMixinButtonTextPrimary>mixinButtonTextPrimary</ScMixinButtonTextPrimary>
      <ScMixinButtonTextSecondary>mixinButtonTextSecondary</ScMixinButtonTextSecondary>
      <ScMixinButtonTextTertiary>mixinButtonTextTertiary</ScMixinButtonTextTertiary>
    </div>
    <div>
      <ScMixinButtonDanger disabled>mixinButtonDanger + disabled</ScMixinButtonDanger>
      <ScMixinButtonPrimary disabled>mixinButtonPrimary + disabled</ScMixinButtonPrimary>
      <ScMixinButtonSecondary disabled>mixinButtonSecondary + disabled</ScMixinButtonSecondary>
      <ScMixinButtonTertiary disabled>mixinButtonTertiary + disabled</ScMixinButtonTertiary>
      <ScMixinButtonTextPrimary disabled>mixinButtonTextPrimary</ScMixinButtonTextPrimary>
      <ScMixinButtonTextSecondary disabled>mixinButtonTextSecondary</ScMixinButtonTextSecondary>
      <ScMixinButtonTextTertiary disabled>mixinButtonTextTertiary</ScMixinButtonTextTertiary>
    </div>
    <P>让底部可见...</P>
  </>;
}
