import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsAuthMfaProps extends ISlsCommonProps {
  type: string; // 子账号验证类型
  value?: string; // 验证详情
}

export default function slsVerifySub(slsProps: ISlsAuthMfaProps): void {
  sls(ESlsTopic.SUB_VERIFY, slsProps);
}