import _forEach from 'lodash/forEach';

import {
  COLOR
} from '../../../src';
import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_TS_BORDER
} from '../const';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

const BUTTON_ALTS = ['', '-top', '-right', '-bottom', '-left'];

// 生成 mixin/border.ts 的代码
export default function generateCodeMixinBorder(): string {
  const generator: ICodeGenerator = {
    begin: CODE_BEGIN_TS_BORDER
  };
  
  _forEach(COLOR, (_v: string, variableKey: string): void => {
    if (/^BORDER_/.test(variableKey)) {
      const cssCode = buildCssCode({
        attr: 'border-color',
        keys: ['COLOR', variableKey]
      });
      
      pushCode(generator, `export const ${buildExportedMixinVarName(variableKey, 'Color')} = css\`
${cssCode}
\`;`);
      BUTTON_ALTS.forEach(borderAlt => {
        const cssCode2 = buildCssCode({
          attr: `border${borderAlt}`,
          keys: ['COLOR', variableKey],
          before: '1px solid '
        });
        
        pushCode(generator, `export const ${buildExportedMixinVarName(variableKey, borderAlt)} = css\`
${cssCode2}
\`;`);
      });
    }
  });
  
  return toCode(generator);
}
