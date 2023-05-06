import React from 'react';

import {
  H1,
  H2,
  InputText,
  InputTextarea,
  InputNumber,
  InputRange,
  InputColor,
  InputSwitch,
  CheckboxGroup,
  RadioGroup,
  Button
} from '../../src';
import Shared from '../_shared';

export default function DemoFormControl(): JSX.Element {
  return <>
    <Shared />
    <H1>表单元素</H1>
    <H2>InputText</H2>
    <InputText placeholder="InputText" />
    <InputText placeholder="InputText - disabled" disabled />
    <InputText placeholder="InputText - block" block />
    <H2>InputTextarea</H2>
    <InputTextarea placeholder="InputTextarea" />
    <H2>InputNumber</H2>
    <InputNumber placeholder="InputNumber" />
    <H2>InputRange</H2>
    <InputRange />
    <H2>InputColor</H2>
    <InputColor />
    <H2>Button</H2>
    <Button>真 Button</Button>
    <Button href="#hello">链接 Button（相对 URL）</Button>
    <Button href="//www.aliyun.com">链接 Button（绝对 URL）</Button>
    <Button disabled>一个 disabled Button</Button>
    <H2>InputSwitch</H2>
    <InputSwitch label="label as a prop" />
    <InputSwitch label="disabled" disabled />
    <H2>CheckboxGroup</H2>
    <CheckboxGroup<number> {...{
      label: 'number',
      items: [{
        value: 1,
        label: 'check 1'
      }, {
        value: 2,
        label: 'check 2'
      }]
    }} />
    <RadioGroup<string> {...{
      label: 'string',
      items: [{
        value: 's1',
        label: 'check 1'
      }, {
        value: 's2',
        label: 'check 2'
      }]
    }} />
  </>;
}
