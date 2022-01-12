import {
  Dispatch
} from 'react';

export enum EAction {
  SET_VISIBLE,
  SET_AUTO_CLOSE_TICK
}

export type TModelAction = {
  type: EAction.SET_VISIBLE;
  payload: boolean;
} | {
  type: EAction.SET_AUTO_CLOSE_TICK;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;
