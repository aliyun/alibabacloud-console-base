import {
  TParamsSendCode,
  IPayloadSendCode
} from '../../types';

export default function transferSendCodeParamsToPayload(params: TParamsSendCode): IPayloadSendCode {
  return {
    Ext: params.ext,
    AccountId: params.accountId,
    VerifyType: params.verifyType,
    AccountType: params.accountType
  };
}