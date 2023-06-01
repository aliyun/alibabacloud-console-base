import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../const';
import {
  TParamsVerifyMpk
} from '../types';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISlsVerifyMpk extends ISlsCommonProps, Pick<TParamsVerifyMpk, 'verifyUniqId' | 'authCode' | 'verifyType'> {}

export default function slsVerifyMpk(slsProps: ISlsVerifyMpk): void {
  sls(ESlsTopic.MPK_VERIFY, slsProps);
}