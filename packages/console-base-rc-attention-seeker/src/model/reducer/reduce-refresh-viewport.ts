import update from 'immutability-helper';

import {
  getViewport
} from '@alicloud/mere-dom';

import {
  IModelState
} from '../types';

export default function reduceRefreshViewport(state: IModelState): IModelState {
  const {
    width,
    height
  } = getViewport();
  
  return update(state, {
    viewportWidth: {
      $set: width
    },
    viewportHeight: {
      $set: height
    }
  });
}
