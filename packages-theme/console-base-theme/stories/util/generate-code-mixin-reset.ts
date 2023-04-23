import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_RESET
} from '../const';

import pushCode from './push-code';
import toCode from './to-code';
import buildCssCode from './build-css-code';

const codeInputReset = `export const mixinInputReset = css\`
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  transition: all ease-in-out 0.3s;

  &::placeholder {
    font-size: 12px;
    font-weight: 200;
${buildCssCode({
    attr: 'color',
    keys: ['COLOR', 'INPUT_PLACEHOLDER'],
    indent: 2
  })}
  }

  &::-ms-clear {
    display: none;
  }
\`;`;
const codeButtonReset = `
/**
 * 对按钮样式进行重置：
 * 
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 避免 link hover 的样式干扰
 * 4. 定义 disabled 的基础样式
 */
export const mixinButtonReset = css\`
  padding: 0;
  border: 1px solid transparent;
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
  transition: all ease-out 0.3s;
  
  &:hover,
  &:link:hover {
    text-decoration: none;
  }
  
  &:focus-visible {
    outline: 2px dashed \${COLOR.BORDER_ACCENT_HOVER};
  }
  
  &[disabled] {
    cursor: not-allowed;
  }
\`;`;

// 生成 mixin/reset.ts
export default function generateCodeMixinInput(): string {
  const generator: ICodeGenerator = {
    generator: 'generate-code-mixin-reset',
    begin: CODE_BEGIN_RESET
  };
  
  pushCode(generator, codeInputReset);
  pushCode(generator, codeButtonReset);
  
  return toCode(generator);
}
