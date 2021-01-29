import React, {
  HTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  FORM_INPUT_HEIGHT,
  CSS_INPUT_COMMON
} from '../const';

interface IPropsInputText extends Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  onChange?(value: string, e: ChangeEvent<HTMLInputElement>): void;
}

const ScInputText = styled.input`
  padding: 0 8px;
  line-height: ${FORM_INPUT_HEIGHT}px;
  ${CSS_INPUT_COMMON}
`;

function InputText({
  onChange,
  ...props
}: IPropsInputText, ref: Ref<HTMLInputElement>): JSX.Element {
  const handleChangeEvent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);
  
  return <ScInputText {...{
    ...props,
    type: 'text',
    ref,
    handleChangeEvent
  }} />;
}

export default forwardRef(InputText);
