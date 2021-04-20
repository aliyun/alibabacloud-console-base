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
  type: EAction.NOTHING
};

export type TModelDispatch = Dispatch<TModelAction>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IModelState {}

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
  dispatch: TModelDispatch;
}
