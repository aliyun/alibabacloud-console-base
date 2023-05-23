import {
  EDialogLockState
} from '../enum';

import {
  IDialogPropsMutable
} from './common';

/**
 * Dialog 的
 */
export interface IModelState<R = void, D extends object = Record<string, unknown>> {
  /**
   * Dialog 生命周期的唯一标识
   */
  id: string;
  domDialog: HTMLDivElement | null;
  domDialogContent: HTMLDivElement | null;
  /**
   * 需要通过它触发 CSS 动画
   */
  active: boolean;
  /**
   * 可以通过 lock 和 unlock 两个 API 来调整 Dialog 的状态，使其不会被任何方式关闭
   */
  locked: EDialogLockState;
  /**
   * 多个 dialog 的场景，底下的 dialog 需要被压在 backdrop 以下，小于等于 0 的情况下用 props 中的 z-index
   */
  zIndex: number;
  /**
   * 维系 Dialog 本体和内容组件之间的纽带
   */
  data: D;
  /**
   * 一般情况下，利用 data 已经够了，但是有的场景，内容和 Dialog 本地不在同一纬度下（相互之间不晓得），内容可以通过 update 与 Dialog 本体做交互
   */
  propsUpdate: IDialogPropsMutable<R, D>;
  /**
   * 需要根据当前窗口的高度对 Dialog 内容区域的最大高度进行调整
   */
  windowHeight: number;
  /**
   * 由于使用了 immutability-helper 执行 update 和 updateData 有的时候可能不会产生变化，这种时候需要用到它
   */
  countForcedUpdate: number;
}
