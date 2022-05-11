import React from 'react';

import {
  H1,
  InputText,
  InputNumber,
  InputTextarea,
  InputSwitch,
  CheckboxGroup,
  RadioGroup,
  Button
} from '../../src';

export default function DemoFormControl(): JSX.Element {
  return <>
    <H1>表单元素</H1>
    <InputNumber placeholder="InputNumber" />
    <InputText placeholder="InputText" />
    <InputText placeholder="InputText - disabled" disabled />
    <InputText placeholder="InputText - block" block />
    <Button>一个 Button</Button>
    <Button disabled>一个 disabled Button</Button>
    <InputTextarea placeholder="InputTextarea" />
    <InputSwitch label="label as a prop" />
    <InputSwitch label="disabled" disabled />
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
