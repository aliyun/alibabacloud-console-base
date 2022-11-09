import React from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextTertiary,
  mixinBgPrimary,
  mixinBgSecondary,
  mixinBgTertiary,
  mixinBorderPrimary,
  mixinBorderSecondary,
  mixinBorderTertiary,
  mixinButtonPrimary,
  mixinButtonSecondary,
  mixinButtonTertiary
} from '../../../src';

const ScItem = styled.div`
  padding: 12px;
`;
const ScMixinTextPrimary = styled(ScItem)`
  ${mixinTextPrimary}
`;
const ScMixinTextSecondary = styled(ScItem)`
  ${mixinTextSecondary}
`;
const ScMixinTextTertiary = styled(ScItem)`
  ${mixinTextTertiary}
`;
const ScMixinBgPrimary = styled(ScItem)`
  ${mixinBgPrimary}
`;
const ScMixinBgSecondary = styled(ScItem)`
  ${mixinBgSecondary}
`;
const ScMixinBgTertiary = styled(ScItem)`
  ${mixinBgTertiary}
`;
const ScMixinBorderPrimary = styled(ScItem)`
  ${mixinBorderPrimary}
`;
const ScMixinBorderSecondary = styled(ScItem)`
  ${mixinBorderSecondary}
`;
const ScMixinBorderTertiary = styled(ScItem)`
  ${mixinBorderTertiary}
`;
const ScMixinButtonPrimary = styled(ScItem)`
  ${mixinButtonPrimary}
`;
const ScMixinButtonSecondary = styled(ScItem)`
  ${mixinButtonSecondary}
`;
const ScMixinButtonTertiary = styled(ScItem)`
  ${mixinButtonTertiary}
`;

/**
 * 专门对 primary-secondary-tertiary 色系对比
 */
export default function MixinPst(): JSX.Element {
  return <>
    <ScMixinTextPrimary>mixinTextPrimary</ScMixinTextPrimary>
    <ScMixinTextSecondary>mixinTextSecondary</ScMixinTextSecondary>
    <ScMixinTextTertiary>mixinTextTertiary</ScMixinTextTertiary>
    <ScMixinBgPrimary>mixinBgPrimary</ScMixinBgPrimary>
    <ScMixinBgSecondary>mixinBgSecondary</ScMixinBgSecondary>
    <ScMixinBgTertiary>mixinBgTertiary</ScMixinBgTertiary>
    <ScMixinBorderPrimary>mixinBorderPrimary</ScMixinBorderPrimary>
    <ScMixinBorderSecondary>mixinBorderSecondary</ScMixinBorderSecondary>
    <ScMixinBorderTertiary>mixinBorderTertiary</ScMixinBorderTertiary>
    <ScMixinButtonPrimary>mixinButtonPrimary</ScMixinButtonPrimary>
    <ScMixinButtonSecondary>mixinButtonSecondary</ScMixinButtonSecondary>
    <ScMixinButtonTertiary>mixinButtonTertiary</ScMixinButtonTertiary>
  </>;
}
