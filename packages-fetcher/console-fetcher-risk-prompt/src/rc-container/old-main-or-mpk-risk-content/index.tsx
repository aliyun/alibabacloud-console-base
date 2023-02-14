import React, {
  useMemo
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';
import {
  EAccountType
} from '@alicloud/console-fetcher-risk-data';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  MAIN_ACCOUNT_URL_SETTING
} from '../../const';
import {
  useModelProps
} from '../../model';
import AuthFormExceptSubMfa, {
  type TAuthFormProps
} from '../../rc/auth-form-except-sub-mfa';
import {
  convertToMpkVerificationDeviceType
} from '../../utils';

export default function OldMainOrMpkRiskContent(): JSX.Element {
  const {
    oldMainOrMpkVerifyInfo
  } = useModelProps();

  const {
    data: {
      oldMainOrMpkRiskInfo
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();

  const authFormProps = useMemo((): TAuthFormProps => {
    if (oldMainOrMpkRiskInfo?.isMpk && !oldMainOrMpkRiskInfo.mpkIsDowngrade) {
      return {
        apiType: 'identity_send_code',
        accountType: EAccountType.MAIN,
        urlSetting: MAIN_ACCOUNT_URL_SETTING,
        verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
        verifyType: convertToMpkVerificationDeviceType(oldMainOrMpkRiskInfo.verifyType)
      };
    }

    return {
      apiType: 'old_main_send_code',
      urlSetting: MAIN_ACCOUNT_URL_SETTING,
      convertedVerifyDetail: oldMainOrMpkVerifyInfo?.convertedVerifyType,
      verifyType: oldMainOrMpkVerifyInfo?.verifyType ?? 'ga'
    };
  }, [oldMainOrMpkRiskInfo, oldMainOrMpkVerifyInfo]);

  return <AuthFormExceptSubMfa {...authFormProps} />;
}