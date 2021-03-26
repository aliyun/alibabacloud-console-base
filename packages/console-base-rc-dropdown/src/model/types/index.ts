import {
  ReactNode,
  MutableRefObject,
  Dispatch
} from 'react';

import {
  IPropsDropdown
} from '../../types';
import {
  EAction
} from '../const';

export interface IModelStateDropPosition {
  top?: number | string;
  left?: number | string;
  right?: number | string;
}

export type TModelAction = {
  type: EAction.SET_VISIBLE;
  payload: boolean;
} | {
  type: EAction.SET_VISIBLE_TIMER;
  payload: number | null;
} | {
  type: EAction.SET_DROP_EXITING;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;

export interface IModelState {
  visible: boolean;
  visibleTimer: number | null; // 如果是 visible 的时候就是隐藏
  dropExiting: boolean;
}

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelContext {
  props: IPropsDropdown;
  state: IModelState;
  refDropdown: MutableRefObject<HTMLDivElement | null>;
  refDrop: MutableRefObject<HTMLDivElement | null>;
  isUnmounted(): boolean;
  dispatch: TModelDispatch;
}

export interface IModelProviderProps {
  props: IPropsDropdown;
  children?: ReactNode;
}

export interface IContextForContent {
  visible: boolean;
  showDrop(): void;
  hideDrop(): void;
}
