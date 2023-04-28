import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsSendCodeOldProps extends ISlsCommonProps {
  codeType: string;
  sendCodeMethod: string;
  sendCodeUrl: string;
  verifyType: string;
}

export default function slsSendCodeOld(slsProps: ISlsSendCodeOldProps): void {
  sls(ESlsTopic.SEND_CODE_OLD, slsProps);
}