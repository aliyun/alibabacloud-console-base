import {
  TDataTokenVerify,
  IResponseTokenVerify
} from '../../types';

export default function transferTokenVerifyResponseToData(response: IResponseTokenVerify): TDataTokenVerify {
  return {
    ivToken: response.IvToken || 'EMPTY_IV_TOKEN'
  };
}