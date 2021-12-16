import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../../const';

interface IProps {
  accountId: string;
  slsResultType: ESlsResultType;
  errorCode?: string;
  errorMessage?: string;
  fromBindU2FSuccess?: boolean; // 是否是绑定 U2F 成功，但重新请求被风控的接口报错的情况
}

export default function slsRiskInvalid(getMfaAuthInfoProps: IProps): void {
  sls(ESlsTopic.RISK_INVALID, {
    fromBindU2FSuccess: false,
    ...getMfaAuthInfoProps
  });
}