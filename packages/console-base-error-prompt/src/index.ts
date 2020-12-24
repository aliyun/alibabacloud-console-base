import {
  TErrorPromptArg as ErrorPromptArg,
  IErrorPromptExtra as ErrorPromptExtra,
  IFnErrorPromptExtra as ErrorPromptExtraFn,
  IErrorDetailedInfo as ErrorDetailedInfo,
  IErrorWithDetails as ErrorWithDetails
} from './types';
import errorPrompt from './error-prompt';
import convertToErrorDetailedInfo from './util/convert-to-error-detailed-info';

export default errorPrompt;

export {
  convertToErrorDetailedInfo
};

export type {
  ErrorPromptArg,
  ErrorPromptExtra,
  ErrorPromptExtraFn,
  ErrorDetailedInfo,
  ErrorWithDetails
};
