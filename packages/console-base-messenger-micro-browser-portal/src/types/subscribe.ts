import {
  MicroBrowserSizeConfig
} from '@alicloud/console-base-rc-micro-browser';

import {
  IMicroBrowserPortalUpdateInfo
} from './common';

export interface ISubscribeMicroBrowserPortalCreated {
  (portalKey: string, title: string, sizeConfig?: MicroBrowserSizeConfig): string;
}

export interface ISubscribeMicroBrowserPortalRemoved {
  (portalKey: string): void;
}

export interface ISubscribeMicroBrowserPortalToggleVisible {
  (portalKey: string, visible: boolean): void;
}

export interface ISubscribeMicroBrowserPortalUpdate {
  (portalKey: string, info: IMicroBrowserPortalUpdateInfo): void;
}