import React, {
  useMemo
} from 'react';

import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  ERiskType
} from '../../enum';
import {
  TAuthFormProps,
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
import AuthFormExceptSubMfa from '../auth-form-except-sub-mfa';

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
        riskType: ERiskType.MPK,
        verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
        verifyType: convertToMpkVerificationDeviceType(verifyType)
      };
    }

    return {
      riskType: ERiskType.OLD_MAIN,
      verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
      convertedVerifyType: oldMainOrMpkVerifyInfo?.convertedVerifyType,
      verifyType: oldMainOrMpkVerifyInfo?.verifyType ?? 'ga'
    };
  }, [isMpk, mpkIsDowngrade, verifyType, oldMainOrMpkVerifyInfo]);

  return <AuthFormExceptSubMfa {...authFormProps} />;
}