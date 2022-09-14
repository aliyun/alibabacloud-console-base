import {
  useEffect
} from 'react';

import {
  EModalMode
} from '../enum';
import {
  createStylePushBody
} from '../util';

import useRndStateExtra from './use-rnd-state-extra';
import useRndStateRect from './use-rnd-state-rect';

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
    mode,
    visible
  } = useRndStateExtra();
  const {
    w
  } = useRndStateRect();
  
  useEffect(() => {
    if (!visible || mode !== EModalMode.TO_THE_RIGHT_PINNED) {
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
