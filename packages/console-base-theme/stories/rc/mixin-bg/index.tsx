import React from 'react';
import {
  css
} from 'styled-components';

import MixinElements from '../_mixin-elements';
import Grid from '../_grid';

const REG = /^mixinBg(\w+)$/;

const cssExtra = css`
  padding: 8px;
  color: #666;
`;

export default function MixinBg(): JSX.Element {
  return <Grid gap={0}>
    <MixinElements reg={REG} extra={cssExtra} />
  </Grid>;
}
