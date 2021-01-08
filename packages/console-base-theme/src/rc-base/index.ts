import styled from 'styled-components';

import {
  glyph
} from '../helper';
import {
  mixinButtonReset,
  mixinTypoFontBase
} from '../mixin';

// 带基础样式的基础组件，不要直接用，用它来生出更好的组件

export const FontBase = styled.div`
  ${mixinTypoFontBase}
`;

export const FontBase12 = styled(FontBase)`
  font-size: 12px;
`;

export const FontBase14 = styled(FontBase)`
  font-size: 14px;
`;

export const GlyphBase = styled.i`
  ${glyph.base}
`;

export const ButtonBase = styled.button`
  ${mixinButtonReset}
`;
