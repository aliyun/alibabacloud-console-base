import {
  useEffect
} from 'react';

import {
  triggerWindowResize
} from '@alicloud/mere-dom';

import {
  EMicroBrowserMode
} from '../enum';
import {
  createStylePushBody
} from '../util';

import useModelProps from './_use-model-props';
import useMode from './use-mode';
import useRndRectW from './use-rnd-rect-w';

/**
 * pinned 模式下可能需要调整 body 的 style.padding-left 或 ng 项目的容器的 style.right
 */
export default function useEffectPushBody(): void {
  const {
    visible
  } = useModelProps();
  const mode = useMode();
  const w = useRndRectW();
  
  useEffect(() => {
    if (!visible || mode !== EMicroBrowserMode.TO_THE_RIGHT_PINNED) {
      return;
    }
    
    const style: HTMLStyleElement = createStylePushBody(w);
    
    triggerWindowResize();
    
    return () => {
      style.parentNode?.removeChild(style);
      triggerWindowResize();
    };
  }, [mode, visible, w]);
}
