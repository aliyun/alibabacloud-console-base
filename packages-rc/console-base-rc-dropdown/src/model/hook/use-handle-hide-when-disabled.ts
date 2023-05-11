import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDispatchSetVisible from './use-dispatch-set-visible';

export default function useHandleHideWhenDisabled(): () => void {
  const {
    disabled,
    onVisibleChange
  } = useModelProps();
  const {
    visible
  } = useModelState();
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback((): void => {
    if (disabled && visible) {
      dispatchSetVisible(false);
      onVisibleChange?.(false);
    }
  }, [onVisibleChange, disabled, visible, dispatchSetVisible]);
}
