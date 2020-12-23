import React from 'react';

import {
  H1,
  H2,
  Pre
} from '@alicloud/demo-rc-elements';

import {
  COLOR,
  TYPO
} from '../../src';

const [theCode, theCode2] = (() => {
  const code: string[] = [':root {'];
  const code2: string[] = [':root {'];
  
  function pushToCode(what: string, o: Record<string, unknown>): void {
    Object.keys(o).forEach(v => {
      const varName = `--cb-${what}-${v}`.replace(/_/g, '-').toLowerCase();
      
      code.push(`  ${varName}: \${${what}.${v}};`);
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
    TYPO
  });
  
  code.push('}');
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
