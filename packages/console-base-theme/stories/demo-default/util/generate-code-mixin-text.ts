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

// 生成 mixin/text.ts 的代码
export default function generateCodeMixinText(): string {
  const generator: ICodeGenerator = {
    begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';
`
  };
  
  _forEach(COLOR, (_v: string, variableKey: string): void => {
    if (/^TEXT_/.test(variableKey)) {
      pushCode(generator, `export const ${buildExportedMixinVarName(variableKey)} = css\`
${buildStylesWithFallback('  color', 'COLOR', variableKey)}
\`;`);
    }
  });
  
  return buildCode(generator);
}
