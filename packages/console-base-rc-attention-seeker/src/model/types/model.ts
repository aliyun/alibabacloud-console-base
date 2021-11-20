import {
  ReactNode,
  Dispatch
} from 'react';

import {
  EAction
} from '../const';

import {
  TCloseSource,
  IAttentionSeekerItem,
  IRectStyle
} from './misc';

export interface IModelProps {
  items: IAttentionSeekerItem[];
  timestamp?: number; // 用于强制 refresh
  onClose?(source: TCloseSource): void;
}

export interface IModelState {
  index: number;
  rectStyle: IRectStyle;
  domBackdrop: HTMLDivElement | null;
}

export type TModelAction = {
  type: EAction.SET_INDEX;
  payload: number;
} | {
  type: EAction.SET_RECT_STYLE;
  payload: IRectStyle;
} | {
  type: EAction.SET_DOM_BACKDROP;
  payload: HTMLDivElement | null;
};

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export type TModelDispatch = Dispatch<TModelAction>;

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelValue {
  props: IModelProps;
  state: IModelState;
  dispatch: TModelDispatch;
  isUnmounted(): boolean;
}
