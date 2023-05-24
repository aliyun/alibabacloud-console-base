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
  TMpkVerifyType,
  TAuthFormProps,
  IDialogData,
  IRiskPromptResolveData
} from '../../types';
import {
  useModelProps
} from '../../model';
import {
  getOldMainOrMpkAccountRiskInfo
} from '../../util';
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
    // MPK 未降级链路，走 Identity 服务
    if (isMpk && !mpkIsDowngrade) {
      return {
        riskType: ERiskType.MPK,
        verifyDetail: oldMainOrMpkVerifyInfo?.verifyDetail,
        verifyType: verifyType as TMpkVerifyType
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
