import _debounce from 'lodash/debounce';
import {
  useMemo
} from 'react';

import useModelProps from './_use-model-props';

/**
 * 避免快速移动时的不断触发 onMenuMouseLeave
 */
export default function useOnMenuMouseLeaveWithDebounce(): (key?: string) => void {
  const {
    onMenuMouseLeave
  } = useModelProps();
  
  return useMemo(() => _debounce((key?: string): void => {
    if (onMenuMouseLeave && key) {
      onMenuMouseLeave(key);
    }
  }, 200), [onMenuMouseLeave]);
}
