import _forEach from 'lodash/forEach';

import {
  COLOR
} from '../../src';
import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_BG
} from '../const';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

// 生成 mixin/bg.ts 的代码
export default function generateCodeMixinBg(): string {
  const generator: ICodeGenerator = {
    generator: 'generate-code-mixin-bg',
    begin: CODE_BEGIN_BG
  };
  
  _forEach(COLOR, (_v: string, variableKey: string): void => {
    if (/^BG_/.test(variableKey)) {
      const cssCode = buildCssCode({
        attr: 'background-color',
        keys: ['COLOR', variableKey]
      });
      
      pushCode(generator, `export const ${buildExportedMixinVarName(variableKey)} = css\`
${cssCode}
\`;`);
    }
  });
  
  return toCode(generator);
}
