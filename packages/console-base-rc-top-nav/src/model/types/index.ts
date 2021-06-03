import {
  ReactNode,
  Dispatch
} from 'react';

import {
  IPropsTopNav
} from '../../types';
import {
  EAction
} from '../const';

export type TModelAction = {
  type: EAction.SET_DOCK_ACTIVE;
  payload: boolean;
} | {
  type: EAction.SET_DOCK_ACTIVE_BY_HOVER_TIMESTAMP;
  payload: number;
} | {
  type: EAction.SET_DOCK_HOVER_ACTIVE_TIMER;
  payload: number | null;
};

export type TModelDispatch = Dispatch<TModelAction>;

export interface IModelState {
  /**
   * dock 是否为 active 状态，props.dock.active 为其对应受控属性
   */
  dockActive: boolean;
  /**
   * 如果 active 由 hover 触发，记录时间，以避免误操（active 瞬间因点击而取消）
   */
  dockActiveByHoverTimestamp: number;
  /**
   * dock 鼠标移上去后，如果为非 active 状态，则一定时间后自动触发 active
   */
  dockHoverActiveTimer: number | null;
}

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelProviderProps {
  props: IPropsTopNav;
  children: ReactNode;
}

export interface IModelContext {
  props: IPropsTopNav;
  state: IModelState;
  isUnmounted(): boolean;
  dispatch: TModelDispatch;
}
