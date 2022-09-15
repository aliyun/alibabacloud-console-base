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

export interface ITabsProps extends Omit<TabsProps, 'classNameForTabBar' | 'classNameForTabItem' | 'classNameForTabScroller' | 'width'> {}

export interface ITabsItemProps extends TabProps {}

export interface IPayloadDrag extends IPayloadRndDragResize {}

export interface IPayloadResize extends IPayloadRndDragResize {
  mode: EMicroBrowserMode; // 当前所处模式
  stopped?: boolean;
}