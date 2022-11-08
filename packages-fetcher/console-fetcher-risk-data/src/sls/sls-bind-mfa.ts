import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubMfaDeviceType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsBindMfaProps extends ISlsCommonProps {
  value?: string | ESubMfaDeviceType; // 用户绑定的 MFA 设备类型
}

export default function slsBindMfa(slsProps: ISlsBindMfaProps): void {
  sls(ESlsTopic.SUB_BIND_MFA, slsProps);
}