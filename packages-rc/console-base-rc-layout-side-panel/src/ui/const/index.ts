import {
  SIZE
} from '@alicloud/console-base-theme';

export const SPACING_X = 10; // 圆形按钮与条状 Panel 的水平间隙
export const SPACING_Y = 6;
export const SIZE_BUTTON = SIZE.WIDTH_SIDE_PANEL - SPACING_X * 2;
export const SIZE_BUTTON_ICON = SIZE_BUTTON * 0.5;
export const SIZE_BUTTON_WRAP_WIDTH = SIZE.WIDTH_SIDE_PANEL;
export const SIZE_BUTTON_WRAP_HEIGHT = SIZE_BUTTON + 2 * SPACING_Y;

export const DATA_KEY_SIDE_PANEL_ITEM = 'data-console-base-side-panel-item';

// 给应用一些属性钩子，不需要值（所有 ConsoleBase 下的组件，钩子属性的规范是 `data-j-[组件名]-xx`）
// 不要随意改
export const DATA_KEY_J = 'data-j-side-panel';
