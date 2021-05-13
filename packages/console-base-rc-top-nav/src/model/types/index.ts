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
  type: EAction.SET_DOCK_HOVER_ACTIVE_TIMER;
  payload: number | null;
};

export type TModelDispatch = Dispatch<TModelAction>;

export interface IModelState {
  /**
   * dock 是否为按下状态，props.dock.active 为其对应受控属性
   */
  dockActive: boolean;
  /**
   * dock 鼠标移上去后，有个延时按下的逻辑
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
