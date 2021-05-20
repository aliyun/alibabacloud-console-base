import {
  useEffect
} from 'react';

import {
  EModalMode
} from '../../../const';
import useRndState from '../../hook/use-rnd-state';

/**
 * PIN 模式下，需要对其他内容进行左推
 * 
 * 1. body padding-right
 * 2. ng 项目下 .viewFramework-body 绝对定位 right 为 0，覆盖之
 * 3. 写得很屎的 wind 的 slide panel 的样式覆盖
 * 4. 其他不可预期的 fixed-to-right 组件，可以自行加上 class="J_fixed_right_will_be_pushed_left" 达到被自动左推的效果
 */
function createStyle(right: number): HTMLStyleElement {
  const head: HTMLHeadElement = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  
  style.textContent = `body {
  padding-right: ${right}px;
}
div[view-framework] .viewFramework-body,
div.show-panel div.slide-panels,
.J_fixed_right_will_be_pushed_left {
  right: ${right}px !important;
}`;
  head.appendChild(style);
  
  return style;
}

/**
 * home 有绝对定位布局，它通过监听 resize 进行布局刷新
 */
function fireResize(): void {
  try {
    window.dispatchEvent(new CustomEvent('resize'));
  } catch (ex) {
    // ignore
  }
}

/**
 * pinned 模式下可能需要调整 body 的 style.padding-left 或 ng 项目的容器的 style.right
 */
export default function PushBody(): null {
  const {
    mode,
    visible,
    w
  } = useRndState();
  
  useEffect(() => {
    if (!visible || mode !== EModalMode.TO_THE_RIGHT_PINNED) {
      return;
    }
    
    const style: HTMLStyleElement = createStyle(w);
    
    fireResize();
    
    return () => {
      style.parentNode?.removeChild(style);
      fireResize();
    };
  }, [mode, visible, w]);
  
  return null;
}
