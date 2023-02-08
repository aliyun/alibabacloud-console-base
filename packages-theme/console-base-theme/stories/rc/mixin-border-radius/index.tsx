import React from 'react';
import {
  css
} from 'styled-components';

import MixinElements from '../_mixin-elements';
import Grid from '../_grid';

const REG = /^mixinBorderRadius(\w+)$/;

const cssExtra = css`
  padding: 8px;
  border: 1px solid #999;
  background-color: rgba(128, 0, 240, 0.01);
  color: #666;
`;

export default function MixinBorderRadius(): JSX.Element {
  return <Grid>
    <MixinElements reg={REG} extra={cssExtra} />
  </Grid>;
}
