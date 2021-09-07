import {
  BackendError,
  IErrorU2f
} from '../types';
import {
  EErrorCode,
  ErrorNames
} from '../const';

export default function makeError(msg: string, err: BackendError): Error {
  const code = err?.errorCode ?? EErrorCode.OTHER_ERROR;
  const type = ErrorNames[code];
  const error: IErrorU2f = new Error(msg) as IErrorU2f;
  
  error.metaData = {
    type,
    code
  };
  
  return error;
}
