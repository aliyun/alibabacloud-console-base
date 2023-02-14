import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsSendCodeProps extends ISlsCommonProps {
  verifyType: string;
  verifyDetail?: string;
}

export default function slsSendCode(slsProps: ISlsSendCodeProps): void {
  sls(ESlsTopic.SUB_VERIFY, slsProps);
}