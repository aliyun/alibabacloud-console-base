import {
  dataVerifySubAccountMfa,
  ESubVerificationDeviceType,
  type ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

import {
  IRiskPromptResolveData
} from '../../types';
import {
  ESceneKey
} from '../../enum';
import {
  convertToResolveDataVerifyType
} from '../convert-verify-type';

interface IProps {
  subVerificationParamArray?: ParamsVerifySubAccount[];
  currentSubVerificationDeviceType?: ESubVerificationDeviceType | ESceneKey.BIND_MFA;
  onParamsVerifySuccess: () => void;
}

export default async function subBindOrVerifyValidators({
  subVerificationParamArray,
  currentSubVerificationDeviceType,
  onParamsVerifySuccess
}: IProps): Promise<IRiskPromptResolveData | null> {
  if (subVerificationParamArray) {
    const currentVerifiCationParams = subVerificationParamArray.find(o => o.verifyType === currentSubVerificationDeviceType);

    if (currentVerifiCationParams) {
      onParamsVerifySuccess();

      const response = await dataVerifySubAccountMfa(currentVerifiCationParams);

      return {
        verifyCode: response.ivToken,
        // 将 VMFA/U2F/SMS/EMAIL 转化为 ga/sms/email
        verifyType: convertToResolveDataVerifyType(currentVerifiCationParams)
      };
    }
  }

  return null;
}