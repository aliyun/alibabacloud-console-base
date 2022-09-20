import {
  IMicroBrowserPortalSizeConfig,
  IMicroBrowserPortalUpdateInfo
} from './common';

// 保证 payload 类型仅在包内部需要关心

export interface IPayloadMicroBrowserPortalCreated { // 注意这里 Created 是过去式，表示已经创建完成后的事件
  portalKey: string;
  title: string;
  sizeConfig?: IMicroBrowserPortalSizeConfig;
}

export interface IPayloadMicroBrowserPortalUpdate extends IMicroBrowserPortalUpdateInfo { // 这里的 Update 是常态，表示主动发生的动作
  portalKey: string;
}

export interface IPayloadMicroBrowserPortalToggleVisible {
  portalKey: string;
  visible: boolean;
}