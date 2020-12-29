import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import buildCode from './build-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildConstName from './build-const-name';
import buildStylesWithFallback from './build-styles-with-fallback';

// 生成 mixin/input.ts
export default function generateCodeMixinInput(): string {
  const generator: ICodeGenerator = {
    begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';
`
  };
  
  ['', 'hover', 'focus', 'disabled'].forEach(v => {
    const varName = buildExportedMixinVarName('input', v);
    const constInputBorder = buildConstName('INPUT_BORDER', v);
    const constInputBg = buildConstName('INPUT_BG', v);
    const constInputText = buildConstName('INPUT_TEXT', v);
    const theStyleCode = [
      buildStylesWithFallback('  border', 'COLOR', constInputBorder, '1px solid '),
      buildStylesWithFallback('  background-color', 'COLOR', constInputBg),
      buildStylesWithFallback('  color', 'COLOR', constInputText)
    ].join('\n');
    
    pushCode(generator, `export const ${varName} = css\`
  ${theStyleCode}
  \`;`);
  });
  
  return buildCode(generator);
}
