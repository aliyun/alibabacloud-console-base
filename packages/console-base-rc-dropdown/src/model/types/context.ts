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

export interface IModelContext {
  props: IModelProps;
  state: IModelState;
  isUnmounted(): boolean;
  dispatch: TModelDispatch;
}

export interface IModelProviderProps {
  props: IModelProps;
  children?: ReactNode;
}

export interface IContextForContent {
  visible: boolean;
  showDrop(): void;
  hideDrop(): void;
}
