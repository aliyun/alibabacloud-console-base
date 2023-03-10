import {
  type DataGetSmsInfoToAuth,
  type DataGetEmailInfoToAuth,
  dataGetVerificationInfoToAuth,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ICommonRiskInfo,
  TVerificationOrBindValidator
} from '../../../types';
import {
  EConvertedVerifyType
} from '../../../enum';

import getMfaBoundStatus from './get-mfa-bound-status';

interface IProps {
  accountId: string;
  subRiskValidators: Omit<ICommonRiskInfo, 'codeType'>[];
}

interface IGetVerificationValidatorsResult {
  targetUserPrincipalName: string;
  verificationValidators: TVerificationOrBindValidator[];
}

export default async function getVerificationValidators({
  accountId,
  subRiskValidators
}: IProps): Promise<IGetVerificationValidatorsResult> {
  const validatorsIncludesMfaToAuth = subRiskValidators.find(o => o.convertedVerifyType === EConvertedVerifyType.MFA && getMfaBoundStatus(o.verifyDetail));

  // 只有在 Validators 存在 MFA 时，才去调用 GetMfaInfoToAuthV2 接口
  if (validatorsIncludesMfaToAuth) {
    const response = await dataGetVerificationInfoToAuth({
      accountId
    });

    const targetUserPrincipalName = ((): string => {
      if (!response.length) {
        return '';
      }

      return response[0].targetUserPrincipalName;
    })();

    return {
      targetUserPrincipalName,
      verificationValidators: response
    };
  }

  const verificationValidators = subRiskValidators.map<TVerificationOrBindValidator | null>(o => {
    if (o.convertedVerifyType === EConvertedVerifyType.SMS) {
      const [areaCode, phoneNumber] = String(o.verifyDetail).split('-');

      return {
        areaCode,
        phoneNumber: phoneNumber || '',
        targetUserPrincipalName: '',
        deviceType: ESubVerificationDeviceType.SMS
      } as DataGetSmsInfoToAuth;
    }

    if (o.convertedVerifyType === EConvertedVerifyType.EMAIL) {
      return {
        emailAddress: String(o.verifyDetail),
        targetUserPrincipalName: '',
        deviceType: ESubVerificationDeviceType.EMAIL
      } as DataGetEmailInfoToAuth;
    }

    return null;
  });

  return {
    targetUserPrincipalName: '',
    verificationValidators: verificationValidators.filter(o => Boolean(o)) as TVerificationOrBindValidator[]
  };
}