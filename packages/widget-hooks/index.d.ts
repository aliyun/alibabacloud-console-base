/// <reference types="react" />

import {
  ReactElement
} from 'react';

interface IConsoleConfig {
  features: {
    [k: string]: {
      status: boolean;
      attribute?: {
        regions?: string[];
      };
    };
  };
  links: {
    [k: string]: string;
  };
}

export declare function useConsoleConfig(): IConsoleConfig; // 基本上不要用
export declare function useConsoleConfig<T = void>(key: string): T;

declare function intl <T = string>(key: string, values?: {
  [k: string]: string;
}): T;

declare namespace intl {
  function set(basic?: {
    messages?: {
      [k: string]: string;
    };
  }, extra?: {
    determineLocale?: {
      cookie: string;
    };
  }): void;
  function setLocale(locale: string): void;
  function setMessages(messages: {
    [k: string]: string;
  }): void;
  function getLocale(): string;
  function getMessages(): {
    [k: string]: string;
  };
  function message<T = string>(key: string, values?: {
    [k: string]: string;
  }): T;
  function number(value: number, options?: Intl.NumberFormatOptions): string;
  function date(date: Date | number | string, options?: 'date' | 'time' | 'dateTime' | 'dateTimeWithTimeZone' | Intl.DateTimeFormatOptions): string;
  function html(key: string, values?: {
    [k: string]: string;
  }): ReactElement;
}

export declare function useIntl(): typeof intl;

export declare function useChannelLink(id: string, values?: {
  [k: string]: string;
}): string;

export declare function useFeature(
  id: string,
  activeRegionId?: string,
  determinator?: (feature: {
    status: boolean;
    regions?: string[]
  }) => boolean
)

export declare function useGlobalState<T>(): T;
export declare function useGlobalState<T = string>(stateName: string): [T, (state: T) => void];

export declare function useRefresher(id: string): number;
