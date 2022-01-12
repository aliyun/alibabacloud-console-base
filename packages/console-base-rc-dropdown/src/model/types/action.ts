import {
  Dispatch
} from 'react';

export enum EAction {
  SET_DOM_DROPDOWN,
  SET_DOM_DROP,
  SET_VISIBLE,
  SET_VISIBLE_TIMER,
  SET_DROP_EXITING
}

export type TModelAction = {
  type: EAction.SET_DOM_DROPDOWN | EAction.SET_DOM_DROP;
  payload: HTMLDivElement | null;
} | {
  type: EAction.SET_VISIBLE;
  payload: boolean;
} | {
  type: EAction.SET_VISIBLE_TIMER;
  payload: number | null;
} | {
  type: EAction.SET_DROP_EXITING;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;