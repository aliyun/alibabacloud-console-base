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

export interface IModelPropsInProvider extends Omit<IModelProps, 'container'> {
  container: HTMLElement;
}

export interface IModelProviderProps extends IModelPropsInProvider {
  children: ReactNode;
}

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelValue {
  props: IModelPropsInProvider;
  state: IModelState;
  dispatch: TModelDispatch;
}
