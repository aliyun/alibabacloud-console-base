import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubMfaDeviceType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsGetMfaInfoToBindProps extends ISlsCommonProps {
  value: string | ESubMfaDeviceType; // 用户绑定的 MFA 设备类型
}

export default function slsGetMfaInfoToBind(slsProps: ISlsGetMfaInfoToBindProps): void {
  sls(ESlsTopic.SUB_GET_BIND_MFA_INFO, slsProps);
}