import React, {
  useMemo
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ERiskType
} from '../../../enum';
import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import {
  useAccountId
} from '../../../model';
import {
  getSubVerificationSettingUrl
} from '../../../util';
import VerifyRiskForm from '../../verify-risk-form';

interface IProps {
  deviceType: ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.VMFA;
}

export default function SubAccountAuth({
  deviceType
}: IProps): JSX.Element {
  const accountId = useAccountId();
  const {
    data: {
      subGetVerificationToAuthData
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const verifyDetail = useMemo((): string => {
    if (subGetVerificationToAuthData) {
      // MFA 类型的详情为用户名
      if (deviceType === ESubVerificationDeviceType.VMFA) {
        return subGetVerificationToAuthData.targetUserPrincipalName;
      }
      
      const foundVerificationItem = subGetVerificationToAuthData.subValidators.find(o => o.deviceType === deviceType);

      // SMS 类型的详情为手机号，手机号前面要加区号
      if (foundVerificationItem?.deviceType === ESubVerificationDeviceType.SMS) {
        return foundVerificationItem.phoneNumber;
      }

      // EMAIl 类型的详情为邮箱地址
      if (foundVerificationItem?.deviceType === ESubVerificationDeviceType.EMAIL) {
        return foundVerificationItem.emailAddress;
      }

      return '';
    }

    return '';
  }, [deviceType, subGetVerificationToAuthData]);

  return <VerifyRiskForm {...{
    verifyDetail,
    riskType: ERiskType.NEW_SUB,
    verifyType: deviceType,
    urlSetting: getSubVerificationSettingUrl(accountId)
  }} />;
}
