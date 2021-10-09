import {
  ERROR_DETAILS_MIX
} from '../const';

import generateRequestId from './generate-request-id';

export default function createError(o: Record<string, unknown>, plain?: boolean): Error | Record<string, unknown> {
  const err: Record<string, unknown> = {
    requestId: generateRequestId(),
    ...o
  };
  
  err.details = {
    ...ERROR_DETAILS_MIX,
    ...(err.details as Record<string, unknown>)
  };

  if (plain) {
    return err;
  }
  
  const error = new Error();
  
  Object.keys(err).forEach(k => {
    (error as any)[k] = err[k]; // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  
  if (!error.name) {
    error.name = 'CreatedTestError';
  }
  
  return error;
}