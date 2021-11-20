import {
  useEffect
} from 'react';

import {
  useAttentionElement,
  useHandleCloseOnElementMousedown
} from '../../../model';

export default function ObserveElementResize(): null {
  const attentionElement = useAttentionElement();
  const handleCloseOnElementMousedown = useHandleCloseOnElementMousedown();
  
  useEffect(() => {
    if (!attentionElement) {
      return;
    }
  
    attentionElement.addEventListener('mousedown', handleCloseOnElementMousedown, true);
    
    return () => attentionElement.removeEventListener('mousedown', handleCloseOnElementMousedown, true);
  }, [attentionElement, handleCloseOnElementMousedown]);
  
  return null;
}