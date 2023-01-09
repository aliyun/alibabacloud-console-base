import {
  IModelState
} from '../types';

export const DEFAULT_CONTEXT_STATE: IModelState = {
  collapsed: false,
  // TODO filtering 为 true，子项全是展开的
  filtering: false,
  filterText: ''
};