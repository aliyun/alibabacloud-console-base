import {
  ReactNode,
  MutableRefObject
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

export interface IModelProviderProps {
  props: IModelProps;
  children: ReactNode;
}

export interface IModelContext {
  props: IModelProps;
  state: IModelState;
  refTabs: MutableRefObject<HTMLDivElement | null>;
  refNav: MutableRefObject<HTMLDivElement | null>;
  dispatch: TModelDispatch;
}
