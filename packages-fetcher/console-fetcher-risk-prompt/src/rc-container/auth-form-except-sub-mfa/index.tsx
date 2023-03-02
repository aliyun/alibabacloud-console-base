import React, {
  useMemo,
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Flex from '@alicloud/console-base-rc-flex';
import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  EIconType
} from '../../enum';
import {
  useModelProps
} from '../../model';
import intl from '../../intl';
import {
  useCountDown
} from '../../hook';
import Form from '../../rc/form';
import Message from '../../rc/message';
import SubAuthFormWrapper from '../../rc/sub-auth-form-wrapper';
import VerifyCodeInput, {
  type IHandleInputChangeProps
} from '../../rc/verify-code-input';
import type {
  IGenerateCodeButtonProps
} from '../../rc/generate-code-button';
import {
  getUpdateSubVerificationParams
} from '../../utils';

import {
  TAuthFormProps
} from './type';
import dataSendVerifyCode from './send-verify-code';
import {
  getCurrentPrimaryButtonType,
  getDialogSubmitType,
  getInputWidth,
  getVerifyCodeInputType,
  getVerifyLabel,
  getVerifySettingLabel,
  getVerifySettingUrl,
  getSubAuthFormWrapperProps
} from './get-auth-form-attrs';

const ScInfo = styled.strong`
  margin-right: 12px;
`;

// 发送验证码成功后的成功提示的持续时间（秒）
const SEND_CODE_SUCCESS_TIP_DURATION = 3;

export default function VerifyRiskForm(props: TAuthFormProps): JSX.Element {
  const [stateVerifyUniqId, setStateVerifyUniqId] = useState<string>('');
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      errorMessageObject,
      subVerificationParams
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const currentPrimaryButtonType = getCurrentPrimaryButtonType(props);
  const errorMessageOfCurrentType = errorMessageObject[currentPrimaryButtonType];

  const {
    countDown,
    setCountDown
  } = useCountDown();
  const showSendCodeSuccessTip = countDown > 0;

  const getUpdateDataOnInputChange = useCallback((code: string): Partial<IDialogData> => {
    const typeOfErrorMessage = getCurrentPrimaryButtonType(props);
    // 清空对应风控方式的 error
    const updatedAiErrorMessageObject = {
      errorMessageObject: {
        ...errorMessageObject,
        [typeOfErrorMessage]: ''
      }
    };

    // OneConsole 旧版主账号类型
    if (props.formType === 'old_main') {
      return {
        ...updatedAiErrorMessageObject,
        mainOrMpkAccountData: {
          code,
          requestId: stateVerifyUniqId
        }
      };
    }

    // MPK 类型账号
    if (props.accountType === EAccountType.MAIN) {
      return {
        ...updatedAiErrorMessageObject,
        mainOrMpkAccountData: {
          code,
          requestId: stateVerifyUniqId
        }
      };
    }
  
    // 手机或邮箱方式的子账号风控
    if ([ESubVerificationDeviceType.EMAIL, ESubVerificationDeviceType.SMS].includes(props.verifyType)) {
      return {
        ...updatedAiErrorMessageObject,
        subVerificationParams: getUpdateSubVerificationParams({
          currentSubVerificationParams: subVerificationParams,
          paramsToUpdate: {
            accountId,
            authCode: code,
            verifyType: props.verifyType,
            verifyUniqId: stateVerifyUniqId,
            ext: JSON.stringify({
              codeType
            })
          }
        })
      };
    }

    // Vmfa 类型的子账号风控
    return {
      ...updatedAiErrorMessageObject,
      subVerificationParams: getUpdateSubVerificationParams({
        currentSubVerificationParams: subVerificationParams,
        paramsToUpdate: {
          accountId,
          authCode: code,
          verifyType: ESubVerificationDeviceType.VMFA,
          ext: JSON.stringify({
            codeType
          })
        }
      })
    };
  }, [props, accountId, codeType, stateVerifyUniqId, subVerificationParams, errorMessageObject]);

  const handleInputChange = useCallback((payload: IHandleInputChangeProps): void => {
    const {
      verifyCode
    } = payload;
    const trimmedValue = verifyCode.trim();
    const dataToUpdate = getUpdateDataOnInputChange(trimmedValue);

    updateData(dataToUpdate);
  }, [updateData, getUpdateDataOnInputChange]);

  const generateProps = useMemo<IGenerateCodeButtonProps>(() => {
    const sendVerifyCode = (): Promise<void> => {
      return dataSendVerifyCode({
        ...props,
        accountId,
        codeType
      }).then(requestId => {
        // 验证码发送成功时需要清空错误
        updateData({
          errorMessageObject: {
            ...errorMessageObject,
            [currentPrimaryButtonType]: ''
          }
        });
        setCountDown(SEND_CODE_SUCCESS_TIP_DURATION);
        setStateVerifyUniqId(requestId);
      });
    };
    
    return {
      verifyType: props.verifyType || '',
      sendVerifyCode
    };
  }, [props, codeType, accountId, errorMessageObject, currentPrimaryButtonType, updateData, setCountDown]);
  
  const showVerifySettingUrlChangeButton = !(props.formType === 'mpk_or_sub_identity' && props.verifyType === ESubVerificationDeviceType.VMFA);

  return <>
    <Message {...{
      visible: Boolean(errorMessageOfCurrentType),
      iconType: EIconType.ERROR,
      message: errorMessageOfCurrentType
    }} />
    <Message {...{
      visible: showSendCodeSuccessTip,
      iconType: EIconType.SUCCESS,
      message: intl('message:send:code:success')
    }} />
    <SubAuthFormWrapper {...getSubAuthFormWrapperProps(props)}>
      <Form {...{
        items: [{
          label: getVerifyLabel(props),
          labelTextAlign: 'center',
          content: <Flex align="center">
            {props.verifyDetail && <ScInfo>{props.verifyDetail}</ScInfo>}
            {showVerifySettingUrlChangeButton && <Button {...{
              spm: `set-${props.verifyType}`,
              theme: ButtonTheme.TEXT_PRIMARY,
              label: getVerifySettingLabel(props),
              href: getVerifySettingUrl({
                accountId,
                authFormProps: props
              })
            }} />}
          </Flex>
        }, {
          label: intl('attr:code'),
          labelTextAlign: 'center',
          content: <VerifyCodeInput {...{
            generateProps,
            handleInputChange,
            currentPrimaryButtonType,
            showErrorMessage: true,
            inputWidth: getInputWidth(props),
            dialogSubmitType: getDialogSubmitType(props),
            verifyCodeInputType: getVerifyCodeInputType(props)
          }} />
        }]
      }} />
    </SubAuthFormWrapper>
  </>;
}

export * from './type';