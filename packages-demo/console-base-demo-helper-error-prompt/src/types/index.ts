import {
  ReactElement
} from 'react';

export interface IErrorDetails {
  url?: string;
  method?: string;
  params?: string | Record<string, unknown> | null;
  body?: string | Record<string, unknown> | null;
  [k: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type TErrorArg = undefined | null | string | ReactElement | Error | Record<string, unknown>;

export interface IProps {
  onPrompt(errors: TErrorArg[]): void;
}
