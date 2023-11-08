import {
  ERiskType,
  ESubVerificationDeviceType
} from '../../enum';
import {
  ISlsCommonPayload,
  TDialogSubmitProps
} from '../../types';
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

    // 旧版主账号风控埋点
    return slsOldMainRisk({
      ...slsProps,
      type: verifyType
    });
  }

  if (dialogSubmitType === ERiskType.MPK) {
    return slsMpkRisk({
      ...slsProps,
      type: dialogSubmitProps.verifyType,
      mpkIsDowngrade: false
    });
  }

  return slsSubRisk({
    ...slsProps,
    type: currentSubVerificationDeviceType ?? ''
  });
}
