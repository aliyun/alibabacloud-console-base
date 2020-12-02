import React, {
  useCallback
} from 'react';

import {
  P
} from '@alicloud/demo-rc-elements';
import Input from '@alicloud/console-base-rc-input';

import {
  useDialog
} from '../../../../src';

export default function Demo(): JSX.Element {
  const {
    data,
    updateData
  } = useDialog();
  const handleInput1Change = useCallback(value => {
    updateData({
      input1: value
    });
  }, [updateData]);
  const handleInput2Change = useCallback(value => {
    updateData({
      input2: value
    });
  }, [updateData]);
  
  return <>
    <Input {...{
      placeholder: 'input #1',
      onChange: handleInput1Change
    }} />
    <Input {...{
      placeholder: 'input #2',
      onChange: handleInput2Change
    }} />
    <P>input #1: <code>{data.input1}</code></P>
    <P>input #2: <code>{data.input2}</code></P>
  </>;
}
