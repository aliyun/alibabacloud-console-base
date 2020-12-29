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

// 生成 mixin/border.ts 的代码
export default function generateCodeMixinBorder(): string {
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
    if (/^BORDER_/.test(variableKey)) {
      pushCode(generator, `export const ${buildExportedMixinVarName(variableKey, 'Color')} = css\`
${buildStylesWithFallback('  border-color', 'COLOR', variableKey)}
\`;`);
      ['', '-top', '-right', '-bottom', '-left'].forEach(borderAlt => {
        pushCode(generator, `export const ${buildExportedMixinVarName(variableKey, borderAlt)} = css\`
${buildStylesWithFallback(`  border${borderAlt}`, 'COLOR', variableKey, '1px solid ')}
\`;`);
      });
    }
  });
  
  return buildCode(generator);
}
