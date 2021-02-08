import {
  ICodeGenerator
} from '../types';
import {
  CODE_BEGIN_LINK
} from '../const';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

const THEMES = ['LINK_PRIMARY', 'LINK_SECONDARY', 'LINK_TERTIARY', 'LINK_BRAND', 'LINK_BRAND_SECONDARY'];
const STATES = ['visited', 'hover', 'active'];

function buildLinkStyle(theme: string, state: string, indent?: number): string {
  return buildCssCode({
    attr: 'color',
    keys: ['COLOR', theme, state],
    indent: indent ?? state ? 2 : 1
  });
}

// 生成 mixin/link.ts
export default function generateCodeMixinLink(): string {
  const generator: ICodeGenerator = {
    begin: CODE_BEGIN_LINK
  };
  
  pushCode(generator, `export const mixinLinkDisabled = css\`
  &,
  &:link,
  &:visited,
  &:hover,
  &:focus,
  &:active {
    cursor: default;
    text-decoration: none;
${buildLinkStyle('LINK_DISABLED', '', 2)}
  }
\`;`);
  
  THEMES.forEach(v => {
    function buildState(state: string): string {
      return `
  ${state === 'hover' ? '&:hover,\n  &:focus' : `&:${state}`} {
${buildLinkStyle(v, state)}
  }`;
    }
    
    const cssCode2 = buildCssCode({
      attr: 'color',
      keys: ['COLOR', v]
    });
    
    pushCode(generator, `export const ${buildExportedMixinVarName(v)} = css\`
${cssCode2}
  \${linkCommon};
  ${STATES.map(buildState).join('\n  ')}
\`;`);
  });
  
  return toCode(generator);
}
