import React, {
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  IPropsInputText
} from '../../types';
import {
  CSS_FORM_CONTROL_INPUT_BASE
} from '../../const';

interface IScInput {
  block: 0 | 1;
}

const ScInputText = styled.input<IScInput>`
  min-width: 240px;
  max-width: 100%;
  ${CSS_FORM_CONTROL_INPUT_BASE}
  ${props => (props.block ? css`
    margin: 1px 0 1px 0;
    display: block;
    width: 100%;
  ` : null)}
`;

function InputText({
  block,
  onChange,
  ...props
}: IPropsInputText, ref: Ref<HTMLInputElement>): JSX.Element {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e);
  }, [onChange]);
  
  return <ScInputText {...{
    ...props,
    block: block ? 1 : 0,
    type: 'text',
    ref,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputText);
