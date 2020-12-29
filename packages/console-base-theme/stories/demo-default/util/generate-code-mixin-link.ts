import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import buildCode from './build-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildConstName from './build-const-name';
import buildStylesWithFallback from './build-styles-with-fallback';

// 生成 mixin/link.ts
export default function generateCodeMixinLink(): string {
  const generator: ICodeGenerator = {
    begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';

const linkCommon = css\`
  transition: all linear 0.25s;
  
  &:link {
    text-decoration: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
\`;
`
  };

  ['LINK_PRIMARY', 'LINK_SECONDARY', 'LINK_TERTIARY', 'LINK_BRAND', 'LINK_BRAND_SECONDARY'].forEach(v => {
    function buildLinkState(state: string): string {
      const varName = buildConstName(v, state);
      
      return `
    &:${state} {
  ${buildStylesWithFallback('    color', 'COLOR', varName)}
    }`;
    }
    
    pushCode(generator, `export const ${buildExportedMixinVarName(v)} = css\`
  ${buildStylesWithFallback('  color', 'COLOR', v)}
    \${linkCommon};
    ${['visited', 'hover', 'active', 'disabled'].map(buildLinkState).join('\n  ')}
  \`;`);
  });
  
  return buildCode(generator);
}
