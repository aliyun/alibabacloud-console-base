import {
  ESubVerificationDeviceType
} from '../const';

import {
  IResponseTokenVerify,
  IResponseGetU2fInfoToAuth,
  IResponseGetVmfaInfoToAuth,
  IResponseGetU2fWebAuthnInfoToAuth,
  IResponseEmailValidator,
  IResponseSmsValidator
} from './response';
import {
  TUnCapitalizeKeys
} from './util';

export type TDataTokenVerify = TUnCapitalizeKeys<IResponseTokenVerify>;

export type TDataGetVmfaInfoToAuth = TUnCapitalizeKeys<IResponseGetVmfaInfoToAuth>;

export type TDataGetU2fInfoToAuth = TUnCapitalizeKeys<IResponseGetU2fInfoToAuth>;

export type TDataGetU2fWebAuthnInfoToAuth = TUnCapitalizeKeys<IResponseGetU2fWebAuthnInfoToAuth>;

export type TDataGetMfaInfoToAuth = TDataGetVmfaInfoToAuth | TDataGetU2fInfoToAuth | TDataGetU2fWebAuthnInfoToAuth;

// /identity/getMfaInfoToAuthV2
export type TDataGetSmsInfoToAuth = TUnCapitalizeKeys<IResponseSmsValidator> & {
  areaCode: string | number;
  deviceType: ESubVerificationDeviceType.SMS;
  targetUserPrincipalName: string;
}
export type TDataGetEmailInfoToAuth = TUnCapitalizeKeys<IResponseEmailValidator> & {
  deviceType: ESubVerificationDeviceType.EMAIL;
  targetUserPrincipalName: string;
}
export type TDataVerificationValidator = TDataGetSmsInfoToAuth | TDataGetEmailInfoToAuth | TDataGetVmfaInfoToAuth | TDataGetU2fInfoToAuth | TDataGetU2fWebAuthnInfoToAuth;

export type TDataGetVerificationInfoToAuth = TDataVerificationValidator[];