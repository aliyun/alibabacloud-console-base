import {
  getSplittedPhoneNumber
} from '@alicloud/console-fetcher-risk-data';

import {
  ERiskType,
  EConvertedVerifyType,
  ESubVerificationDeviceType
} from '../../../enum';
import {
  TAuthFormProps
} from '../../../types';

import {
  getFuzzyEmailAddress,
  getFuzzyPhoneNumber
} from './get-fuzzy-detail';

const DEFAULT_VERIFY_DETAIL = '-';

/**
 * 旧版主账号或者 MPK 类型的风控详情 - 直接返回 verifyDetail
 * 子账号风控 MFA - 直接返回 verifyDetail
 * 子账号风控 Sms/Email - 需要对 verifyDetail 做模糊处理
 */
export default function getFormVerifyDetail(props: TAuthFormProps): string {
  const {
    riskType, verifyType, verifyDetail
  } = props;

  const safeStringifiedVerifyDetail = ((): string => {
    const isOldMainVmfaVerify = riskType === ERiskType.OLD_MAIN && props.convertedVerifyType === EConvertedVerifyType.MFA;
    const isMpkVmfaVerify = riskType === ERiskType.MPK && props.verifyType === ESubVerificationDeviceType.VMFA;

    // 旧版主账号/Mpk 风控验证类型为 Vmfa 时，verifyDetail 为空字符串而不是 '-'
    if (isOldMainVmfaVerify || isMpkVmfaVerify) {
      return '';
    }

    return String(verifyDetail) || DEFAULT_VERIFY_DETAIL;
  })();

  try {
    if (safeStringifiedVerifyDetail !== DEFAULT_VERIFY_DETAIL && riskType === ERiskType.NEW_SUB) {
      if (verifyType === ESubVerificationDeviceType.SMS) {
        // 子账号手机风控的 VerifyDetail 是 ${areaCode}-${phoneNumber}
        const {
          areaCode,
          phoneNumber
        } = getSplittedPhoneNumber(safeStringifiedVerifyDetail);

        return `${areaCode}-${getFuzzyPhoneNumber(phoneNumber)}`;
      }

      if (verifyType === ESubVerificationDeviceType.EMAIL) {
        return getFuzzyEmailAddress(safeStringifiedVerifyDetail);
      }
    }

    return safeStringifiedVerifyDetail;
  } catch (error) {
    return safeStringifiedVerifyDetail;
  }
}
