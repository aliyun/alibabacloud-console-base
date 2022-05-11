import {
  useCallback
} from 'react';

import useModelState from './_use-model-state';

/**
 * 在必要的时候允许使用者重置内容区域的 scrollTop
 */
export default function useHandleResetScrollTop(): () => void {
  const {
    domDialogContent
  } = useModelState();
  
  return useCallback((): void => {
    if (domDialogContent) {
      domDialogContent.scrollTop = 0;
    }
  }, [domDialogContent]);
}
