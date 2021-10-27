import {
  IRectStyle,
  IModelState
} from '../types';

export const DEFAULT_RECT: IRectStyle = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  borderTopLeftRadius: '',
  borderTopRightRadius: '',
  borderBottomLeftRadius: '',
  borderBottomRightRadius: ''
};

export const DEFAULT_MODEL_STATE: IModelState = {
  index: 0,
  rectStyle: DEFAULT_RECT
};
