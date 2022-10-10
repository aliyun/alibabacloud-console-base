import {
  useCallback
} from 'react';

import {
  ESlsTopic
} from '../enum';

import useOpenKey from './use-open-key';
import useDispatchSetFeedbackRated from './use-dispatch-set-feedback-rated';
import useSls from './use-sls';

export default function useHandleFeedbackRate(): (useful: boolean) => void {
  const openKey = useOpenKey();
  const dispatchSetFeedbackRated = useDispatchSetFeedbackRated();
  const sls = useSls();
  
  return useCallback((useful: boolean): void => {
    sls?.(ESlsTopic.FEEDBACK_RATE, {
      tutorKey: openKey,
      useful
    });
    
    dispatchSetFeedbackRated([openKey, useful]);
  }, [openKey, dispatchSetFeedbackRated, sls]);
}
