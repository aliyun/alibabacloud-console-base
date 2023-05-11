import {
  IModelState
} from '../types';

export const DEFAULT_CONTEXT_STATE: IModelState = {
  dockActive: false
};

export const CLASS_BODY_WITH_TOP_NAV_FIXED = 'hasTopbar'; // 不要轻易改这个值，在本组件里都有耦合（只是不想为它起个常量）
