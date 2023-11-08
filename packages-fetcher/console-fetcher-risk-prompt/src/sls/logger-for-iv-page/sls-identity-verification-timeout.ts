import logger from './logger';

interface IProps {
  isMpk?: boolean;
  accountType?: string;
  verifyUrl: string;
}

export function slsIdentityVerificationTimeout(p: IProps): void {
  logger('iv_timeout', p);
}