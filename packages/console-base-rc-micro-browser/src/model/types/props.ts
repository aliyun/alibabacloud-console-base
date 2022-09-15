import {
  EMicroBrowserMode
} from '../enum';

import {
  ITabsProps
} from './common';

export interface IModelProps {
  // 内容
  tabs: ITabsProps;
  affix?: string | null | Element;
  // 长相
  mode?: EMicroBrowserMode;
  visible?: boolean;
  zIndex?: number;
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
  // 行为
  minimizable?: boolean;
  pinnable?: boolean; // 是否能在靠右模式下进一步挤压 body（给 padding-right）
  // 回调
  onModeChange?(mode: EMicroBrowserMode): void;
  onClose?(): void;
}
