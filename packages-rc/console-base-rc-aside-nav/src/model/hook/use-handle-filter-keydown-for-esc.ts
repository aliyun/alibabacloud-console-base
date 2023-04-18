import {
  KeyboardEvent,
  useCallback
} from 'react';

import useHandleResetFilter from './use-handle-reset-filter';

function shallReset(e: KeyboardEvent<HTMLInputElement>): boolean {
  if (e.key === 'Escape') {
    return true;
  }
  
  // 有的浏览器插件会阻止 ESC，在没有值的情况下按 Enter 也可以退出
  return e.key === 'Enter' && !(e.target as HTMLInputElement | null)?.value.trim();
}

export default function useHandleFilterKeydownForEsc(): (e: KeyboardEvent<HTMLInputElement>) => void {
  const handleResetFilter = useHandleResetFilter();
  
  return useCallback(e => {
    if (shallReset(e)) {
      handleResetFilter();
    }
  }, [handleResetFilter]);
}
