import {
  dataVerifySubAccountMfa,
  ESubVerificationDeviceType,
  type ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

import {
  IRiskPromptResolveData
} from '../../types';
import {
  convertToResolveDataVerifyType
} from '../convert-verify-type';

interface IProps {
  subVerificationParams?: ParamsVerifySubAccount[];
  currentSubVerificationDeviceType?: ESubVerificationDeviceType | 'bindMfa';
  onParamsVerifySuccess: () => void;
}

export default async function subBindOrVerifyValidators({
  subVerificationParams,
  currentSubVerificationDeviceType,
  onParamsVerifySuccess
}: IProps): Promise<IRiskPromptResolveData | null> {
  if (subVerificationParams) {
    const currentVerifiCationParams = subVerificationParams.find(o => o.verifyType === currentSubVerificationDeviceType);

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