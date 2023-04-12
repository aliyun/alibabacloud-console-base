import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ISlsCommonPayload,
  TDialogSubmitProps
} from '../../types';
import {
  ERiskType
} from '../../enum';
import {
  slsMpkRisk,
  slsOldMainRisk,
  slsSubRisk
} from '../../sls';

interface ISlsRiskProps extends ISlsCommonPayload {
  dialogSubmitProps: TDialogSubmitProps;
  isMpkDowngradeInOldMainRisk?: boolean;
  currentSubVerificationDeviceType?: ESubVerificationDeviceType;
}

// 风控埋点
export default function slsRiskLogger({
  dialogSubmitProps,
  isMpkDowngradeInOldMainRisk,
  currentSubVerificationDeviceType,
  ...slsProps
}: ISlsRiskProps): void {
  const {
    dialogSubmitType
  } = dialogSubmitProps;

  if (dialogSubmitType === ERiskType.OLD_MAIN) {
    const {
      verifyType
    } = dialogSubmitProps;

    if (isMpkDowngradeInOldMainRisk) {
      // 降级到旧版主账号风控的 MPK 链路
      return slsMpkRisk({
        ...slsProps,
        type: verifyType,
        mpkIsDowngrade: true
      });
    }

    return slsOldMainRisk({
      ...slsProps,
      type: verifyType
    });
  }

  switch (dialogSubmitType) {
    case ERiskType.MPK: {
      const {
        verifyType
      } = dialogSubmitProps;

      return slsMpkRisk({
        ...slsProps,
        type: verifyType,
        mpkIsDowngrade: false
      });
    }
    case ERiskType.NEW_SUB: {
      return slsSubRisk({
        ...slsProps,
        type: currentSubVerificationDeviceType ?? ''
      });
    }
    default:
  }
}