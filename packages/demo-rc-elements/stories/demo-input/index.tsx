import React from 'react';

import {
  H1,
  InputText,
  InputNumber,
  InputTextarea,
  InputSwitch,
  CheckboxGroup,
  RadioGroup
} from '../../src';

export default function DemoInput(): JSX.Element {
  return <>
    <H1>输入元素</H1>
    <InputNumber placeholder="InputNumber" />
    <InputText placeholder="InputText" />
    <InputText placeholder="InputText - block" block />
    <InputTextarea placeholder="InputTextarea" />
    <InputSwitch />
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
