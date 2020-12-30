import {
  useEffect
} from 'react';

import {
  EModalMode
} from '../../../const';
import {
  useRndState
} from '../../hook';

function changeStyleRight(selector: string, w: number): void {
  try {
    const el = document.querySelector<HTMLElement>(selector);
    
    if (el) {
      el.style.right = w > 0 ? `${w}px` : '0';
    }
  } catch (e) {
    // ignore
  }
}

function pushBodyLeft(w: number): void {
  document.body.style.paddingRight = w > 0 ? `${w}px` : '';
  
  changeStyleRight('div[view-framework] .viewFramework-body', w); // ng 项目下 .viewFramework-body 的是绝对定位 right 为 0，这里处理一下
  changeStyleRight('#J_console_base_top_nav', w); // TopNav 耦合
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
    
    if (mode === EModalMode.TO_THE_RIGHT_PINNED) {
      pushBodyLeft(w);
    }
    
    return () => pushBodyLeft(0);
  }, [mode, visible, w]);
  
  return null;
}
