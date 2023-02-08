import React, {
  ChangeEvent,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinInputReset,
  mixinInputText,
  mixinInputBg,
  mixinInputBorder,
  mixinInputTextHover,
  mixinInputBgHover,
  mixinInputBorderHover,
  mixinInputTextFocus,
  mixinInputBgFocus,
  mixinInputBorderFocus
} from '@alicloud/console-base-theme';
import {
  useControllableSoftTrim
} from '@alicloud/react-hook-controllable';

import {
  IInputTextareaProps
} from '../../types';

const ScTextareaBase = styled.textarea`
  ${mixinInputReset}
  ${mixinInputText}
  ${mixinInputBg}
  ${mixinInputBorder}
  
  &:hover {
    ${mixinInputTextHover}
    ${mixinInputBgHover}
    ${mixinInputBorderHover}
  }
  
  &:focus {
    ${mixinInputTextFocus}
    ${mixinInputBgFocus}
    ${mixinInputBorderFocus}
  }
`;

const ScTextarea = styled(ScTextareaBase)`
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 6em;
  resize: none;
`;

export default function InputTextarea({
  softTrim,
  value,
  defaultValue,
  onChange,
  ...props
}: IInputTextareaProps): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllableSoftTrim(softTrim, value, defaultValue, onChange);
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    controllableOnChange(e.target.value);
  }, [controllableOnChange]);
  
  return <ScTextarea {...{
    ...props,
    value: controllableValue,
    onChange: handleChange
  }} />;
}
