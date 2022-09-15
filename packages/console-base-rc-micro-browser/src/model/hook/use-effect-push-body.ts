import {
  useEffect
} from 'react';

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
 * home 有绝对定位布局，它通过监听 resize 进行布局刷新
 */
function fireResize(): void {
  try {
    window.dispatchEvent(new CustomEvent('resize'));
  } catch (err) {
    // ignore
  }
}

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
    
    fireResize();
    
    return () => {
      style.parentNode?.removeChild(style);
      fireResize();
    };
  }, [mode, visible, w]);
}
