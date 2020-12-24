import {
  useState,
  useEffect
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  useDispatchToggleActive,
  useDispatchFocus
} from '../../hook';

/**
 * mimic componentDidMount
 */
export default function DidMount(): null {
  const isUnmounted = useIsUnmounted();
  const dispatchToggleActive = useDispatchToggleActive();
  const dispatchFocus = useDispatchFocus();
  const [stateDidMount, setStateDidMount] = useState<boolean>(false);
  
  useEffect(() => {
    if (!stateDidMount) {
      setStateDidMount(true);
      
      window.setTimeout(() => { // 触发 CSS 动画
        if (isUnmounted()) {
          return;
        }
        
        dispatchToggleActive(true);
        dispatchFocus();
      }, 10);
    }
  }, [stateDidMount, isUnmounted, dispatchToggleActive, dispatchFocus]);
  
  return null;
}
