import {
  createGlobalStyle
} from 'styled-components';

import {
  mixinTypoFontFamilyBaseJa
} from '../mixin';

// 为所有的控制台添加日文默认字体，仅日文下会生效，这里对 body 上的 class 有耦合，该 class 由 ConsoleBase 注入
export default createGlobalStyle`
  body.lang-ja {
    ${mixinTypoFontFamilyBaseJa}
  }
`;