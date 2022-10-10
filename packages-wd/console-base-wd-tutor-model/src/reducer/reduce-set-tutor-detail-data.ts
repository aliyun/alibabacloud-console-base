import update from 'immutability-helper';

import {
  createDataWithLoading
} from '@alicloud/console-base-rc-loading';

import {
  IPayloadSetTutorDetailData,
  IModelState
} from '../types';

export default function reduceSetTutorDetailData(state: IModelState, {
  key,
  value
}: IPayloadSetTutorDetailData): IModelState {
  const {
    dwlTutorDetailMapping
  } = state;
  
  return update(state, {
    dwlTutorDetailMapping: {
      [key]: {
        $set: update(dwlTutorDetailMapping[key] || createDataWithLoading(null), {
          $merge: {
            data: value
          }
        })
      }
    }
  });
}
