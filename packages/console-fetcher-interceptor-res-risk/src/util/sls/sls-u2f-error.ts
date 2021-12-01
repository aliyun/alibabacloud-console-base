import {
  ErrorCodes
} from '@alicloud/u2f-api';
import sls from '@alicloud/console-base-log-sls';

import {
  EStep,
  ESlsTopic
} from '../../const';

interface IProps {
  accountId: string;
  status: EStep.U2F_AUTH | EStep.U2F_BIND;
  u2fErrorCode?: ErrorCodes;
  errorMessage?: string;
  u2fNotSupported?: boolean;
}

export default function slsU2FError({
  errorMessage,
  u2fNotSupported,
  ...restProps
}: IProps): void {
  sls(ESlsTopic.U2F_ERROR, {
    errorMessage: u2fNotSupported ? 'u2f not supported' : errorMessage,
    ...restProps
  });
}