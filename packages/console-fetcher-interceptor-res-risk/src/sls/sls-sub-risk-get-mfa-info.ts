import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends ISlsCommonProps {
  url: string;
  accountId: string;
  value: 'bind' | 'auth';
  getMfaInfoAfterBindSuccess?: boolean; // 是否是绑定 MFA 成功，但重新请求被风控的接口报错的情况。此时需要重新请求 MFA 信息并且走验证的逻辑
}

export default function slsSubRiskGetMfaInfo(getMfaAuthInfoProps: IProps): void {
  sls(ESlsTopic.SUB_GET_MFA_INFO, {
    getMfaInfoAfterBindSuccess: false,
    ...getMfaAuthInfoProps
  });
}