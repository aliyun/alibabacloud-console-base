import React from 'react';

import {
  H1,
  H2,
  H3,
  H4,
  Hr
} from '../../src';
import Shared from '../_shared';

export default function DemoDefault(): JSX.Element {
  return <>
    <Shared />
    <H1>原生元素，仅加样式</H1>
    <H2>标题</H2>
    <H3>其他标题</H3>
    <H4>4 级标题</H4>
    <Hr />
    <H3>P / Pre / Hr / Button / InputText / InputTextArea</H3>
  </>;
}
