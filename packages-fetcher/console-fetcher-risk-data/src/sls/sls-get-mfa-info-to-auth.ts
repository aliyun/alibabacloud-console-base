import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESubMfaDeviceType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsGetMfaInfoToAuthProps extends ISlsCommonProps {
  value?: string | ESubMfaDeviceType; // 用户绑定的 MFA 设备类型
}

export default function slsGetMfaInfoToAuth(slsProps: ISlsGetMfaInfoToAuthProps): void {
  sls(ESlsTopic.SUB_GET_AUTH_MFA_INFO, slsProps);
}