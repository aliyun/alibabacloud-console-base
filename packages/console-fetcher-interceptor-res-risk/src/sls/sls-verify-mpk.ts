import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';
import {
  IMpkRiskInfo
} from '../types';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends Omit<IMpkRiskInfo, 'risk' | 'type'>, ISlsCommonProps {
  authCode: string;
  sendCodeRequestId: string;
  errorMessage?: string;
  errorCode?: string;
}

export default function slsVerifyMpk(verifyMpkProps: IProps): void {
  sls(ESlsTopic.MPK_VERIFY, verifyMpkProps);
}