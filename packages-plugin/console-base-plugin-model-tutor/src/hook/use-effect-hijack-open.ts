import {
  useEffect
} from 'react';

import hijackClickGlobal from '@alicloud/dom-event-hijacker';

import {
  DATA_KEY_TUTOR_OPEN
} from '../const';

import useHandleTutorOpen from './use-handle-tutor-open';

interface IHijackResult {
  productId: string;
  tutorId: string;
  step?: number;
}

/**
 * 全局拦截 data-console-base-tutor-open 点击
 */
export default function useEffectHijackOpen(): void {
  const handleTutorOpen = useHandleTutorOpen();
  
  useEffect(() => {
    return hijackClickGlobal<IHijackResult>({
      condition(el: HTMLElement): IHijackResult | void {
        const value = el.getAttribute(DATA_KEY_TUTOR_OPEN);
        
        if (value) {
          const [productId, tutorId, step] = value.split(/\s*~\s*/);
          
          if (productId && tutorId) {
            const result: IHijackResult = {
              productId,
              tutorId
            };
            
            if (step) {
              result.step = Number(step);
            }
            
            return result;
          }
        }
      },
      callback(_el: HTMLElement, {
        productId,
        tutorId,
        step
      }: IHijackResult): void {
        handleTutorOpen(productId, tutorId, step);
      }
    });
  }, [handleTutorOpen]);
}
