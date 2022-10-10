import {
  useState,
  useEffect
} from 'react';

import {
  URL_PARAM_TUTOR
} from '../const';

import useHandleTutorOpen from './use-handle-tutor-open';

/**
 * 组件初始化后，从 URL 中读取 console_base_tutor 参数 `product~tutorId~step` 直接开启
 */
export default function useEffectLaunchFromUrl(): void {
  const [stateDone, setStateDone] = useState<boolean>(false);
  const handleTutorOpen = useHandleTutorOpen();
  
  useEffect(() => {
    if (stateDone) { // 只做一次
      return;
    }
    
    setStateDone(true);
    
    try {
      const {
        searchParams
      } = new URL(location.href);
      const value = searchParams.get(URL_PARAM_TUTOR);
      
      if (!value) {
        return;
      }
      
      const [productId, tutorId, step] = value.split(/\s*~\s*/);
      
      if (!productId || !tutorId) {
        return;
      }
      
      handleTutorOpen(productId, tutorId, step ? Number(step) : undefined);
    } catch (err) {
      // ignore
    }
  }, [stateDone, setStateDone, handleTutorOpen]);
}
