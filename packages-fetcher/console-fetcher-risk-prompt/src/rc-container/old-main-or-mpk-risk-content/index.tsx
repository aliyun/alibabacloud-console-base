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
  useModelProps
} from '../../model';
import {
  getOldMainOrMpkAccountRiskInfo,
  convertToMpkVerificationDeviceType
} from '../../utils';
import AuthFormExceptSubMfa, {
  type TAuthFormProps
} from '../auth-form-except-sub-mfa';

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
        formType: 'mpk_or_sub_identity',
        accountType: EAccountType.MAIN,
        verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
        verifyType: convertToMpkVerificationDeviceType(verifyType)
      };
    }

    return {
      formType: 'old_main',
      verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
      convertedVerifyType: oldMainOrMpkVerifyInfo?.convertedVerifyType,
      verifyType: oldMainOrMpkVerifyInfo?.verifyType ?? 'ga'
    };
  }, [isMpk, mpkIsDowngrade, verifyType, oldMainOrMpkVerifyInfo]);

  return <AuthFormExceptSubMfa {...authFormProps} />;
}