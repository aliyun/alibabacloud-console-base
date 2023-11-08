import logger from './logger';

interface IProps {
  isMpk?: boolean;
  accountType?: string;
  verifyType: string;
  isValidVerifyCode: boolean;
}

export function slsIdentityVerificationResultReceived(p: IProps): void {
  logger('iv_result_received', p);
}