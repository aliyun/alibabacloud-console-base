import {
  useState,
  useEffect
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import useDispatchSetActive from './use-dispatch-set-active';

// TODO use transition-group
export default function useEffectDidMount(): void {
  const isUnmounted = useIsUnmounted();
  const dispatchToggleActive = useDispatchSetActive();
  const [stateDidMount, setStateDidMount] = useState<boolean>(false);
  
  useEffect(() => {
    if (!stateDidMount) {
      setStateDidMount(true);
      
      window.setTimeout(() => { // 触发 CSS 动画
        if (isUnmounted()) {
          return;
        }
        
        dispatchToggleActive(true);
      }, 10);
    }
  }, [stateDidMount, isUnmounted, dispatchToggleActive]);
}
