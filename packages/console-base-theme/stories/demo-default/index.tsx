import React from 'react';

import {
  H1,
  Pre
} from '@alicloud/demo-rc-elements';

import {
  COLOR
} from '../../src';

const [theCode, theCode2] = (() => {
  const code: string[] = [':root {'];
  const code2: string[] = [':root {'];
  
  Object.keys(COLOR).forEach(v => {
    const varName = `--cb-color-${v.replace(/_/g, '-').toLowerCase()}`;
    
    code.push(`  ${varName}: \${COLOR.${v}};`);
    code2.push(`  ${varName}: ${COLOR[v as keyof typeof COLOR]};`);
  });
  
  code.push('}');
  code2.push('}');
  
  return [code.join('\n'), code2.join('\n')];
})();

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>生成 COLOR</H1>
    <Pre>{theCode}</Pre>
    <Pre>{theCode2}</Pre>
  </>;
}
