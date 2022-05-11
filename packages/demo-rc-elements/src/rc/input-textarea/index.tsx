import React, {
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  IPropsInputTextarea
} from '../../types';
import {
  CSS_FORM_CONTROL_INPUT_TEXTAREA
} from '../../const';

const ScInputTextarea = styled.textarea`
  ${CSS_FORM_CONTROL_INPUT_TEXTAREA}
`;

function InputTextarea({
  onChange,
  ...props
}: IPropsInputTextarea, ref: Ref<HTMLTextAreaElement>): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value, e);
  }, [onChange]);
  
  return <ScInputTextarea {...{
    ...props,
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputTextarea);
