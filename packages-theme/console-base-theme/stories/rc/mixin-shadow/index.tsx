import React from 'react';
import {
  css
} from 'styled-components';

import MixinElements from '../_mixin-elements';
import Grid from '../_grid';

const REG = /^mixinShadow(\w+)$/;

const cssExtra = css`
  padding: 8px;
  background-color: rgba(0, 255, 0, 0.05);
  color: #666;
`;

export default function MixinShadow(): JSX.Element {
  return <Grid gap={20}>
    <MixinElements reg={REG} extra={cssExtra} />
  </Grid>;
}
