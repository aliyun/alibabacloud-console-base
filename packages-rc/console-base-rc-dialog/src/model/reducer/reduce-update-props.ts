import _forEach from 'lodash/forEach';
import update from 'immutability-helper';

import {
  IDialogPropsMutable
} from '../../types';
import {
  IModelState
} from '../types';

/**
 * 有限更新 props
 */
export default function reduceUpdateProps(state: IModelState, payload: IDialogPropsMutable): IModelState {
  const newUpdate: any = {
    ...state.propsUpdate
  };
  
  _forEach(payload, (v, k) => {
    if (v === undefined || v === null) { // 允许通过传入 undefined / null 来复原初始值
      delete newUpdate[k];
    } else {
      newUpdate[k] = v;
    }
  });
  
  return update(state, {
    propsUpdate: {
      $set: newUpdate
    }
  });
}
