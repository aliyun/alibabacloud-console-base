import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic
} from '../const';

import {
  ISlsCommonProps
} from './_sls_type';

interface ISkipBindMfaProps extends ISlsCommonProps {}

export default function slsSkipBindMfa(skipBindMfaProps: ISkipBindMfaProps): void {
  sls(ESlsTopic.SKIP_BIND_MFA, skipBindMfaProps);
}