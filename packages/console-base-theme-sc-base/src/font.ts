import styled from 'styled-components';

import {
  mixinTypoFontBase,
  mixinTypoFontFamilyBaseJa
} from '@alicloud/console-base-theme';

// lang-ja 是 console-base 注入到 body 的 className，虽然有些耦合，但比较实用
export const FontBase = styled.div`
  ${mixinTypoFontBase}
  
  body.lang-ja & {
    ${mixinTypoFontFamilyBaseJa}
  }
`;

export const FontBase12 = styled(FontBase)`
  font-size: 12px;
`;

export const FontBase14 = styled(FontBase)`
  font-size: 14px;
`;
