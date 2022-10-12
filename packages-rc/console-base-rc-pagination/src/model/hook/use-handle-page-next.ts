import {
  useCallback
} from 'react';

import useHandlePage from './use-handle-page';

export default function useHandlePagePrev(): () => void {
  const handlePage = useHandlePage();
  
  return useCallback(() => handlePage('+1'), [handlePage]);
}
