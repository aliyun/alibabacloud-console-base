import {
  TParamsVerifyMpk,
  IPayloadVerifyMpk
} from '../../types';
import {
  TICKET_TYPE
} from '../../const';

export default function transferVerifyMpkParamsToPayload(params: TParamsVerifyMpk): IPayloadVerifyMpk {
  return {
    Ext: params.ext,
    IdType: params.idType,
    AuthCode: params.authCode,
    AccountId: params.accountId,
    VerifyType: params.verifyType,
    RiskRequestId: params.riskRequestId,
    TicketType: TICKET_TYPE
  };
}
