export { default } from './error-prompt';
export { default as ErrorPrompt } from './rc/error-prompt';

export * from './helper';

export type {
  TErrorPromptArg as ErrorPromptArg,
  TErrorPromptArgExtra as ErrorPromptArgExtra,
  IError as ErrorWithDetails,
  IErrorPlain as ErrorDetailedInfo,
  IErrorPromptExtra as ErrorPromptExtra,
  IFnErrorPromptExtra as ErrorPromptExtraFn
} from './types';
