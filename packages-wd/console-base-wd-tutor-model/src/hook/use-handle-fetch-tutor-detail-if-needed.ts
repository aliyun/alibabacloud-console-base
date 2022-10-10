import {
  useCallback
} from 'react';

import {
  composeTutorDetailKey
} from '../util';

import useGetDwlTutorDetail from './use-get-dwl-tutor-detail';
import useHandleFetchTutorDetail from './use-handle-fetch-tutor-detail';

export default function useHandleFetchTutorDetailIfNeeded(): (productId: string, tutorId: string) => void {
  const getDwlTutorDetail = useGetDwlTutorDetail();
  const handleFetchDocDetail = useHandleFetchTutorDetail();
  
  return useCallback((productId: string, tutorId: string) => {
    const dwlDocDetail = getDwlTutorDetail(composeTutorDetailKey(productId, tutorId));
    
    if (!dwlDocDetail) {
      handleFetchDocDetail(productId, tutorId);
    }
  }, [getDwlTutorDetail, handleFetchDocDetail]);
}
