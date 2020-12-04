import {
  Dispatch
} from 'react';

import {
  IPropsTopNav
} from '../../types';
import {
  EAction
} from '../const';

export type TAction = {
  type: EAction.NOTHING
};

export interface IContextProps extends IPropsTopNav {}

// export interface IContextRef {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IContextState {}

export interface IContextReducer {
  (state: IContextState, action: TAction): IContextState;
}

export interface IContext {
  // REF: IContextRef;
  PROPS: IContextProps;
  STATE: IContextState;
  dispatch: Dispatch<TAction>;
}
