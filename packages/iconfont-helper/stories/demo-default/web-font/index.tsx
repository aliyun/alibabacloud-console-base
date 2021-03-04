import React from 'react';
import styled from 'styled-components';

import {
  injectWebFont
} from '../../../src';

const fontFamily = injectWebFont('kygag0sd8g');

const ScWebFont = styled.span`
  font-family: ${fontFamily}, sans-serif;
`;

export default function WebFont(): JSX.Element {
  return <ScWebFont>孔子曰：中午不睡，下午崩溃!孟子曰：孔子说的对!</ScWebFont>;
}
