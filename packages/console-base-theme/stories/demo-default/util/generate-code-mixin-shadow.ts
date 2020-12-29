import _forEach from 'lodash/forEach';

import {
  SHADOW
} from '../../../src';
import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

// 生成 mixin/shadow.ts 的代码
export default function generateCodeMixinShadow(): string {
  const generator: ICodeGenerator = {
    begin: `import {
  css
} from 'styled-components';

import {
  SHADOW
} from '../theme-default';
`
  };
  
  _forEach(SHADOW, (_v: string, variableKey: string): void => {
    const cssCode = buildCssCode({
      attr: 'box-shadow',
      keys: ['SHADOW', variableKey]
    });
    
    pushCode(generator, `export const ${buildExportedMixinVarName('SHADOW', variableKey)} = css\`
${cssCode}
\`;`);
  });
  
  return toCode(generator);
}
