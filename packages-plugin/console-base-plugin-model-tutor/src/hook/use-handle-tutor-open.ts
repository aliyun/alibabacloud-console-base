import {
  useCallback
} from 'react';

import {
  ESlsTopic
} from '../enum';
import {
  composeTutorDetailKey
} from '../util';

import useModelProps from './_use-model-props';
import useCurrentStep from './use-current-step';
import useOpenKey from './use-open-key';
import useDispatchSetOpenKey from './use-dispatch-set-open-key';
import useDispatchSetStep from './use-dispatch-set-step';
import useHandleFetchTutorDetailIfNeeded from './use-handle-fetch-tutor-detail-if-needed';
import useSls from './use-sls';

export default function useHandleTutorOpen(): (productId: string, tutorId: string, step?: number) => void {
  const {
    onOpen
  } = useModelProps();
  const openKey = useOpenKey();
  const currentStep = useCurrentStep();
  const dispatchSetOpenKey = useDispatchSetOpenKey();
  const dispatchSetStep = useDispatchSetStep();
  const handleFetchTutorDetailIfNeeded = useHandleFetchTutorDetailIfNeeded();
  const sls = useSls();
  
  return useCallback((productId: string, tutorId: string, step?: number) => {
    const key = composeTutorDetailKey(productId, tutorId);
    
    dispatchSetOpenKey(key);
    handleFetchTutorDetailIfNeeded(productId, tutorId);
    
    sls?.(ESlsTopic.OPEN, {
      tutorKey: key,
      step
    });
    
    const determinedStep = (() => {
      if (step && step > 0) { // payload 中有 step（step 一定 > 0）则用 payload 中的
        return step;
      }
      
      if (key === openKey) { // id 和已打开的相同，不变（还是 state 里的 step）
        return currentStep;
      }
      
      return 1;
    })();
    
    dispatchSetOpenKey(key);
    dispatchSetStep(determinedStep);
    onOpen?.(key, determinedStep);
  }, [currentStep, openKey, onOpen, dispatchSetOpenKey, dispatchSetStep, handleFetchTutorDetailIfNeeded, sls]);
}
