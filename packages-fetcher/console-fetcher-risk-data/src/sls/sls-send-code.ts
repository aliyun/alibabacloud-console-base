import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  EAccountType
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsSendCodeProps extends ISlsCommonProps {
  verifyType: string;
  verifyDetail?: string;
  accountType: EAccountType;
}

export default function slsSendCode(slsProps: ISlsSendCodeProps): void {
  sls(ESlsTopic.SEND_CODE, slsProps);
}