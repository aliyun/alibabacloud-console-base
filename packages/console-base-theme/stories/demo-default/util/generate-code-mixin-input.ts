import _forEach from 'lodash/forEach';
import {
  COLOR
} from '../../../src';
import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

function getAttr(varName: string): string {
  if (/^INPUT_TEXT/.test(varName)) {
    return 'color';
  }
  
  if (/^INPUT_BG/.test(varName)) {
    return 'background-color';
  }
  
  if (/^INPUT_BORDER/.test(varName)) {
    return 'border-color';
  }
  
  return '';
}

// 生成 mixin/input.ts
export default function generateCodeMixinInput(): string {
  const generator: ICodeGenerator = {
    begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';

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
\`;`
  };
  
  _forEach(COLOR, (_v, k) => {
    const attr = getAttr(k);
    
    if (!attr) {
      return;
    }
    
    const cssCode = buildCssCode({
      attr,
      keys: ['COLOR', k]
    });
    
    pushCode(generator, `export const ${buildExportedMixinVarName(k)} = css\`
${cssCode}
\`;`);
  });
  
  return toCode(generator);
}
