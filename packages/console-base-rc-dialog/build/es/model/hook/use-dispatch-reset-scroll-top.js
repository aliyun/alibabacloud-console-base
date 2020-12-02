import { useCallback } from 'react';
import useRefContent from './use-ref-content';
/**
 * 在必要的时候允许使用者重置内容区域的 scrollTop
 */

export default function useDispatchResetScrollTop() {
  var refContent = useRefContent();
  return useCallback(function () {
    if (refContent.current) {
      refContent.current.scrollTop = 0;
    }
  }, [refContent]);
}