import {
  ReactElement
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

export interface ISidePanelItemProps extends Omit<ButtonProps, 'label' | 'size' | 'theme' | 'iconLeft' | 'iconRight'> {
  /**
   * 默认用于 tooltip，也是按钮 aria-label 属性
   */
  title: string;
  /**
   * 图标，如果是组件则直接用，当它是字符串的时候，会智能判断
   * 1. 如果是 svg 则渲染成 svg
   * 2. 如果是 URL，则认为是图片（请用 png）
   * 对 svg 和 img 这里都有大小约束，请尽可能用正方形
   */
  icon: string | ReactElement;
  /**
   * 徽标，数字展示数字，true 展示小红点
   */
  unread?: number | boolean;
  /**
   * 当需要复杂的 tooltip 时，可以用这个 prop 
   */
  tooltip?: string | ReactElement;
  /**
   * Tooltip 与按钮的上下对齐方式，默认为 middle
   */
  tooltipAlign?: 'top' | 'middle' | 'bottom';
  /**
   * 设置 active 使当前工具处于 active 状态，并使用此回调受控
   */
  onActiveChange?(active: boolean): void;
}

export interface ISidePanelItemPropsWithKey extends ISidePanelItemProps {
  key: string;
}