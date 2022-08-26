import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../enum';

import {
  ISlsCommonProps
} from './_type';

interface IProps extends ISlsCommonProps {
  accountId: string;
}

export default function slsSkipBindMfa(skipBindMfaProps: IProps): void {
  sls(ESlsTopic.SKIP_BIND_MFA, skipBindMfaProps);
}