import {
  TParamsSkipBindMfa,
  IPayloadSkipBindMfa
} from '../../types';
import {
  TICKET_TYPE
} from '../../const';

export default function transferSkipBindMfaParamsToPayload(params: TParamsSkipBindMfa): IPayloadSkipBindMfa {
  return {
    Ext: params.ext,
    TicketType: TICKET_TYPE,
    AccountId: params.accountId
  };
}