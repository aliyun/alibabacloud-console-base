import {
  useEffect
} from 'react';

import {
  EModalMode
} from '../../../const';
import {
  useRndState
} from '../../hook';

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
 * pinned 模式下可能需要调整 body 的 style.padding-left 或 ng 项目的容器的 style.right
 */
export default function PushBody(): null {
  const {
    mode,
    visible,
    w
  } = useRndState();
  
  useEffect(() => {
    if (!visible) {
      return;
    }
    
    let style: HTMLStyleElement | undefined;
    
    if (mode === EModalMode.TO_THE_RIGHT_PINNED && w > 0) {
      style = createStyle(w);
    }
    
    return () => {
      style?.parentNode?.removeChild(style);
    };
  }, [mode, visible, w]);
  
  return null;
}
