export { default } from './error-prompt';
export { ErrorPrompt } from './rc';

export * from './helper';

export type {
  TErrorPromptArg as ErrorPromptArg,
  TErrorPromptArgExtra as ErrorPromptArgExtra,
  IError as ErrorWithDetails,
  IErrorPlain as ErrorDetailedInfo,
  IErrorPromptExtra as ErrorPromptExtra,
  IFnErrorPromptExtra as ErrorPromptExtraFn
} from './types';
