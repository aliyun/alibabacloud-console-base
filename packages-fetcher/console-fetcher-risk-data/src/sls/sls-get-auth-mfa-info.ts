import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubVerificationDeviceType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsGetAuthMfaInfoProps extends ISlsCommonProps {
  value?: string | ESubVerificationDeviceType; // 用户绑定的 MFA 设备类型
}

export default function slsGetAuthMfaInfo(slsProps: ISlsGetAuthMfaInfoProps): void {
  sls(ESlsTopic.SUB_GET_AUTH_MFA_INFO, slsProps);
}