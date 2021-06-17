import React, {
  TextareaHTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  CSS_FORM_CONTROL_INPUT_TEXTAREA
} from '../const';

const ScInputTextarea = styled.textarea`
  ${CSS_FORM_CONTROL_INPUT_TEXTAREA}
`;

interface IPropsInputTextarea extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChange?(value: string, e: ChangeEvent<HTMLTextAreaElement>): void;
}

function InputTextarea({
  onChange,
  ...props
}: IPropsInputTextarea, ref: Ref<HTMLTextAreaElement>): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);
  
  return <ScInputTextarea {...{
    ...props,
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputTextarea);
