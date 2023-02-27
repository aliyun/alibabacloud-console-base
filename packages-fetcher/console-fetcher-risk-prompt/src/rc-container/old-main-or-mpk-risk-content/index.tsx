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
  getOldMainOrMpkAccountRiskInfo,
  convertToMpkVerificationDeviceType
} from '../../utils';

export default function OldMainOrMpkRiskContent(): JSX.Element {
  const {
    oldMainOrMpkVerifyInfo
  } = useModelProps();

  const {
    data: {
      mainAccountRiskInfo
    }
  } = useDialog<IRiskPromptResolveData, IDialogData>();
  const {
    isMpk, mpkIsDowngrade, verifyType
  } = getOldMainOrMpkAccountRiskInfo(mainAccountRiskInfo);

  const authFormProps = useMemo((): TAuthFormProps => {
    if (isMpk && !mpkIsDowngrade) {
      return {
        apiType: 'identity_send_code',
        accountType: EAccountType.MAIN,
        urlSetting: MAIN_ACCOUNT_URL_SETTING,
        verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
        verifyType: convertToMpkVerificationDeviceType(verifyType)
      };
    }

    return {
      apiType: 'old_main_send_code',
      urlSetting: MAIN_ACCOUNT_URL_SETTING,
      convertedVerifyDetail: oldMainOrMpkVerifyInfo?.convertedVerifyType,
      verifyType: oldMainOrMpkVerifyInfo?.verifyType ?? 'ga'
    };
  }, [isMpk, mpkIsDowngrade, verifyType, oldMainOrMpkVerifyInfo]);

  return <AuthFormExceptSubMfa {...authFormProps} />;
}