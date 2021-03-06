import {
  ReactNode,
  MutableRefObject,
  Dispatch
} from 'react';

import {
  TDialogData,
  IDialogProps,
  IDialogPropsMutable,
  TFnCloseWithResult,
  TDispatchLock,
  TDispatchUpdateProps,
  TDispatchUpdateData
} from '../../types';
import {
  EDialogLockState
} from '../../const';
import {
  EAction
} from '../const';

export type TModelAction = {
  type: EAction.DID_MOUNT | EAction.ACTIVATE | EAction.DEACTIVATE | EAction.UNLOCK | EAction.UPDATE_WINDOW_HEIGHT | EAction.FORCE_UPDATE;
} | {
  type: EAction.SET_Z_INDEX;
  payload: number;
} | {
  type: EAction.LOCK;
  payload?: boolean;
} | {
  type: EAction.UPDATE_PROPS;
  payload: IDialogPropsMutable<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
} | {
  type: EAction.UPDATE_DATA;
  payload: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type TModelDispatch = Dispatch<TModelAction>;

export interface IDialogStackItem {
  backdrop: boolean;
  zIndex: number;
  zIndexBackdrop: number;
  domDialog: HTMLDivElement | null;
  domDialogContent: HTMLDivElement | null;
  dispatchSetZIndex(zIndex: number): void;
  dispatchCloseOnEsc(): boolean | void;
  dispatchCloseOnExternal(): void;
}

/**
 * Dialog 的
 */
export interface IModelState<R = void, D = TDialogData> {
  /**
   * Dialog 生命周期的唯一标识
   */
  id: string;
  /**
   * 模拟 did mount
   */
  mounted: boolean;
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

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelContext<R = void, D = TDialogData> {
  props: IDialogProps<R, D>;
  state: IModelState<R, D>;
  refDialog: MutableRefObject<HTMLDivElement | null>;
  refContent: MutableRefObject<HTMLDivElement | null>;
  dispatch: TModelDispatch;
}

export interface IModelProviderProps<R = void, D = TDialogData> {
  props: IDialogProps<R, D>;
  children: ReactNode;
}

// 给内容使用的 context
export interface IContextForContent<R = void, D = TDialogData> {
  data: D;
  focus(): void;
  resetScrollTop(): void;
  unlock(): void;
  lock: TDispatchLock;
  update: TDispatchUpdateProps<R, D>;
  updateData: TDispatchUpdateData<D>;
  forceUpdate(): void;
  close: TFnCloseWithResult<R>;
}
