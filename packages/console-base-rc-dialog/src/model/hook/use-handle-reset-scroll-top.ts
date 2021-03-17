import {
  useCallback
} from 'react';

import useRefContent from './use-ref-content';

/**
 * 在必要的时候允许使用者重置内容区域的 scrollTop
 */
export default function useHandleResetScrollTop(): () => void {
  const refContent = useRefContent();
  
  return useCallback((): void => {
    if (refContent.current) {
      refContent.current.scrollTop = 0;
    }
  }, [refContent]);
}
