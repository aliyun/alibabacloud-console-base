import {
  Dispatch
} from 'react';

import {
  IPropsAttentionSeeker
} from '../../types';
import {
  EAction
} from '../const';

export interface IRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export type TModelAction = {
  type: EAction.SET_INDEX;
  payload: number;
} | {
  type: EAction.SET_RECT;
  payload: IRect;
};

export interface IModelProps extends IPropsAttentionSeeker {}

export interface IModelState {
  index: number;
  rect: IRect;
}

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export type TModelDispatch = Dispatch<TModelAction>;

export interface IModelValue {
  PROPS: IModelProps;
  STATE: IModelState;
  dispatch: TModelDispatch;
  isUnmounted(): boolean;
}
