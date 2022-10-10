import update from 'immutability-helper';

import {
  createDataWithLoading
} from '@alicloud/console-base-rc-loading';

import {
  IModelState,
  IPayloadSetTutorDetailError
} from '../types';

export default function reduceSetTutorDetailError(state: IModelState, {
  key,
  value
}: IPayloadSetTutorDetailError): IModelState {
  const {
    dwlTutorDetailMapping
  } = state;
  
  return update(state, {
    dwlTutorDetailMapping: {
      [key]: {
        $set: update(dwlTutorDetailMapping[key] || createDataWithLoading(null), {
          $merge: {
            error: value
          }
        })
      }
    }
  });
}
