import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';

import {
  ISlsCommon
} from './_type';

interface IProps extends ISlsCommon {
  isMpk: boolean;
  useOldSendVerify: boolean;
  verifyType: string;
  codeType: string;
  sendCodeRequestId?: string;
}

export default function slsMpkSendCode(mpkSendCodeProps: IProps): void {
  sls(ESlsTopic.MPK_SEND_CODE, mpkSendCodeProps);
}