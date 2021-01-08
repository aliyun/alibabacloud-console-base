import styled from 'styled-components';

import {
  glyph
} from '../helper';
import {
  mixinButtonReset
} from '../mixin';

// 带基础样式的基础组件，不要直接用，用它来生出更好的组件

export const GlyphBase = styled.i`
  ${glyph.base}
`;

export const ButtonBase = styled.button`
  ${mixinButtonReset}
`;
