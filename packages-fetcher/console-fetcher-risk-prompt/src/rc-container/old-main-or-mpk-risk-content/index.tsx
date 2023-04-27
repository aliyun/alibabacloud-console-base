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
import VerifyRiskForm from '../verify-risk-form';

export default function OldMainOrMpkRiskContent(): JSX.Element {
  const {
    oldMainSendCodeUrl,
    oldMainSendCodeMethod,
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
    // MPK
    if (isMpk && !mpkIsDowngrade) {
      return {
        riskType: ERiskType.MPK,
        verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
        verifyType: convertToMpkVerificationDeviceType(verifyType)
      };
    }

    // 旧版主账号风控或者降级后的 MPK
    return {
      riskType: ERiskType.OLD_MAIN,
      isMpkDowngrade: isMpk,
      sendCodeMethod: oldMainSendCodeMethod,
      sendCodeUrl: oldMainSendCodeUrl,
      verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
      convertedVerifyType: oldMainOrMpkVerifyInfo?.convertedVerifyType,
      verifyType: oldMainOrMpkVerifyInfo?.verifyType ?? 'ga'
    };
  }, [isMpk, mpkIsDowngrade, verifyType, oldMainOrMpkVerifyInfo, oldMainSendCodeMethod, oldMainSendCodeUrl]);

  return <VerifyRiskForm {...authFormProps} />;
}