export { default } from './error-prompt';

export { default as convertToErrorDetailedInfo } from './util/convert-to-error-detailed-info';

export type {
  TErrorPromptArg as ErrorPromptArg,
  IErrorPromptExtra as ErrorPromptExtra,
  IFnErrorPromptExtra as ErrorPromptExtraFn,
  IErrorPlain as ErrorDetailedInfo,
  IError as ErrorWithDetails
} from './types';
