import React, {
  HTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  CSS_INPUT_COMMON
} from '../const';

interface IPropsInputTextarea extends Omit<HTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChange?(value: string, e: ChangeEvent<HTMLTextAreaElement>): void;
}

const ScInputTextarea = styled.textarea`
  ${CSS_INPUT_COMMON}
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
  const handleChangeEvent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);
  
  return <ScInputTextarea {...{
    ...props,
    ref,
    handleChangeEvent
  }} />;
}

export default forwardRef(InputTextarea);
