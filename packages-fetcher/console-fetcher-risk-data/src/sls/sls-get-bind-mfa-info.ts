import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubVerificationDeviceType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsGetBindMfaInfoProps extends ISlsCommonProps {
  value: string | ESubVerificationDeviceType; // 用户绑定的 MFA 设备类型
}

export default function slsGetBindMfaInfo(slsProps: ISlsGetBindMfaInfoProps): void {
  sls(ESlsTopic.SUB_GET_BIND_MFA_INFO, slsProps);
}