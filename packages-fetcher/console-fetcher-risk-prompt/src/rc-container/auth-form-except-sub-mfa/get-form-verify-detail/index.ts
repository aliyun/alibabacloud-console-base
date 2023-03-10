import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  TAuthFormProps
} from '../../../types';
import {
  ERiskType
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

  const stringifiedVerifyDetail = String(verifyDetail) || DEFAULT_VERIFY_DETAIL;

  try {
    if (stringifiedVerifyDetail !== DEFAULT_VERIFY_DETAIL && riskType === ERiskType.NEW_SUB) {
      if (verifyType === ESubVerificationDeviceType.SMS) {
        return getFuzzyPhoneNumber(stringifiedVerifyDetail);
      }

      if (verifyType === ESubVerificationDeviceType.EMAIL) {
        return getFuzzyEmailAddress(stringifiedVerifyDetail);
      }
    }

    return stringifiedVerifyDetail;
  } catch (error) {
    return stringifiedVerifyDetail;
  }
}