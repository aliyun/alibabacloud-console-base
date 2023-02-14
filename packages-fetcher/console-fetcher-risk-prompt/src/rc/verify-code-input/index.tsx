import React, {
  useCallback,
  useMemo,
  useState
} from 'react';
import styled from 'styled-components';

import {
  mixinTextError,
  mixinBorderError
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Input, {
  InputProps
} from '@alicloud/console-base-rc-input';
import Flex from '@alicloud/console-base-rc-flex';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  WINDVANE_AVAILABLE
} from '../../const';
import intl from '../../intl';
import {
  getInputError,
  getVmfaCodeFromWindVane
} from '../../utils';
import XIcon from '../x-icon';
import Generate, {
  type IGenerateCodeButtonProps
} from '../generate-code-button';

interface IInputProps {
  'data-input-width'?: number | string;
  'data-is-error'?: boolean;
}

interface IHandleInputChangeProps {
  verifyCode: string;
  inputInError: boolean;
}

type TVerifyCodeInputType = 'vmfa_auth' | 'vmfa_bind' | 'sms_or_email_auth';

interface IVerifyCodeInputProps extends InputProps {
  type: TVerifyCodeInputType;
  inputWidth?: number | string;
  showApiErrorBehindInput?: boolean;
  generateProps?: IGenerateCodeButtonProps;
  handleInputChange?(p: IHandleInputChangeProps): void;
}

const ScWrapper = styled.div`
  width: 100%;
`;

const ScError = styled.div`
  margin-top: 8px;
  word-break: break-word;
  ${mixinTextError}
`;

const ScInput = styled(Input)<IInputProps>`
  margin-right: 12px;
  width: ${props => {
    const inputWidth = props['data-input-width'];

    if (typeof inputWidth === 'string') {
      return inputWidth;
    }

    if (typeof inputWidth === 'number') {
      return `${inputWidth}px`;
    }

    return '150px';
  }};
  ${props => (props['data-is-error'] ? mixinBorderError : null)};
`;

export default function VerifyCodeInput({
  type,
  inputWidth,
  generateProps,
  handleInputChange,
  ...inputProps
}: IVerifyCodeInputProps): JSX.Element {
  const {
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const [stateVerifyCode, setStateVerifyCode] = useState<string>('');
  const [stateInputFocused, setStateInputFocused] = useState<boolean>(false);
  const [stateNoWindVaneHandler, setStateNoWindVaneHandler] = useState<boolean>(false);
  const [stateInputEverChanged, setStateInputEverChanged] = useState<boolean>(false);

  const inputErrorMessage = useMemo(() => {
    return getInputError(stateVerifyCode, stateInputEverChanged);
  }, [stateVerifyCode, stateInputEverChanged]);

  const onChange = useCallback((verifyCode: string) => {
    setStateInputEverChanged(true);
    setStateVerifyCode(verifyCode);

    if (handleInputChange) {
      handleInputChange({
        verifyCode,
        inputInError: Boolean(getInputError(verifyCode, stateInputEverChanged))
      });
    }
  }, [stateInputEverChanged, handleInputChange]);

  const inputInnerRight = useMemo(() => {
    return <XIcon onClick={() => {
      setStateVerifyCode('');
      updateData({
        apiErrorMessage: ''
      });
    }} />;
  }, [updateData]);

  const handleGetVmfaCodeFromWindVane = useCallback(() => {
    getVmfaCodeFromWindVane({
      onFail(failMessage) {
        updateData({
          apiErrorMessage: failMessage
        });
        setStateNoWindVaneHandler(true);
      },
      onSuccess(vmfaCode) {
        setStateVerifyCode(vmfaCode);
        setStateInputEverChanged(true);

        if (handleInputChange) {
          handleInputChange({
            verifyCode: vmfaCode,
            inputInError: false
          });
        }
      },
      onFinally() {
        setStateInputFocused(false);
      }
    });
  }, [handleInputChange, updateData]);

  const operation = useMemo((): JSX.Element | null => {
    if (type === 'sms_or_email_auth' && generateProps) {
      return <Generate {...generateProps} />;
    }

    if (type === 'vmfa_auth' && WINDVANE_AVAILABLE && !stateNoWindVaneHandler) {
      return <Button {...{
        theme: ButtonTheme.BRAND_PRIMARY,
        label: intl('op:view_security_code'),
        onClick: handleGetVmfaCodeFromWindVane
      }} />;
    }

    return null;
  }, [type, generateProps, stateNoWindVaneHandler, handleGetVmfaCodeFromWindVane]);

  return <ScWrapper>
    <Flex align="center">
      <ScInput {...{
        ...inputProps,
        onChange,
        inputInnerRight,
        'data-input-width': inputWidth,
        'data-is-error': Boolean(inputErrorMessage),
        value: stateVerifyCode,
        focused: stateInputFocused
      }} />
      {operation}
    </Flex>
    {inputErrorMessage && <ScError>{inputErrorMessage}</ScError>}
  </ScWrapper>;
}
export type {
  TVerifyCodeInputType,
  IHandleInputChangeProps
};