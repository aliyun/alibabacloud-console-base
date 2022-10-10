import {
  useCallback
} from 'react';

import {
  ESlsTopic
} from '../enum';

import useModelProps from './_use-model-props';
import useOpenKey from './use-open-key';
import useDispatchSetOpenKey from './use-dispatch-set-open-key';
import useDispatchSetStep from './use-dispatch-set-step';
import useSls from './use-sls';

type TSource = 'done' | 'messenger' | 'hijack';

export default function useHandleClose(): (source: TSource) => void {
  const {
    onClose
  } = useModelProps();
  const openKey = useOpenKey();
  const dispatchSetOpenKey = useDispatchSetOpenKey();
  const dispatchSetStep = useDispatchSetStep();
  const sls = useSls();
  
  return useCallback((source: TSource) => {
    dispatchSetOpenKey('');
    dispatchSetStep(1);
    sls?.(ESlsTopic.CLOSE, {
      tutorKey: openKey,
      source
    });
    
    onClose?.();
  }, [openKey, dispatchSetOpenKey, dispatchSetStep, onClose, sls]);
}
