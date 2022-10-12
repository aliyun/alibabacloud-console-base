import sls from '@alicloud/console-base-log-sls';

import {
  EStep,
  ESlsTopic
} from '../enum';

interface IProps {
  accountId: string;
  status: EStep.U2F_AUTH | EStep.U2F_BIND;
  errorMessage?: string;
  u2fNotSupported?: boolean;
}

export default function slsU2FError(u2fErrorProps: IProps): void {
  sls(ESlsTopic.U2F_ERROR, u2fErrorProps);
}