import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  TAuthFormProps
} from '../../../types';
import {
  ERiskType,
  EConvertedVerifyType
} from '../../../enum';

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
    // 旧版主账号风控验证类型为 MFA 时，verifyDetail 为空字符串而不是 '-'
    if (riskType === ERiskType.OLD_MAIN && props.convertedVerifyType === EConvertedVerifyType.MFA) {
      return '';
    }

    return String(verifyDetail) || DEFAULT_VERIFY_DETAIL;
  })();

  try {
    if (safeStringifiedVerifyDetail !== DEFAULT_VERIFY_DETAIL && riskType === ERiskType.NEW_SUB) {
      if (verifyType === ESubVerificationDeviceType.SMS) {
        return getFuzzyPhoneNumber(safeStringifiedVerifyDetail);
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