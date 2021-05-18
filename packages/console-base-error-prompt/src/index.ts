export { default } from './error-prompt';

export { default as convertToErrorDetailedInfo } from './util/convert-to-error-detailed-info';

export type {
  TErrorPromptArg as ErrorPromptArg,
  IErrorPromptExtra as ErrorPromptExtra,
  IFnErrorPromptExtra as ErrorPromptExtraFn,
  IErrorDetailedInfo as ErrorDetailedInfo,
  IErrorWithDetails as ErrorWithDetails
} from './types';
