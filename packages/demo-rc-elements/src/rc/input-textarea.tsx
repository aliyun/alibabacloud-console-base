import React, {
  TextareaHTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  InputBase
} from './_form-control-base';

interface IPropsInputTextarea extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChange?(value: string, e: ChangeEvent<HTMLTextAreaElement>): void;
}

const ScInputTextarea = styled(InputBase)`
  display: block;
  padding: 4px 8px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  resize: vertical;
`;

function InputTextarea({
  onChange,
  ...props
}: IPropsInputTextarea, ref: Ref<HTMLTextAreaElement>): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);
  
  return <ScInputTextarea as="textarea" {...{
    ...props,
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputTextarea);
