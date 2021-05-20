import React, {
  InputHTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  InputBase
} from './_form-control-base';

interface IScInput {
  block: 0 | 1;
}

interface IPropsInputText extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  block?: boolean;
  onChange?(value: string, e: ChangeEvent<HTMLInputElement>): void;
}

const ScInputText = styled(InputBase)<IScInput>`
  ${props => (props.block ? css`
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
    if (onChange) {
      onChange(e.target.value, e);
    }
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
