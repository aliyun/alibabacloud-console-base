import {
  useEffect
} from 'react';

import hijackClickGlobal from '@alicloud/dom-event-hijacker';

import {
  DATA_KEY_TUTOR_CLOSE
} from '../const';
import {
  composeTutorDetailKey
} from '../util';

import useHandleCloseByHijack from './use-handle-close-by-hijack';

/**
 * 全局拦截 data-console-base-tutor-close 点击
 */
export default function useEffectHijackClose(): void {
  const handleCloseByHijack = useHandleCloseByHijack();
  
  useEffect(() => {
    return hijackClickGlobal<string>({
      condition(el: HTMLElement): string | void {
        const value = el.getAttribute(DATA_KEY_TUTOR_CLOSE);
        
        if (value) {
          const [productId, tutorId] = value.split(/\s*~\s*/);
          
          if (productId && tutorId) {
            return composeTutorDetailKey(productId, tutorId);
          }
        }
      },
      callback(_el: HTMLElement, conditionResult: string): void {
        handleCloseByHijack(conditionResult);
      }
    });
  }, [handleCloseByHijack]);
}
