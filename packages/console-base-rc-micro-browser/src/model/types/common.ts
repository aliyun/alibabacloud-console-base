import {
  TabsProps,
  TabProps
} from '@alicloud/console-base-rc-tabs';

import {
  EMicroBrowserMode
} from '../enum';

interface IPayloadRndDragResize {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ISizeConfig {
  /**
   * FREE 模式下，内容区的最小宽度
   */
  widthMin?: number;
  /**
   * FREE 模式下，最大宽度，不可大于视窗宽度
   */
  widthMax?: number;
  /**
   * FREE 模式下，默认宽度，当 state 中没有记录的宽度时
   */
  widthDefault?: number;
  /**
   * PIN 模式下，最小宽度
   */
  widthMinPinned?: number;
  /**
   * PIN 模式下，最大宽度，不可大于视窗宽度
   */
  widthMaxPinned?: number;
  /**
   * PIN 模式下，默认宽度，当 state 中没有记录的宽度时
   */
  widthDefaultPinned?: number;
  /**
   * FREE 模式下，内容区的最小高度（去除工具栏和 Tab）
   */
  heightMin?: number;
  /**
   * FREE 模式下，内容区的最大高度（去除工具栏和 Tab），不可大于视窗高度
   */
  heightMax?: number;
  /**
   * FREE 模式下，默认宽度，当 state 中没有记录的高度时
   */
  heightDefault?: number;
}

export interface ITabsProps extends Omit<TabsProps, 'classNameForTabBar' | 'classNameForTabItem' | 'classNameForTabScroller' | 'width'> {}

export interface ITabsItemProps extends TabProps {}

export interface IPayloadDrag extends IPayloadRndDragResize {}

export interface IPayloadResize extends IPayloadRndDragResize {
  mode: EMicroBrowserMode; // 当前所处模式
  stopped?: boolean;
}