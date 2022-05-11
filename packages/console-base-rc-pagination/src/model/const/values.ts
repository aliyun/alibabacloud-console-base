import {
  IModelState
} from '../types';

export const DEFAULT_CONTEXT_STATE: IModelState = {
  domUi: null,
  page: 1,
  width: -1
};

/**
 * 宽度等级
 * 
 *  SIMPLE_NO_TEXT   SIMPLE     FULL_NO_TEXT      FULL
 *      ↓              ↓            ↓             ↓
 * |---------------------------------------------- |
 */
export const MIN_WIDTH = {
  FULL: 320,
  FULL_NO_TEXT: 240,
  SIMPLE: 200,
  SIMPLE_NO_TEXT: 160
};