import {
  ReactElement
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';
import {
  EasyIconValue
} from '@alicloud/console-base-rc-easy-icon';

export interface ISidePanelItemProps extends Omit<ButtonProps, 'label' | 'size' | 'theme' | 'iconLeft' | 'iconRight' | 'onMouseEnter' | 'onMouseLeave'> {
  /**
   * 默认用于 tooltip，也是按钮 aria-label 属性
   */
  title: string;
  /**
   * 按下状态的 title，不填则 fallback 到 title
   */
  titleActive?: string;
  /**
   * 图标（请尽可能用正方形），如果是组件则直接用，当它是字符串的时候，会智能判断
   */
  icon: EasyIconValue;
  /**
   * 鼠标 hover 时的图标，不填则 fallback 到 icon
   */
  iconHovered?: EasyIconValue;
  /**
   * 按下状态的图标，不填则 fallback 到 icon
   */
  iconActive?: EasyIconValue;
  /**
   * 按下状态时 hover 的图标，不填则 fallback 到 iconActive
   */
  iconActiveHovered?: EasyIconValue;
  /**
   * 当需要复杂的 tooltip 时，可以用这个 prop 
   */
  tooltip?: string | ReactElement;
  /**
   * 按下状态的 tooltip，不填则 fallback 到 tooltip
   */
  tooltipActive?: string | ReactElement;
  /**
   * 当 Tooltip 没有条件用 JSX，必须是字符串但又需要展示成 HTML 时，可以用 `tooltipAsHtml: true`
   */
  tooltipAsHtml?: boolean;
  /**
   * Tooltip 与按钮的上下对齐方式，默认为 middle
   */
  tooltipAlign?: 'top' | 'middle' | 'bottom';
  /**
   * Tooltip 默认是否展示，注意避免竞争，并注意降噪
   */
  tooltipDefaultVisible?: boolean;
  /**
   * 右上角徽标，数字展示数字，true 展示小红点
   */
  unread?: number | boolean;
  /**
   * 右上角 NEW 或 HOT，优先级低于 unread
   */
  mark?: 'NEW' | 'HOT';
  onMouseEnter?(): void;
  onMouseLeave?(): void;
  /**
   * 设置 active 使当前工具处于 active 状态，并使用此回调受控
   */
  onActiveChange?(active: boolean): void;
}

export interface ISidePanelItemPropsWithKey extends ISidePanelItemProps {
  key: string;
}
