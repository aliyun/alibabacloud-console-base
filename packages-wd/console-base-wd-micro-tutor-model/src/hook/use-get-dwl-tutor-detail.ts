import {
  useCallback
} from 'react';

import {
  DataWithLoading
} from '@alicloud/console-base-rc-loading';
import {
  DataTutorDetail
} from '@alicloud/console-base-types-data-tutor';

import {
  getDwlByLegacy
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useGetDwlTutorDetail(): (key: string) => DataWithLoading<DataTutorDetail | null> | undefined {
  const {
    registerLegacy = {}
  } = useModelProps();
  const {
    dwlTutorDetailMapping
  } = useModelState();
  
  return useCallback((key: string): DataWithLoading<DataTutorDetail | null> | undefined => {
    return dwlTutorDetailMapping[key] || getDwlByLegacy(registerLegacy[key]);
  }, [registerLegacy, dwlTutorDetailMapping]);
}
