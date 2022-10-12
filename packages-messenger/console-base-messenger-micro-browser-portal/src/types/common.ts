/**
 * 弱冗余警告，和 MicroBrowser 中的类型定义冗余
 */
export interface IMicroBrowserPortalSizeConfig {
  widthMin?: number;
  widthMax?: number;
  widthDefault?: number;
  widthMinPinned?: number;
  widthMaxPinned?: number;
  widthDefaultPinned?: number;
  heightMin?: number;
  heightMax?: number;
  heightDefault?: number;
}

export interface IMicroBrowserPortalUpdateInfo {
  title?: string;
  sizeConfig?: IMicroBrowserPortalSizeConfig;
}