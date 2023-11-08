import {
  dataGetVerificationInfoToAuth,
  getSplittedPhoneNumber,
  type DataGetSmsInfoToAuth,
  type DataGetEmailInfoToAuth,
  type DataVerificationValidator
} from '@alicloud/console-fetcher-risk-data';

import {
  EConvertedVerifyType,
  ESubVerificationDeviceType
} from '../../../enum';
import {
  ICommonRiskInfo
} from '../../../types';

import getMfaBoundStatus from './get-mfa-bound-status';

interface IProps {
  accountId: string;
  subRiskValidators: Omit<ICommonRiskInfo, 'codeType'>[];
}

interface IGetVerificationValidatorsResult {
  targetUserPrincipalName: string;
  subValidators: DataVerificationValidator[];
}

export default async function getSubValidators({
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
      if (!response.length || !response[0]) {
        return '';
      }

      return response[0].targetUserPrincipalName;
    })();

    return {
      targetUserPrincipalName,
      subValidators: response
    };
  }

  // 如果 Validators 不存在 MFA，手机风控信息和邮箱风控信息都可以直接从 Validators 获取
  const verificationValidators = subRiskValidators.map<DataVerificationValidator | null>(o => {
    if (o.convertedVerifyType === EConvertedVerifyType.SMS) {
      const {
        areaCode, phoneNumber
      } = getSplittedPhoneNumber(o.verifyDetail);

      return {
        areaCode,
        phoneNumber,
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
  
  const nonNullFilter = (o: DataVerificationValidator | null): o is DataVerificationValidator => {
    return Boolean(o);
  };

  return {
    targetUserPrincipalName: '',
    subValidators: verificationValidators.filter(nonNullFilter)
  };
}
