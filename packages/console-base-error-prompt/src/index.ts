import {
  TErrorPromptArg as ErrorPromptArg,
  IErrorPromptArgExtra as ErrorPromptArgExtra,
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
  ErrorPromptArgExtra,
  ErrorDetailedInfo,
  ErrorWithDetails
};
