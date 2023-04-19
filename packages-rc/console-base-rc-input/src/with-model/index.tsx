import React from 'react';

import {
  useControllableSoftTrim
} from '@alicloud/react-hook-controllable';

import Model, {
  ModelProps
} from '../model';
import Ui from '../ui';

export default function WithProvider({
  trim = true,
  value,
  defaultValue,
  onChange,
  ...props
}: ModelProps): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllableSoftTrim(trim, value, defaultValue, onChange);
  
  return <Model {...{
    ...props,
    value: controllableValue,
    onChange: controllableOnChange
  }}>
    <Ui />
  </Model>;
}
