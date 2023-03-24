import {
  forEach as _forEach
} from 'lodash-es';

import {
  COLOR
} from '../../src';
import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_INPUT
} from '../const';

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
    generator: 'generate-code-mixin-input',
    begin: CODE_BEGIN_INPUT
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
