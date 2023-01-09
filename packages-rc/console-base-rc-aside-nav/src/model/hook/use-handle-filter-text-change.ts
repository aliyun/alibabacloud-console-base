import {
  useCallback
} from 'react';

import useDispatchSetFilterText from './use-dispatch-set-filter-text';

export default function useHandleFilterTextChange(): (e: string) => void {
  const dispatchSetFilterText = useDispatchSetFilterText();

  return useCallback(e => dispatchSetFilterText(e), [dispatchSetFilterText]);
}
