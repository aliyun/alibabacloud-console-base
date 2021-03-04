import styled from 'styled-components';

import {
  mixinTypoFontBase
} from '@alicloud/console-base-theme';

export const FontBase = styled.div`
  ${mixinTypoFontBase}
`;

export const FontBase12 = styled(FontBase)`
  font-size: 12px;
`;

export const FontBase14 = styled(FontBase)`
  font-size: 14px;
`;
