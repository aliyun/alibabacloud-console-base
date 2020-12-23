import React from 'react';

import {
  H1,
  H2,
  Pre
} from '@alicloud/demo-rc-elements';

import {
  COLOR,
  TYPO,
  BORDER,
  SHADOW
} from '../../src';

const [theCode, theCode2] = (() => {
  const code: string[] = [`import {
  createGlobalStyle
} from 'styled-components';

export default createGlobalStyle\`
  :root {`];
  const code2: string[] = [`// 由 demo-default 生成拷贝而来，做参考，且放在仓库里 IDE 可以有提示
:root {`];
  
  function pushToCode(what: string, o: Record<string, unknown>): void {
    Object.keys(o).forEach(v => {
      const varName = `--cb-${what}-${v}`.replace(/_/g, '-').toLowerCase();
      
      code.push(`    ${varName}: \${${what}.${v}};`);
      code2.push(`  ${varName}: ${o[v]};`);
    });
  }
  
  function generateCode(o: Record<string, Record<string, unknown>>): void {
    Object.keys(o).forEach(v => {
      pushToCode(v, o[v]);
    });
  }
  
  generateCode({
    COLOR,
    TYPO,
    BORDER,
    SHADOW
  });
  
  code.push(`  }
\`;`);
  code2.push('}');
  
  return [code.join('\n'), code2.join('\n')];
})();

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>生成 COLOR</H1>
    <H2>代码生成 - 用于 createGlobalStyle，可黏贴到代码</H2>
    <Pre>{theCode}</Pre>
    <H2>转成值 - 黏贴到 doc/css/console-base.less</H2>
    <Pre>{theCode2}</Pre>
  </>;
}
