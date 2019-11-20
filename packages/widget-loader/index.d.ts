/// <reference types="react" />

import {
  ComponentType,
  SuspenseProps
} from 'react';

// FIXME 非 OneConsole 的场景，这里每一个都要设置...
export interface IWidgetUtilsConsole {
  getLang?: () => string;
  getLocale?: () => string;
  getChannel?: () => string;
  getCurrentUid?: () => string;
  getParentUid?: () => string;
  getAccountType?: () => string;
  getRegionName?: (regionId: string) => string;
  getZoneName?: (zoneId: string) => string;
  useCORS?: () => boolean;
}

export interface IDependencies {
  // OneConsole 下有统一的设值，但非 OneConsole（比如 console-base）下就必须全部设置...
  // 否则会抛错 抛错位置在 `packages/widget-loader/src/utils/wind/checkConsoleUtils.js`
  '@alicloud/widget-utils-console'?: IWidgetUtilsConsole;
  [k: string]: any;
}

export interface ICreateOptions {
  initiator?: string;
  dependencies?: IDependencies;
  lazy?: boolean;
  windRuntime?: {
    preload?: boolean;
    runtimeVersion?: string;
    messageVersion?: string;
  };
  // consoleConfig?: IWidgetUtilsConsole; // deprecated 不 export
  suspense?: SuspenseProps;
}

export interface IWidgetOptions {
  id: string;
  version: string;
}

export interface ILoadOptions {
  lazy: boolean;
  suspense: SuspenseProps;
}

export interface IFnLoader {
  <T = {}>(widgetOptions: IWidgetOptions, loadOptions?: ILoadOptions): ComponentType<T>;
}

export default function (opts?: ICreateOptions): IFnLoader;
