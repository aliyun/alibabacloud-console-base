import {
  Z_INDEX
} from '@alicloud/console-base-theme';

export const WIDTH_DEFAULT = 420;
export const WIDTH_DEFAULT_PINNED = 320;
export const WIDTH_DEFAULT_MINIMIZED = 40;
export const HEIGHT_DEFAULT = 680;
export const HEIGNT_DEFAULT_MINIMIZED = 40;
export const POSITION_R_INITIAL = 60; // 初始窗口右边距
export const POSITION_B_INITIAL = 60; // 初始窗口底边距

// 默认值，可通过 props 自定义
export const DEFAULT_VALUES = {
  MIN_WIDTH: 240,
  MIN_HEIGHT: 400,
  MAX_WIDTH: 10000,
  MAX_HEIGHT: 20000,
  MAX_WIDTH_WHEN_PINNED: 800,
  MIN_WIDTH_PINNED: 528,
  MAX_WIDTH_PINNED: 20000,
  Z_INDEX: Z_INDEX.MICRO_BROWSER
};

export const HEIGHT_TOOLBAR = 16;

export const BGC_TOOLBAR = '#000';

/**
 * RND 钩子
 */
export const CLASS_J_RND_HANDLE = 'J_console_base_rc_one_modal_rnd_handle';
export const CLASS_J_RND_CANCEL = 'J_console_base_rc_one_modal_rnd_cancel';