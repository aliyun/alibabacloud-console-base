import buildCssCode from '../util/build-css-code';

const CODE_FRAGMENT_IMPORT_CSS = `import {
  css
} from 'styled-components';
`;
const CODE_FRAGMENT_IMPORT_CSS_AND_COLOR = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  COLOR
} from '../theme-default';
`;

export const CODE_BEGIN_GLOBAL_STYLE = `import {
  createGlobalStyle
} from 'styled-components';

import {
  COLOR,
  TYPO,
  SHADOW
} from './_var';

export default createGlobalStyle\`
  :root {`;
export const CODE_END_GLOBAL_STYLE = `  }
\`;`;
export const CODE_INDENT_GLOBAL_STYLE = 2;
export const CODE_BEGIN_TS_TEXT = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_TS_BG = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_TS_BORDER = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_SHADOW = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  SHADOW
} from '../theme-default';
`;
export const CODE_BEGIN_TS_LINK = `${CODE_FRAGMENT_IMPORT_CSS_AND_COLOR}
const linkCommon = css\`
  transition: all ease-in-out 0.3s;
  
  &:link {
    text-decoration: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
\`;
`;

export const CODE_BEGIN_INPUT = `${CODE_FRAGMENT_IMPORT_CSS_AND_COLOR}
export const mixinInputReset = css\`
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
  transition: all ease-in-out 0.3s;
  
  &::placeholder {
${buildCssCode({
    attr: 'color',
    keys: ['COLOR', 'INPUT_PLACEHOLDER'],
    indent: 2
  })}
  }
\`;`;

export const CODE_BEGIN_TS_BUTTON = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  COLOR,
  SIZE
} from '../theme-default';

import {
  mixinShadowLDown
} from './shadow';

/**
 * 对按钮样式进行重置：
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 定义 disabled 的基础样式
 */
export const mixinButtonReset = css\`
  padding: 0;
  border: 1px solid transparent;
  border-radius: 2px;
  box-sizing: border-box;
  outline: none;
  background: none;
  line-height: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all ease-out 0.2s;
  
  &:hover {
    text-decoration: none;
  }
  
  &[disabled] {
    cursor: not-allowed;
  }
\`;

export const mixinButtonShadow = css\`
  &:hover,
  &:focus {
    \${mixinShadowLDown}
  }
  
  &:active,
  &:disabled {
    box-shadow: none;
  }
\`;`;
