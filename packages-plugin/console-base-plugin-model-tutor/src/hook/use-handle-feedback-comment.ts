import {
  useCallback
} from 'react';

import {
  ESlsTopic
} from '../enum';

import useOpenKey from './use-open-key';
import useDispatchSetFeedbackCommented from './use-dispatch-set-feedback-commented';
import useSls from './use-sls';

export default function useHandleFeedbackComment(): (comment: string, useful: boolean) => void {
  const openKey = useOpenKey();
  const dispatchSetFeedbackCommented = useDispatchSetFeedbackCommented();
  const sls = useSls();
  
  return useCallback((comment: string, useful: boolean): void => {
    sls?.(ESlsTopic.FEEDBACK_COMMENT, {
      tutorKey: openKey,
      comment,
      useful
    });
    
    dispatchSetFeedbackCommented(openKey);
  }, [openKey, dispatchSetFeedbackCommented, sls]);
}
