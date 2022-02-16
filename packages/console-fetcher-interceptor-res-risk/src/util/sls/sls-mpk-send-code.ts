import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends ISlsCommonProps {
  isMpk: boolean;
  codeType: string; // 风控类型
  verifyType: string; // 验证类型
  mpkIsDowngrade: boolean;
  sendCodeRequestId?: string;
}

export default function slsMpkSendCode(mpkSendCodeProps: IProps): void {
  sls(ESlsTopic.MPK_SEND_CODE, mpkSendCodeProps);
}