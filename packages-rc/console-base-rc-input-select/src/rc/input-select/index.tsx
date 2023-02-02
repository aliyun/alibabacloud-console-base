import React from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import {
  useControllable,
  useControllableUnprotected
} from '@alicloud/react-hook-controllable';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Dropdown from '@alicloud/console-base-rc-dropdown';

import {
  IInputSelectProps
} from '../../types';
import intl from '../../intl';

import Options from './options';

const ScPlaceholder = styled.span`
  ${mixinTextTertiary}
`;

export default function InputSelect<T = string>({
  disabled,
  dataSource = [],
  placeholder = intl('phrase:placeholder'),
  value,
  defaultValue,
  dropdownVisible,
  defaultDropdownVisible,
  onChange,
  onDropdownVisibleChange,
  ...props
}: IInputSelectProps<T>): JSX.Element {
  const [controllableValue, setControllableValue] = useControllableUnprotected<T>(value, defaultValue, onChange);
  const [controllableDropdownVisible, setControllableDropdownVisible] = useControllable(false, dropdownVisible, defaultDropdownVisible, onDropdownVisibleChange);
  const label = dataSource.find(v => v.value === controllableValue)?.label ?? controllableValue;
  
  return <Dropdown {...{
    disabled,
    ...props,
    block: true,
    width: '100%',
    trigger: <Button {...{
      disabled,
      block: true,
      theme: ButtonTheme.SECONDARY_ALT,
      iconRight: 'angle-down',
      iconRightRotate: controllableDropdownVisible ? 180 : 0,
      textAlign: 'left',
      label: label ? <>{label}</> : <ScPlaceholder>{placeholder}</ScPlaceholder> // 加 fragment 是为了在 label 为空的时候不让右边的箭头 Icon 移过来
    }} />,
    body: <Options {...{
      dataSource,
      value: controllableValue,
      onChange: setControllableValue
    }} />,
    visible: controllableDropdownVisible,
    onVisibleChange: setControllableDropdownVisible
  }} />;
}
