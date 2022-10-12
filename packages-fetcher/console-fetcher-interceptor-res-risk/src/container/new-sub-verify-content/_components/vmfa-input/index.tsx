import React from 'react';
import styled from 'styled-components';

import {
  mixinTextError,
  mixinBorderError
} from '@alicloud/console-base-theme';
import Input, {
  InputProps
} from '@alicloud/console-base-rc-input';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Flex from '@alicloud/console-base-rc-flex';

import intl from '../../../../intl';

interface IInputProps {
  is_error: boolean;
  input_width_percent?: number;
}

interface IProps extends Omit<IInputProps, 'is_error'>, InputProps {
  value: string;
  errorMessage?: string;
  onShowVmfaButtonClick?(): void;
}

const ScError = styled.div`
  ${mixinTextError}
`;

const ScInputWrapper = styled.div`
  width: 100%;
`;

const ScInput = styled(Input)<IInputProps>`
  margin-right: 12px;
  width: ${props => props.input_width_percent || 100}%;
  ${props => (props.is_error ? mixinBorderError : null)}
`;

export default function VMFAInput({
  errorMessage,
  onShowVmfaButtonClick,
  ...inputProps
}: IProps): JSX.Element {
  return <ScInputWrapper>
    <Flex align="center">
      <ScInput {...inputProps} is_error={Boolean(errorMessage)} />
      {onShowVmfaButtonClick ? <Button {...{
        theme: ButtonTheme.TEXT_PRIMARY,
        label: intl('op:view_security_code'),
        onClick: onShowVmfaButtonClick
      }} /> : null}
    </Flex>
    <ScError>{errorMessage}</ScError>
  </ScInputWrapper>;
}