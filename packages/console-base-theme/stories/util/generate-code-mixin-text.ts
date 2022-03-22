import _forEach from 'lodash/forEach';

import {
  COLOR
} from '../../src';
import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_TEXT
} from '../const';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

// 生成 mixin/text.ts 的代码
export default function generateCodeMixinText(): string {
  const generator: ICodeGenerator = {
    generator: 'generate-code-mixin-text',
    begin: CODE_BEGIN_TEXT
  };
  
  _forEach(COLOR, (_v: string, variableKey: string): void => {
    if (/^TEXT_/.test(variableKey)) {
      const cssCode = buildCssCode({
        attr: 'color',
        keys: ['COLOR', variableKey]
      });
      
      pushCode(generator, `export const ${buildExportedMixinVarName(variableKey)} = css\`
${cssCode}
\`;`);
    }
  });
  
  return toCode(generator);
}
