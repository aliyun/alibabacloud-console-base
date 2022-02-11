import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';
import {
  IMpkRiskInfo
} from '../../types';

import {
  ISlsCommon
} from './_type';

interface IProps extends Omit<IMpkRiskInfo, 'risk' | 'type'>, ISlsCommon {
  verifyCode: string;
  sendCodeRequestId: string;
  errorMessage?: string;
  errorCode?: string;
}

export default function slsVerifyMpk(verifyMpkProps: IProps): void {
  sls(ESlsTopic.MPK_VERIFY, verifyMpkProps);
}