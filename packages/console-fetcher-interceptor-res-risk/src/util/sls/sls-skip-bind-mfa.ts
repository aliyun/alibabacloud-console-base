import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../../const';

import {
  ISlsCommon
} from './_type';

interface IProps extends ISlsCommon {
  accountId: string;
}

export default function slsSkipBindMfa(skipBindMfaProps: IProps): void {
  sls(ESlsTopic.SKIP_BIND_MFA, skipBindMfaProps);
}

