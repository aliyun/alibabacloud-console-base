import React from 'react';

import {
  H1,
  H2,
  H3,
  H4,
  P,
  Hr
} from '../../src';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>原生元素，仅加样式</H1>
    <H2>标题</H2>
    <H3>其他标题</H3>
    <H4>4 级标题</H4>
    <H3>P / Pre / Hr / Button / InputText / InputTextArea</H3>
    <P>一个 P，这里的 <strong>strong</strong>、<code>code</code>、<kbd>kbd</kbd>、<em>em</em> 会有些样式</P>
    <Hr />
  </>;
}
