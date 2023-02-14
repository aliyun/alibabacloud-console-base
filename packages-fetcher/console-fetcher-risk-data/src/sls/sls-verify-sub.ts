import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubVerifyType,
  ESubVerificationDeviceType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsAuthMfaProps extends ISlsCommonProps {
  type: string | ESubVerifyType; // 子账号验证类型（一期只有 mfa，后续会有 sms & email）
  value?: string | ESubVerificationDeviceType; // 验证详情（一期只有 mfa，对应详情是 vmfa / u2f）
}

export default function slsVerifySub(slsProps: ISlsAuthMfaProps): void {
  sls(ESlsTopic.SUB_VERIFY, slsProps);
}