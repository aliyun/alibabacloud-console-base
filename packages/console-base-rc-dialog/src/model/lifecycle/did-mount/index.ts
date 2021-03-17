import {
  useState,
  useEffect
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  useDispatchToggleActive,
  useHandleFocus
} from '../../hook';

/**
 * mimic componentDidMount
 */
export default function DidMount(): null {
  const isUnmounted = useIsUnmounted();
  const dispatchToggleActive = useDispatchToggleActive();
  const handleFocus = useHandleFocus();
  const [stateDidMount, setStateDidMount] = useState<boolean>(false);
  
  useEffect(() => {
    if (!stateDidMount) {
      setStateDidMount(true);
      
      window.setTimeout(() => { // 触发 CSS 动画
        if (isUnmounted()) {
          return;
        }
        
        dispatchToggleActive(true);
        handleFocus();
      }, 10);
    }
  }, [stateDidMount, isUnmounted, dispatchToggleActive, handleFocus]);
  
  return null;
}
