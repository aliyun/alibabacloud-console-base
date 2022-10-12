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

/**
 * props 中跟 RND 大小有关的配置
 */
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

/**
 * state 中决定 RND 最终大小和位置的相关数据
 */
export interface ISizeAndPosition {
  /**
   * 当 ≤ 0，fallback 到 props.widthDefault
   */
  width: number;
  /**
   * 当 ≤ 0，fallback 到 props.heightDefault
   */
  height: number;
  /**
   * 靠右模式下只能可以调整宽度，当 ≤ 0，fallback 到 props.widthPinnedDefault
   */
  widthPinned: number;
  /**
   * RND 右下角 x
   */
  /**
   * 距浏览器可视区域右侧距离
   */
  right: number;
  /**
   * 距浏览器可视区域底部距离
   */
  bottom: number;
}

export interface ITabsItemProps extends TabProps {}

export interface ITabsProps extends Omit<TabsProps, 'classNameForTabBar' | 'classNameForTabItem' | 'classNameForTabScroller'> {}

export interface IPayloadDrag extends IPayloadRndDragResize {}

export interface IPayloadResize extends IPayloadRndDragResize {
  mode: EMicroBrowserMode; // 当前所处模式
  stopped?: boolean;
}