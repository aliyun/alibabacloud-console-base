import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../../const';

interface IProps {
  url: string;
  accountId: string;
  slsResultType: ESlsResultType;
  getMfaInfoScene: 'bind' | 'auth';
  errorCode?: string;
  errorMessage?: string;
  fromBindMFASuccess?: boolean; // 是否是绑定 U2F 成功，但重新请求被风控的接口报错的情况
}

export default function slsSubRiskGetMfaAInfo(getMfaAuthInfoProps: IProps): void {
  sls(ESlsTopic.SUB_GET_AUTH_INFO, {
    fromBindU2FSuccess: false,
    ...getMfaAuthInfoProps
  });
}