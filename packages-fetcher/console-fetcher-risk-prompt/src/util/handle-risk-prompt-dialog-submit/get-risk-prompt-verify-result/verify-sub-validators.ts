import {
  dataVerifySubAccountMfa,
  type ParamsVerifySubAccount
} from '@alicloud/console-fetcher-risk-data';

import {
  IRiskPromptVerifyResult
} from '../../../types';
import {
  ESubVerificationDeviceType
} from '../../../enum';
import intl from '../../../intl';
import {
  convertToResolveDataVerifyType
} from '../../convert-verify-type';

interface IProps {
  subVerificationParamArray?: ParamsVerifySubAccount[];
  currentSubVerificationDeviceType?: ESubVerificationDeviceType;
  updateErrorMessage: (errorMessage: string) => void;
}

export default async function verifySubValidators({
  subVerificationParamArray,
  currentSubVerificationDeviceType,
  updateErrorMessage
}: IProps): Promise<IRiskPromptVerifyResult | null> {
  if (subVerificationParamArray) {
    const currentVerifiCationParams = subVerificationParamArray.find(o => o.verifyType === currentSubVerificationDeviceType);

    if (currentVerifiCationParams) {
      updateErrorMessage('');

      const response = await dataVerifySubAccountMfa(currentVerifiCationParams);

      return {
        verifyCode: response.ivToken,
        // 将 VMFA/U2F/SMS/EMAIL 转化为 ga/sms/email
        verifyType: convertToResolveDataVerifyType(currentVerifiCationParams)
      };
    }
  }

  updateErrorMessage(intl('message:invalid:sub:validator'));

  return null;
}