import React, {
  useMemo
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import {
  ESubIdentityServiceType
} from '../../../enum';
import {
  useModelProps
} from '../../../model';
import {
  getSubVerificationSettingUrl
} from '../../../utils';
import AuthFormExceptSubMfa from '../../../rc/auth-form-except-sub-mfa';

interface IProps {
  deviceType: ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.EMAIL;
}

export default function SmsOrEmailAuth({
  deviceType
}: IProps): JSX.Element {
  const {
    data: {
      subIdentityServiceData
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const {
    accountId
  } = useModelProps();

  const verifyDetail = useMemo((): string => {
    if (subIdentityServiceData?.dataType === ESubIdentityServiceType.GET_VERIFICATION_INFO_TO_AUTH) {
      const foundVerificationItem = subIdentityServiceData.data.verificationOrBindValidators.find(o => o.deviceType === deviceType);

      if (foundVerificationItem?.deviceType === ESubVerificationDeviceType.SMS) {
        return foundVerificationItem.phoneNumber;
      }

      if (foundVerificationItem?.deviceType === ESubVerificationDeviceType.EMAIL) {
        return foundVerificationItem.emailAddress;
      }

      return '';
    }

    return '';
  }, [deviceType, subIdentityServiceData]);

  return <AuthFormExceptSubMfa {...{
    verifyDetail,
    verifyType: deviceType,
    apiType: 'identity_send_code',
    accountType: EAccountType.SUB,
    urlSetting: getSubVerificationSettingUrl(accountId)
  }} />;
}