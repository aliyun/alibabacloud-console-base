import {
  ReactNode
} from 'react';

import {
  TDialogData,
  IDialogProps,
  TFnCloseWithResult,
  TDispatchLock,
  TDispatchUpdateProps,
  TDispatchUpdateData
} from '../../types';

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

export interface IModelContext<R = void, D = TDialogData> {
  props: IDialogProps<R, D>;
  state: IModelState<R, D>;
  dispatch: TModelDispatch;
}

export interface IModelProviderProps<R = void, D = TDialogData> {
  props: IDialogProps<R, D>;
  children: ReactNode;
}

// 给内容使用的 context
export interface IContextForContent<R = void, D = TDialogData> {
  data: D;
  focus(): void;
  resetScrollTop(): void;
  unlock(): void;
  lock: TDispatchLock;
  update: TDispatchUpdateProps<R, D>;
  updateData: TDispatchUpdateData<D>;
  forceUpdate(): void;
  close: TFnCloseWithResult<R>;
}
