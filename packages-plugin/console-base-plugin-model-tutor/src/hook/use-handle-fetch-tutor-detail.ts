import {
  useCallback
} from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-rc-loading';

import {
  ESlsTopic
} from '../enum';
import {
  PRE
} from '../const';
import {
  composeTutorDetailKey
} from '../util';

import useModelProps from './_use-model-props';
import useDispatchSetTutorDetailLoading from './use-dispatch-set-tutor-detail-loading';
import useDispatchSetTutorDetailData from './use-dispatch-set-tutor-detail-data';
import useDispatchSetTutorDetailError from './use-dispatch-set-tutor-detail-error';
import useSls from './use-sls';

export default function useHandleFetchTutorDetail(): (productId: string, tutorId: string) => void {
  const {
    apis: {
      dataTutorDetail
    }
  } = useModelProps();
  const dispatchSetTutorDetailLoading = useDispatchSetTutorDetailLoading();
  const dispatchSetTutorDetailData = useDispatchSetTutorDetailData();
  const dispatchSetTutorDetailError = useDispatchSetTutorDetailError();
  const sls = useSls();
  
  return useCallback((productId: string, tutorId: string) => {
    if (!productId || !tutorId) {
      return;
    }
    
    const key = composeTutorDetailKey(productId, tutorId);
    
    dispatchSetTutorDetailLoading({
      key,
      value: LoadingStatus.LOADING
    });
    
    dataTutorDetail(productId, tutorId, PRE).then(data => {
      dispatchSetTutorDetailLoading({
        key,
        value: LoadingStatus.SUCCESS
      });
      dispatchSetTutorDetailData({
        key,
        value: data
      });
    }).catch((err: Error) => {
      sls?.(ESlsTopic.TUTOR_NOT_FOUND, {
        tutorKey: key
      });
      
      dispatchSetTutorDetailLoading({
        key,
        value: LoadingStatus.ERROR
      });
      dispatchSetTutorDetailError({
        key,
        value: err
      });
    });
  }, [dataTutorDetail, dispatchSetTutorDetailData, dispatchSetTutorDetailError, dispatchSetTutorDetailLoading, sls]);
}
