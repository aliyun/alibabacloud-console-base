import _forEach from 'lodash/forEach';

import {
  COLOR
} from '../../../src';
import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import buildCode from './build-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildStylesWithFallback from './build-styles-with-fallback';

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
  
  _forEach(COLOR, (_v: string, variableKey: string): void => {
    // 生成 mixin/shadow.ts 的代码
    if (/^SHADOW_/.test(variableKey)) {
      pushCode(generator, `export const ${buildExportedMixinVarName('shadow', variableKey)} = css\`
${buildStylesWithFallback('  box-shadow', 'COLOR', variableKey)};
\`;`);
    }
  });
  
  return buildCode(generator);
}
