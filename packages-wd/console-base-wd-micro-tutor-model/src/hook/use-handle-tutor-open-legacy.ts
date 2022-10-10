import {
  useCallback
} from 'react';

import {
  ESlsTopic
} from '../enum';

import useModelState from './_use-model-state';
import useModelProps from './_use-model-props';
import useDispatchSetOpenKey from './use-dispatch-set-open-key';
import useDispatchSetStep from './use-dispatch-set-step';
import useSls from './use-sls';

// TODO 虽然这里有部分冗余代码，但是这个代码我即将废弃，先不管
export default function useHandleTutorOpenLegacy(): (id: string, step?: number) => void {
  const {
    onOpen
  } = useModelProps();
  const {
    openKey,
    step: stepInState
  } = useModelState();
  const dispatchSetOpenKey = useDispatchSetOpenKey();
  const dispatchSetStep = useDispatchSetStep();
  const sls = useSls();
  
  return useCallback((id: string, step?: number) => {
    sls?.(ESlsTopic.STEP, {
      tutorKey: id,
      step
    });
    
    const determinedStep = (() => {
      if (step) { // 传入 step（step 一定 > 0）则用 payload 中的
        return step;
      }
      
      if (id === openKey) { // id 和已打开的相同，不变（还是 state 里的 step）
        return stepInState;
      }
      
      return 1;
    })();
    
    dispatchSetOpenKey(id);
    dispatchSetStep(determinedStep);
    onOpen?.(id, determinedStep);
  }, [openKey, stepInState, onOpen, dispatchSetOpenKey, dispatchSetStep, sls]);
}
