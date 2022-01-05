import {
  ReactNode
} from 'react';

import {
  IPropsTopNav
} from './props';
import {
  IModelState
} from './state';
import {
  TModelAction,
  TModelDispatch
} from './action';

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
