import {
  useEffect
} from 'react';

import useAttentionElement from './use-attention-element';
import useHandleCloseOnElementMousedown from './use-handle-close-on-element-mousedown';

export default function useEffectBindCloseToElement(): void {
  const attentionElement = useAttentionElement();
  const handleCloseOnElementMousedown = useHandleCloseOnElementMousedown();
  
  useEffect(() => {
    if (!attentionElement) {
      return;
    }
    
    attentionElement.addEventListener('mousedown', handleCloseOnElementMousedown, true);
    
    return () => attentionElement.removeEventListener('mousedown', handleCloseOnElementMousedown, true);
  }, [attentionElement, handleCloseOnElementMousedown]);
}