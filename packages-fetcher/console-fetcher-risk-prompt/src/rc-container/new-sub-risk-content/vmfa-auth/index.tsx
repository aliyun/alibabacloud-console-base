import React, {
  useCallback
} from 'react';

import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';
import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData
} from '../../../types';
import {
  EIconType,
  ESubIdentityServiceType
} from '../../../enum';
import {
  WINDVANE_AVAILABLE
} from '../../../const';
import {
  useModelProps
} from '../../../model';
import intl from '../../../intl';
import Form from '../../../rc/form';
import VerifyCodeInput, {
  IHandleInputChangeProps
} from '../../../rc/verify-code-input';
import Message from '../../../rc/message';
import SubAuthFormWrapper from '../../../rc/sub-auth-form-wrapper';
import {
  getUpdateSubVerificationParams
} from '../../../utils';

export default function VmfaAuth(): JSX.Element {
  const {
    codeType,
    accountId
  } = useModelProps();
  const {
    data: {
      apiErrorMessage,
      subIdentityServiceParams,
      subIdentityServiceData
    },
    updateData
  } = useDialog<void, IDialogData>();
  
  const userPrincipalName = ((): string => {
    if (subIdentityServiceData?.dataType === ESubIdentityServiceType.GET_VERIFICATION_INFO_TO_AUTH) {
      return subIdentityServiceData.data.targetUserPrincipalName;
    }

    return '';
  })();

  const handleInputChange = useCallback((payload: IHandleInputChangeProps) => {
    const {
      verifyCode, inputInError
    } = payload;

    // 输入验证码的时候，清空错误
    updateData({
      apiErrorMessage: '',
      primaryButtonDisabled: inputInError,
      subIdentityServiceParams: {
        paramsType: ESubIdentityServiceType.VERIFY_SUB_ACCOUNT,
        params: getUpdateSubVerificationParams({
          currentSubIdentityServiceParams: subIdentityServiceParams,
          paramsToUpdate: {
            accountId,
            authCode: verifyCode.trim(),
            verifyType: ESubVerificationDeviceType.VMFA,
            ext: JSON.stringify({
              codeType
            })
          }
        })
      }
    });
  }, [accountId, codeType, subIdentityServiceParams, updateData]);

  return <>
    {apiErrorMessage && <Message {...{
      message: apiErrorMessage,
      iconType: EIconType.ERROR
    }} />}
    <SubAuthFormWrapper {...{
      accountType: EAccountType.SUB,
      deviceType: ESubVerificationDeviceType.VMFA
    }}>
      <Form {...{
        items: [{
          label: intl('attr:vmfa_auth_userName'),
          labelTextAlign: 'center',
          content: <strong>{userPrincipalName}</strong>
        }, {
          label: intl('attr:vmfa_auth_code'),
          labelTextAlign: 'center',
          content: <VerifyCodeInput {...{
            type: 'vmfa_auth',
            handleInputChange,
            inputWidth: WINDVANE_AVAILABLE ? '60%' : 180
          }} />
        }]
      }} />
    </SubAuthFormWrapper>
  </>;
}
