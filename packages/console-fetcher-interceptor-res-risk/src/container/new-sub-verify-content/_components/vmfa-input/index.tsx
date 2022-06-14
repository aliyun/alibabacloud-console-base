import React from 'react';
import styled from 'styled-components';

import {
  mixinTextError,
  mixinBorderError
} from '@alicloud/console-base-theme';
import Input, {
  InputProps
} from '@alicloud/console-base-rc-input';

interface IInputProps {
  isError?: boolean;
  widthPercent?: number;
}

interface IProps extends IInputProps, InputProps {
  value: string;
  errorMessage?: string;
}

const ScInput = styled(Input)<IInputProps>`
  margin-right: 12px;
  width: ${props => props.widthPercent || 100}%;
  ${props => (props.isError ? mixinBorderError : null)}
`;

const ScError = styled.div`
  ${mixinTextError}
`;

export default function VMFAInput({
  value,
  isError,
  errorMessage,
  ...props
}: IProps): JSX.Element {
  return <>
    <ScInput {...{
      value,
      isError,
      ...props
    }} />
    <ScError>{errorMessage}</ScError>
  </>;
}
