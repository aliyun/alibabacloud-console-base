import _debounce from 'lodash/debounce';
import {
  useMemo
} from 'react';

import useModelProps from './_use-model-props';

/**
 * 避免快速移动时的不断触发 onMenuMouseEnter
 */
export default function useOnMenuMouseEnterWithDebounce(): (key?: string) => void {
  const {
    onMenuMouseEnter
  } = useModelProps();
  
  return useMemo(() => _debounce((key?: string): void => {
    if (onMenuMouseEnter && key) {
      onMenuMouseEnter(key);
    }
  }, 200), [onMenuMouseEnter]);
}
