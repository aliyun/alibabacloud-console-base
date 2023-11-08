import {
  throttle as _throttle
} from 'lodash-es';
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
  ESceneKey,
  ERiskType,
  ESubVerificationDeviceType
} from '../../enum';
import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  WINDVANE_AVAILABLE
} from '../../const';
import {
  IHandleInputChangeProps
} from '../../hooks';
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
} from '../../util';

interface IInputProps {
  'data-input-width'?: number | string;
  'data-is-error'?: boolean;
}

type TVerifyCodeInputType = 'vmfa_auth' | 'sms_or_email_auth';

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
    setRiskCanceledErrorProps,
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

  const updateErrorMessage = useCallback((errorMessage: string) => {
    if (keyOfAuthErrorMessageObject) {
      updateData({
        errorMessageObject: {
          ...errorMessageObject,
          [keyOfAuthErrorMessageObject]: errorMessage
        }
      });
    }
  }, [errorMessageObject, keyOfAuthErrorMessageObject, updateData]);

  const onChange = useCallback((verifyCode: string) => {
    const inputErrorMessage = getInputError(verifyCode);

    setStateErrorMessage(inputErrorMessage);
    setStateVerifyCode(verifyCode);

    if (keyOfAuthErrorMessageObject) {
      updateData({
        primaryButtonDisabledObject: {
          ...primaryButtonDisabledObject,
          [keyOfAuthErrorMessageObject]: Boolean(inputErrorMessage)
        }
      });
    }

    if (handleInputChange) {
      handleInputChange({
        verifyCode
      });
    }
  }, [keyOfAuthErrorMessageObject, primaryButtonDisabledObject, handleInputChange, updateData]);

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
      if (currentPrimaryButtonNotDisabled && !dialogBlocked) {
        const oldMainOrMpkVerifyType = getOldMainOrMpkAccountRiskInfo(mainAccountRiskInfo).verifyType;
        const handleRiskPromptDialogSubmitCommonProps = {
          contentContext,
          setRiskCanceledErrorProps,
          reRequestWithVerifyResult
        };

        switch (dialogSubmitType) {
          case ERiskType.MPK:
            throttledHandleRiskPromptDialogSubmit({
              accountId,
              codeType,
              dialogSubmitType,
              verifyType: oldMainOrMpkVerifyType,
              ...handleRiskPromptDialogSubmitCommonProps
            });

            return;
          case ERiskType.NEW_SUB:
            throttledHandleRiskPromptDialogSubmit({
              dialogSubmitType,
              ...handleRiskPromptDialogSubmitCommonProps
            });

            return;
          case ERiskType.OLD_MAIN:
            throttledHandleRiskPromptDialogSubmit({
              dialogSubmitType,
              verifyType: oldMainOrMpkVerifyType,
              ...handleRiskPromptDialogSubmitCommonProps
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
      // 手机、验证验证码发送按钮
      return <Generate {...generateCodeButtonProps} keyOfErrorMessageObject={keyOfAuthErrorMessageObject} />;
    }

    // 阿里云 APP 中虚拟 MFA 验证时，可以通过 WindVane 接口唤起 APP 提供的 VMFA 填充页面
    if (verifyCodeInputType === 'vmfa_auth' && WINDVANE_AVAILABLE && !stateNoWindVaneHandler) {
      return <Button {...{
        theme: ButtonTheme.BRAND_PRIMARY,
        label: intl('op:view_security_code'),
        onClick: handleGetVmfaCodeFromWindVane
      }} />;
    }

    return null;
  }, [verifyCodeInputType, generateCodeButtonProps, keyOfAuthErrorMessageObject, stateNoWindVaneHandler, handleGetVmfaCodeFromWindVane]);

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
