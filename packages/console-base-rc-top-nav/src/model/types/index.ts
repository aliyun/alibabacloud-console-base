import {
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

export interface IModelProps extends IPropsTopNavPure {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IModelState {}

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelContext {
  PROPS: IModelProps;
  STATE: IModelState;
  dispatch: TModelDispatch;
}
