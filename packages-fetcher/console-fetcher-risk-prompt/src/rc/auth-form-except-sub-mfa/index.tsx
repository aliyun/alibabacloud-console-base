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
  IRiskPromptResolveData,
  TRiskTypeOfPrimaryButton
} from '../../types';
import {
  EIconType,
  EVerifyType,
  ESubIdentityServiceType
} from '../../enum';
import {
  useModelProps
} from '../../model';
import intl from '../../intl';
import Form from '../form';
import Message from '../message';
import SubAuthFormWrapper, {
  type TSubAuthFormWrapperProps
} from '../sub-auth-form-wrapper';
import VerifyCodeInput, {
  type TVerifyCodeInputType,
  type IHandleInputChangeProps
} from '../verify-code-input';
import type {
  IGenerateCodeButtonProps
} from '../generate-code-button';
import {
  intlVerifyLabel,
  intlVerifySetting,
  getUpdateSubVerificationParams
} from '../../utils';

import {
  TAuthFormProps
} from './type';
import dataSendVerifyCode from './send-verify-code';

const ScInfo = styled.strong`
  margin-right: 12px;
`;

export default function AuthFormExceptSubMfa({
  urlSetting,
  ...props
}: TAuthFormProps): JSX.Element {
  const [stateVerifyUniqId, setStateVerifyUniqId] = useState<string>('');

  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      apiErrorMessage,
      subIdentityServiceParams
    },
    updateData
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const handleInputChange = useCallback((payload: IHandleInputChangeProps): void => {
    const {
      verifyCode
    } = payload;
    const trimmedValue = verifyCode.trim();
    const getUpdateData = (): Partial<IDialogData> => {
      // OneConsole 旧版主账号类型
      if (props.apiType === 'old_main_send_code') {
        return {
          mainOrMpkAccountData: {
            code: trimmedValue,
            requestId: stateVerifyUniqId
          }
        };
      }

      // MPK 类型账号
      if (props.accountType === EAccountType.MAIN) {
        return {
          mainOrMpkAccountData: {
            code: trimmedValue,
            requestId: stateVerifyUniqId
          }
        };
      }

      return {
        subIdentityServiceParams: {
          paramsType: ESubIdentityServiceType.VERIFY_SUB_ACCOUNT,
          params: getUpdateSubVerificationParams({
            currentSubIdentityServiceParams: subIdentityServiceParams,
            paramsToUpdate: {
              accountId,
              verifyType: props.verifyType,
              authCode: trimmedValue,
              verifyUniqId: stateVerifyUniqId,
              ext: JSON.stringify({
                codeType
              })
            }
          })
        }
      };
    };

    updateData(getUpdateData());
  }, [props, accountId, codeType, stateVerifyUniqId, subIdentityServiceParams, updateData]);

  const subAuthFormWrapperProps = useMemo((): TSubAuthFormWrapperProps => {
    if (props.apiType === 'old_main_send_code') {
      return {
        accountType: EAccountType.MAIN
      };
    }

    if (props.accountType === EAccountType.MAIN) {
      return {
        accountType: EAccountType.MAIN
      };
    }

    return {
      accountType: EAccountType.SUB,
      deviceType: props.verifyType
    };
  }, [props]);

  const generateProps = useMemo<IGenerateCodeButtonProps>(() => {
    const sendVerifyCode = (): Promise<void> => {
      return dataSendVerifyCode({
        ...props,
        accountId,
        codeType
      }).then(requestId => {
        setStateVerifyUniqId(requestId);
      });
    };
    
    return {
      verifyType: props.verifyType || '',
      sendVerifyCode
    };
  }, [codeType, accountId, props]);

  const verifyLabel = useMemo((): string => {
    if (props.apiType === 'old_main_send_code') {
      return intlVerifyLabel(props.convertedVerifyDetail);
    }

    return intlVerifyLabel(props.verifyType);
  }, [props]);

  const verifySetting = useMemo((): string => {
    if (props.apiType === 'old_main_send_code') {
      return intlVerifySetting(props.convertedVerifyDetail);
    }

    return intlVerifySetting(props.verifyType);
  }, [props]);

  const verifyCodeInputType = useMemo((): TVerifyCodeInputType => {
    if (props.apiType === 'identity_send_code') {
      if (props.accountType === EAccountType.SUB) {
        return 'sms_or_email_auth';
      }

      return props.verifyType === ESubVerificationDeviceType.VMFA ? 'vmfa_auth' : 'sms_or_email_auth';
    }

    return props.convertedVerifyDetail === EVerifyType.MFA ? 'vmfa_auth' : 'sms_or_email_auth';
  }, [props]);

  const currentPrimaryButtonType = useMemo((): TRiskTypeOfPrimaryButton => {
    if (props.apiType === 'old_main_send_code') {
      return 'main_account';
    }

    if (props.accountType === EAccountType.MAIN) {
      return 'main_account';
    }

    return props.verifyType;
  }, [props]);
  
  return <>
    {apiErrorMessage && <Message {...{
      iconType: EIconType.ERROR,
      message: apiErrorMessage
    }} />}
    <SubAuthFormWrapper {...subAuthFormWrapperProps}>
      <Form {...{
        items: [{
          label: verifyLabel,
          content: <Flex align="center">
            {props.verifyDetail && <ScInfo>{props.verifyDetail}</ScInfo>}
            <Button {...{
              spm: `set-${props.verifyType}`,
              theme: ButtonTheme.TEXT_PRIMARY,
              label: verifySetting,
              href: urlSetting
            }} />
          </Flex>
        }, {
          label: intl('attr:code'),
          content: <VerifyCodeInput {...{
            generateProps,
            handleInputChange,
            currentPrimaryButtonType,
            showErrorMessage: true,
            type: verifyCodeInputType
          }} />
        }]
      }} />
    </SubAuthFormWrapper>
  </>;
}

export * from './type';