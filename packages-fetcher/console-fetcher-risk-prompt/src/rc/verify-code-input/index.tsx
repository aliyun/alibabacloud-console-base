import _throttle from 'lodash/throttle';
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
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  ESceneKey,
  ERiskType
} from '../../enum';
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

interface IVerifyCodeInputProps extends InputProps {
  verifyCodeInputType: TVerifyCodeInputType;
  inputWidth?: number | string;
  dialogSubmitType?: ERiskType.MPK | ERiskType.NEW_SUB | ERiskType.OLD_MAIN;
  showApiErrorBehindInput?: boolean;
  generateCodeButtonProps?: Omit<IGenerateCodeButtonProps, 'keyOfErrorMessageObject'>;
  keyOfAuthErrorMessageObject?: ESubVerificationDeviceType | ESceneKey.MAIN_ACCOUNT;
  handleInputChange?(p: IHandleInputChangeProps): void;
}

const ScWrapper = styled.div`
  width: 100%;
`;

const ScError = styled.div`
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

// 通过回车触发提交风控验证需要做节流
const throttledHandleRiskPromptDialogSubmit = _throttle(handleRiskPromptDialogSubmit, 1000);

export default function VerifyCodeInput({
  inputWidth,
  dialogSubmitType,
  verifyCodeInputType,
  generateCodeButtonProps,
  keyOfAuthErrorMessageObject,
  handleInputChange,
  ...inputProps
}: IVerifyCodeInputProps): JSX.Element {
  const {
    codeType,
    accountId,
    reRequestWithVerifyResult
  } = useModelProps();
  const contentContext = useDialog<IRiskPromptResolveData, IDialogData>();
  const {
    updateData,
    data: {
      dialogBlocked,
      mainAccountRiskInfo,
      errorMessageObject,
      primaryButtonDisabledObject
    }
  } = contentContext;

  const [stateVerifyCode, setStateVerifyCode] = useState<string>('');
  const [stateInputFocused, setStateInputFocused] = useState<boolean>(false);
  const [stateErrorMessage, setStateErrorMessage] = useState<string>(intl('message:vmfa_input_empty_tip'));
  const [stateNoWindVaneHandler, setStateNoWindVaneHandler] = useState<boolean>(false);

  const keyOfErrorMessageObject = useMemo(() => {
    return verifyCodeInputType === 'vmfa_bind' ? ESceneKey.BIND_MFA : keyOfAuthErrorMessageObject;
  }, [verifyCodeInputType, keyOfAuthErrorMessageObject]);

  const updateErrorMessage = useCallback((errorMessage: string) => {
    if (keyOfErrorMessageObject) {
      updateData({
        errorMessageObject: {
          ...errorMessageObject,
          [keyOfErrorMessageObject]: errorMessage
        }
      });
    }
  }, [errorMessageObject, keyOfErrorMessageObject, updateData]);

  const onChange = useCallback((verifyCode: string) => {
    const inputErrorMessage = getInputError(verifyCode);

    setStateErrorMessage(inputErrorMessage);
    setStateVerifyCode(verifyCode);

    if (keyOfErrorMessageObject) {
      updateData({
        primaryButtonDisabledObject: {
          ...primaryButtonDisabledObject,
          [keyOfErrorMessageObject]: Boolean(inputErrorMessage)
        }
      });
    }

    if (handleInputChange) {
      handleInputChange({
        verifyCode
      });
    }
  }, [keyOfErrorMessageObject, primaryButtonDisabledObject, handleInputChange, updateData]);

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

      // 当前按钮是否非 disabled 状态
      const currentPrimaryButtonNotDisabled = keyOfAuthErrorMessageObject && !primaryButtonDisabledObject[keyOfAuthErrorMessageObject];

      // 允许通过回车键触发 dialogSubmit 的条件：当前输入框为验证 VMFA、手机、邮箱的输入框 & 当前 dialog 非 block 状态 & 当前按钮非 disabled 状态
      if (verifyCodeInputType !== 'vmfa_bind' && !dialogBlocked && currentPrimaryButtonNotDisabled) {
        const oldMainOrMpkVerifyType = getOldMainOrMpkAccountRiskInfo(mainAccountRiskInfo).verifyType;

        switch (dialogSubmitType) {
          case ERiskType.MPK:
            throttledHandleRiskPromptDialogSubmit({
              accountId,
              codeType,
              contentContext,
              dialogSubmitType,
              reRequestWithVerifyResult,
              verifyType: oldMainOrMpkVerifyType
            });

            return;
          case ERiskType.NEW_SUB:
            throttledHandleRiskPromptDialogSubmit({
              contentContext,
              dialogSubmitType,
              reRequestWithVerifyResult
            });

            return;
          case ERiskType.OLD_MAIN:
            throttledHandleRiskPromptDialogSubmit({
              contentContext,
              dialogSubmitType,
              reRequestWithVerifyResult,
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
    if (verifyCodeInputType === 'sms_or_email_auth' && generateCodeButtonProps) {
      return <Generate {...generateCodeButtonProps} keyOfErrorMessageObject={keyOfErrorMessageObject} />;
    }

    if (verifyCodeInputType === 'vmfa_auth' && WINDVANE_AVAILABLE && !stateNoWindVaneHandler) {
      return <Button {...{
        theme: ButtonTheme.BRAND_PRIMARY,
        label: intl('op:view_security_code'),
        onClick: handleGetVmfaCodeFromWindVane
      }} />;
    }

    return null;
  }, [verifyCodeInputType, generateCodeButtonProps, keyOfErrorMessageObject, stateNoWindVaneHandler, handleGetVmfaCodeFromWindVane]);

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
  TVerifyCodeInputType,
  IHandleInputChangeProps
};