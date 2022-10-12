import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';
import {
  useControllableValueSoftTrim
} from '@alicloud/react-hook-controllable-value';

import {
  ModelProps
} from '../model';
import Input from '../rc-container';

const ScIcon = styled(Icon)`
  font-size: 14px;
`;

export default function SearchInput({
  value,
  defaultValue,
  onChange,
  ...props
}: ModelProps): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllableValueSoftTrim(true, value, defaultValue, onChange);
  
  return <Input {...{
    hasClear: true,
    ...props,
    value: controllableValue,
    onChange: controllableOnChange,
    innerLeft: <ScIcon type="search" />
  }} />;
}
