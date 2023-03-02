import React, {
  useCallback,
  useMemo,
  useState,
  KeyboardEvent
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
  IRiskPromptResolveData,
  TTypeOfPrimaryButton
} from '../../types';
import {
  WINDVANE_AVAILABLE
} from '../../const';
import intl from '../../intl';
import {
  useModelProps
} from '../../model';
import XIcon from '../x-icon';
import Generate, {
  type IGenerateCodeButtonProps
} from '../generate-code-button';
import {
  getInputError,
  handleRiskPromptDialogSubmit,
  getOldMainOrMpkAccountRiskInfo,
  getVmfaCodeFromWindVane
} from '../../utils';

interface IInputProps {
  'data-input-width'?: number | string;
  'data-is-error'?: boolean;
}

interface IHandleInputChangeProps {
  verifyCode: string;
}

type TVerifyCodeInputType = 'vmfa_auth' | 'vmfa_bind' | 'sms_or_email_auth';
type TDialogSubmitType = 'old_main_or_downgrade_mpk' | 'new_mpk' | 'new_sub';

interface IVerifyCodeInputProps extends InputProps {
  verifyCodeInputType: TVerifyCodeInputType;
  inputWidth?: number | string;
  dialogSubmitType?: TDialogSubmitType;
  showApiErrorBehindInput?: boolean;
  generateProps?: Omit<IGenerateCodeButtonProps, 'typeOfErrorMessage'>;
  currentPrimaryButtonType?: TTypeOfPrimaryButton;
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
  inputWidth,
  generateProps,
  dialogSubmitType,
  verifyCodeInputType,
  currentPrimaryButtonType,
  handleInputChange,
  ...inputProps
}: IVerifyCodeInputProps): JSX.Element {
  const {
    codeType,
    accountId
  } = useModelProps();
  const contentContext = useDialog<IRiskPromptResolveData, IDialogData>();
  const {
    updateData,
    data: {
      mainAccountRiskInfo,
      errorMessageObject,
      primaryButtonDisabledObject
    }
  } = contentContext;

  const [stateVerifyCode, setStateVerifyCode] = useState<string>('');
  const [stateInputFocused, setStateInputFocused] = useState<boolean>(false);
  const [stateErrorMessage, setStateErrorMessage] = useState<string>(intl('message:vmfa_input_empty_tip'));
  const [stateNoWindVaneHandler, setStateNoWindVaneHandler] = useState<boolean>(false);

  const typeOfErrorMessage = useMemo(() => {
    return verifyCodeInputType === 'vmfa_bind' ? 'bindMfa' : currentPrimaryButtonType;
  }, [verifyCodeInputType, currentPrimaryButtonType]);

  const updateErrorMessage = useCallback((errorMessage: string) => {
    if (typeOfErrorMessage) {
      updateData({
        errorMessageObject: {
          ...errorMessageObject,
          [typeOfErrorMessage]: errorMessage
        }
      });
    }
  }, [errorMessageObject, typeOfErrorMessage, updateData]);

  const onChange = useCallback((verifyCode: string) => {
    const inputErrorMessage = getInputError(verifyCode);

    setStateErrorMessage(inputErrorMessage);
    setStateVerifyCode(verifyCode);

    if (currentPrimaryButtonType) {
      updateData({
        primaryButtonDisabledObject: {
          ...primaryButtonDisabledObject,
          [currentPrimaryButtonType]: Boolean(inputErrorMessage)
        }
      });
    }

    if (handleInputChange) {
      handleInputChange({
        verifyCode
      });
    }
  }, [currentPrimaryButtonType, primaryButtonDisabledObject, handleInputChange, updateData]);

  const innerRight = useMemo(() => {
    return <XIcon onClick={() => {
      setStateVerifyCode('');
      updateErrorMessage('');
    }} />;
  }, [updateErrorMessage]);

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      // 避免 Input 输入验证码之后按回车，触发 innerRight 的清空效果
      event.preventDefault();

      // 当 !PrimaryButtonDisabled 时，主账号、子账号的 MFA、手机、邮箱验证可以通过回车键触发
      if (verifyCodeInputType !== 'vmfa_bind' && currentPrimaryButtonType && !primaryButtonDisabledObject[currentPrimaryButtonType]) {
        const oldMainOrMpkVerifyType = getOldMainOrMpkAccountRiskInfo(mainAccountRiskInfo).verifyType;

        switch (dialogSubmitType) {
          case 'new_mpk':
            handleRiskPromptDialogSubmit({
              accountId,
              codeType,
              contentContext,
              dialogSubmitType,
              verifyType: oldMainOrMpkVerifyType
            });

            return;
          case 'new_sub':
            handleRiskPromptDialogSubmit({
              contentContext,
              dialogSubmitType
            });

            return;
          case 'old_main_or_downgrade_mpk':
            handleRiskPromptDialogSubmit({
              contentContext,
              dialogSubmitType,
              verifyType: oldMainOrMpkVerifyType
            });

            break;
          default:
            // Do Nothing
        }
      }
    }
  };

  const handleGetVmfaCodeFromWindVane = useCallback(() => {
    getVmfaCodeFromWindVane({
      onFail(failMessage) {
        updateErrorMessage(failMessage);
        setStateNoWindVaneHandler(true);
      },
      onSuccess(vmfaCode) {
        setStateVerifyCode(vmfaCode);

        if (handleInputChange) {
          handleInputChange({
            verifyCode: vmfaCode
          });
        }
      },
      onFinally() {
        setStateInputFocused(false);
      }
    });
  }, [handleInputChange, updateErrorMessage]);

  const operation = useMemo((): JSX.Element | null => {
    if (verifyCodeInputType === 'sms_or_email_auth' && generateProps) {
      return <Generate {...generateProps} typeOfErrorMessage={typeOfErrorMessage} />;
    }

    if (verifyCodeInputType === 'vmfa_auth' && WINDVANE_AVAILABLE && !stateNoWindVaneHandler) {
      return <Button {...{
        theme: ButtonTheme.BRAND_PRIMARY,
        label: intl('op:view_security_code'),
        onClick: handleGetVmfaCodeFromWindVane
      }} />;
    }

    return null;
  }, [verifyCodeInputType, generateProps, typeOfErrorMessage, stateNoWindVaneHandler, handleGetVmfaCodeFromWindVane]);

  return <ScWrapper>
    <Flex align="center">
      <ScInput {...{
        ...inputProps,
        onChange,
        onKeyDown,
        innerRight,
        'data-input-width': inputWidth,
        'data-is-error': Boolean(stateErrorMessage),
        value: stateVerifyCode,
        focused: stateInputFocused
      }} />
      {operation}
    </Flex>
    {stateErrorMessage && <ScError>{stateErrorMessage}</ScError>}
  </ScWrapper>;
}
export type {
  TDialogSubmitType,
  TVerifyCodeInputType,
  IHandleInputChangeProps
};