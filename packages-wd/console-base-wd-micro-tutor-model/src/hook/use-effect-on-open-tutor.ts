import {
  useEffect
} from 'react';

import {
  MessengerPayloadTutorOpen,
  onOpenTutor
} from '@alicloud/console-base-messenger-tutor';

import useHandleTutorOpen from './use-handle-tutor-open';
import useHandleTutorOpenLegacy from './use-handle-tutor-open-legacy';

export default function useEffectOnOpenTutor(): void {
  const handleTutorOpen = useHandleTutorOpen();
  const handleTutorOpenLegacy = useHandleTutorOpenLegacy();
  
  useEffect(() => onOpenTutor((payload?: MessengerPayloadTutorOpen) => { // FIXME messenger 需要自己先确保一层
    const id = payload?.id;
    const step = payload?.step;
    
    if (!id) {
      return;
    }
    
    if (id.includes('~')) {
      const [productId, tutorId] = id.split('~') as [string, string];
      
      handleTutorOpen(productId, tutorId, step);
      
      return;
    }
    
    handleTutorOpenLegacy(id, step);
  }), [handleTutorOpen, handleTutorOpenLegacy]);
}
