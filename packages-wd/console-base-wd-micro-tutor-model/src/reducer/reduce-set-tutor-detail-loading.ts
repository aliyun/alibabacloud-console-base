import update from 'immutability-helper';

import {
  createDataWithLoading
} from '@alicloud/console-base-rc-loading';

import {
  IModelState,
  IPayloadSetTutorDetailLoading
} from '../types';

export default function reduceSetTutorDetailLoading(state: IModelState, {
  key,
  value
}: IPayloadSetTutorDetailLoading): IModelState {
  const {
    dwlTutorDetailMapping
  } = state;
  
  return update(state, {
    dwlTutorDetailMapping: {
      [key]: {
        $set: update(dwlTutorDetailMapping[key] || createDataWithLoading(null), {
          $merge: {
            loading: value
          }
        })
      }
    }
  });
}