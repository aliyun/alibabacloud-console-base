import sls from '@alicloud/console-base-log-sls';

import {
  ESlsTopic,
  ESlsResultType
} from '../../const';

interface IProps {
  slsResultType: ESlsResultType;
  accountId: string;
  errorMessage?: string;
}

export default function slsSkipBindMfa({
  ...skipBindMfaProps
}: IProps): void {
  sls(ESlsTopic.SKIP_BIND_MFA, {
    ...skipBindMfaProps
  });
}

