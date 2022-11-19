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
    // FIXME
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
