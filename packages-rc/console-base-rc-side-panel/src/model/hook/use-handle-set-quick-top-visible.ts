import {
  useCallback
} from 'react';

import useDispatchSetQuickTopVisible from './use-dispatch-set-quick-top-visible';
import useModelProps from './_use-model-props';

export default function useHandleSetQuickTopVisible(): (visible: boolean) => void {
  const {
    onQuickTopVisibleChange
  } = useModelProps();
  const dispatchSetQuickTopVisible = useDispatchSetQuickTopVisible();
  
  return useCallback((visible: boolean) => {
    dispatchSetQuickTopVisible(visible);
    onQuickTopVisibleChange?.(visible);
  }, [dispatchSetQuickTopVisible, onQuickTopVisibleChange]);
}
