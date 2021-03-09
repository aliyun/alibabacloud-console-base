import React from 'react';
import styled from 'styled-components';

import {
  mixinBgWhite,
  mixinShadowM
} from '@alicloud/console-base-theme';

import {
  Z_INDEX_SANDWICH_BELOW
} from '../../const';
import {
  useRect
} from '../../model';

const ScSandwichBelow = styled.div`
  position: absolute;
  z-index: ${Z_INDEX_SANDWICH_BELOW};
  box-sizing: content-box;
  transition: all linear 200ms;
  ${mixinBgWhite}
  ${mixinShadowM}
`;

export default function SandwichBelow(): JSX.Element {
  const rect = useRect();
  
  return <ScSandwichBelow style={rect} />;
}
