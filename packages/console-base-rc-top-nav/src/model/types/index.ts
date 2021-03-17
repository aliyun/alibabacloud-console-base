import {
  ReactNode,
  Dispatch
} from 'react';

import {
  IPropsTopNavPure
} from '../../types';
import {
  EAction
} from '../const';

export type TModelAction = {
  type: EAction.NOTHING
};

export type TModelDispatch = Dispatch<TModelAction>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IModelState {}

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelProviderProps {
  props: IPropsTopNavPure;
  children: ReactNode;
}

export interface IModelContext {
  props: IPropsTopNavPure;
  state: IModelState;
  dispatch: TModelDispatch;
}
