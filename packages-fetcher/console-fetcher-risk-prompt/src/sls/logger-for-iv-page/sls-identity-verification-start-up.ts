import logger from './logger';

interface IProps {
  isMpk?: boolean;
  accountType?: string;
  verifyUrl: string;
}

export function slsIdentityVerificationStartup(p: IProps): void {
  logger('iv_startup', p);
}