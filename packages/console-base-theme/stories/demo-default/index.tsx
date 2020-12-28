import _forEach from 'lodash/forEach';
import React from 'react';

import {
  H1,
  H2,
  Pre
} from '@alicloud/demo-rc-elements';

import {
  COLOR,
  TYPO,
  SHADOW
} from '../../src';

import {
  ICodeGenerator
} from './types';
import pushCode from './util/push-code';
import buildCode from './util/build-code';
import buildCssVarName from './util/build-css-var-name';
import buildExportedMixinVarName from './util/build-exported-mixin-var-name';
import buildConstName from './util/build-const-name';
import buildStylesWithFallback from './util/build-styles-with-fallback';

const generatorGlobalStyle: ICodeGenerator = {
  begin: `import {
  createGlobalStyle
} from 'styled-components';

import {
  COLOR,
  TYPO,
  SHADOW
} from './_var';

export default createGlobalStyle\`
  :root {`,
  end: `  }
\`;`,
  indent: '    '
};
const generatorCssVar: ICodeGenerator = {
  begin: `// 由 demo-default 生成拷贝而来，做参考，且放在仓库里 IDE 可以有提示
:root {`,
  end: '}',
  indent: '  '
};
const generatorMixinText: ICodeGenerator = {
  begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';
`
};
const generatorMixinBorder: ICodeGenerator = {
  begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';
`
};
const generatorMixinBg: ICodeGenerator = {
  begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';
`
};
const generatorMixinShadow: ICodeGenerator = {
  begin: `import {
  css
} from 'styled-components';

import {
  SHADOW
} from '../theme-default';
`
};
const generatorMixinLink: ICodeGenerator = {
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
const generatorMixinInput: ICodeGenerator = {
  begin: `import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';
`
};

_forEach({
  COLOR,
  TYPO,
  SHADOW
}, (variables: Record<string, string>, upperWhatKey: string) => {
  _forEach(variables, (realValue: string, variableKey: string): void => {
    const cssVarName = buildCssVarName(upperWhatKey, variableKey);
    const interpolationValue = `\${${upperWhatKey}.${variableKey}}`;
    
    if (/line-|fill-/i.test(cssVarName)) { // 忽略
      return;
    }
    
    // 生成 global/style.ts 的代码
    pushCode(generatorGlobalStyle, `${cssVarName}: ${interpolationValue};`);
    
    // 生成 doc/console-base.less 的代码（供 IDE 快速参考）
    pushCode(generatorCssVar, `${cssVarName}: ${realValue};`);
    
    // 生成 mixin/text.ts 的代码
    if (/color-text/.test(cssVarName)) {
      pushCode(generatorMixinText, `export const ${buildExportedMixinVarName(variableKey)} = css\`
  color: ${interpolationValue};
  color: var(${cssVarName}, ${interpolationValue});
\`;`);
    }
    
    // 生成 mixin/border.ts 的代码
    if (/color-border/.test(cssVarName)) {
      pushCode(generatorMixinBorder, `export const ${buildExportedMixinVarName(variableKey, 'Color')} = css\`
  border-color: ${interpolationValue};
  border-color: var(${cssVarName}, ${interpolationValue});
\`;`);
      ['', '-top', '-right', '-bottom', '-left'].forEach(borderAlt => {
        pushCode(generatorMixinBorder, `export const ${buildExportedMixinVarName(variableKey, borderAlt)} = css\`
  border${borderAlt}: 1px solid ${interpolationValue};
  border${borderAlt}: 1px solid var(${cssVarName}, ${interpolationValue});
\`;`);
      });
    }
    
    // 生成 mixin/bg.ts 的代码
    if (/color-bg/.test(cssVarName)) {
      pushCode(generatorMixinBg, `export const ${buildExportedMixinVarName(variableKey)} = css\`
  background-color: ${interpolationValue};
  background-color: var(${cssVarName}, ${interpolationValue});
\`;`);
    }
    
    // 生成 mixin/shadow.ts 的代码
    if (/shadow/.test(cssVarName)) {
      pushCode(generatorMixinShadow, `export const ${buildExportedMixinVarName('shadow', variableKey)} = css\`
  box-shadow: ${interpolationValue};
  box-shadow: var(${cssVarName}, ${interpolationValue});
\`;`);
    }
  });
});

// 生成 mixin/link.ts
['LINK_PRIMARY', 'LINK_SECONDARY', 'LINK_TERTIARY', 'LINK_BRAND', 'LINK_BRAND_SECONDARY'].forEach(v => {
  function buildLinkState(state: string): string {
    const varName = buildConstName(v, state);
    const cssVarName = buildCssVarName('COLOR', varName);
    
    return `
  &:${state} {
    color: \${COLOR.${varName}};
    color: var(${cssVarName}, \${COLOR.${varName}});
  }`;
  }
  
  pushCode(generatorMixinLink, `export const ${buildExportedMixinVarName(v)} = css\`
  color: \${COLOR.${v}};
  color: var(${buildCssVarName('COLOR', v)}, \${COLOR.${v}});
  \${linkCommon};
  ${['visited', 'hover', 'active', 'disabled'].map(buildLinkState).join('\n  ')}
\`;`);
});

// 生成 mixin/input.ts
['', 'hover', 'focus', 'disabled'].forEach(v => {
  const varName = buildExportedMixinVarName('input', v);
  const constInputBorder = buildConstName('INPUT_BORDER', v);
  const constInputBg = buildConstName('INPUT_BG', v);
  const constInputText = buildConstName('INPUT_TEXT', v);
  const theStyleCode = [
    ...buildStylesWithFallback('  border', 'COLOR', constInputBorder, '1px solid '),
    ...buildStylesWithFallback('  background-color', 'COLOR', constInputBg),
    ...buildStylesWithFallback('  color', 'COLOR', constInputText)
  ].join('\n');
  
  pushCode(generatorMixinInput, `export const ${varName} = css\`
${theStyleCode}
\`;`);
});

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>生成 COLOR</H1>
    <H2>src/theme-default/global-style.ts</H2>
    <Pre>{buildCode(generatorGlobalStyle)}</Pre>
    <H2>doc/css/console-base.less</H2>
    <Pre>{buildCode(generatorCssVar)}</Pre>
    <H2>src/mixin/text.ts</H2>
    <Pre>{buildCode(generatorMixinText)}</Pre>
    <H2>src/mixin/border.ts</H2>
    <Pre>{buildCode(generatorMixinBorder)}</Pre>
    <H2>src/mixin/bg.ts</H2>
    <Pre>{buildCode(generatorMixinBg)}</Pre>
    <H2>src/mixin/shadow.ts</H2>
    <Pre>{buildCode(generatorMixinShadow)}</Pre>
    <H2>src/mixin/link.ts</H2>
    <Pre>{buildCode(generatorMixinLink)}</Pre>
    <H2>src/mixin/input.ts</H2>
    <Pre>{buildCode(generatorMixinInput)}</Pre>
  </>;
}
