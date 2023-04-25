import {
  ReactNode
} from 'react';

import {
  IModelProps
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

export interface IModelProviderPros extends IModelProps {
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
  state: IModelState;
  dispatch: TModelDispatch;
}
