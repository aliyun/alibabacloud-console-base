import React from 'react';
import {
  css
} from 'styled-components';

import MixinElements from '../_mixin-elements';
import Grid from '../_grid';

const REG = /^mixinBorder(\w+)$/;
const REG_NOT = /^mixinBorderRadius(\w+)$/;

const cssExtra = css`
  padding: 8px;
  border: 3px dashed transparent;
  background-color: rgba(128, 0, 240, 0.01);
  color: #666;
`;

export default function MixinBorder(): JSX.Element {
  return <Grid>
    <MixinElements reg={REG} regNot={REG_NOT} extra={cssExtra} />
  </Grid>;
}
