import {
  ICodeGenerator
} from '../types';

import pushCode from './push-code';
import toCode from './to-code';
import buildExportedMixinVarName from './build-exported-mixin-var-name';
import buildCssCode from './build-css-code';

const LINK_STATUSES = ['visited', 'hover', 'active'];

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
  transition: all ease-in-out 0.3s;
  
  &:link {
    text-decoration: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
\`;

export const mixinLinkDisabled = css\`
  &,
  &:link,
  &:visited,
  &:hover,
  &:focus,
  &:active {
    cursor: default;
    text-decoration: none;
${buildCssCode({ attr: 'color', keys: ['COLOR', 'LINK_DISABLED'], indent: 2 })}
  }
\`;
`
  };

  ['LINK_PRIMARY', 'LINK_SECONDARY', 'LINK_TERTIARY', 'LINK_BRAND', 'LINK_BRAND_SECONDARY'].forEach(v => {
    function buildLinkStatus(status: string): string {
      const cssCode = buildCssCode({
        attr: 'color',
        keys: ['COLOR', v, status],
        indent: 2
      });
      
      return `
  ${status === 'hover' ? '&:hover,\n  &:focus' : `&:${status}`} {
${cssCode}
  }`;
    }
    
    const cssCode2 = buildCssCode({
      attr: 'color',
      keys: ['COLOR', v]
    });
    
    pushCode(generator, `export const ${buildExportedMixinVarName(v)} = css\`
${cssCode2}
  \${linkCommon};
${LINK_STATUSES.map(buildLinkStatus).join('\n  ')}
\`;`);
  });
  
  return toCode(generator);
}
