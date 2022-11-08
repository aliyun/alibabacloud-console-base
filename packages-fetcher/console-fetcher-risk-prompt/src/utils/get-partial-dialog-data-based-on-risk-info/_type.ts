import {
  IDialogData
} from '../../types';

export type TAuthMfaDialogData = Pick<IDialogData, 'dialogType' | 'subAccountIdentityServiceData' | 'newMainAccountRiskInfo' | 'oldMainOrMpkRiskInfo' | 'errorMessage'>