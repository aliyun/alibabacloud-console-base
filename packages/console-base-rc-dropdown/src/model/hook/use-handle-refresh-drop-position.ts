import {
  useCallback
} from 'react';

import {
  IModelStateDropPosition
} from '../types';

import useVisible from './use-visible';
import useRefDropdown from './use-ref-dropdown';
import useProps from './use-props';
import useDispatchSetDropPosition from './use-dispatch-set-drop-position';

function getTopLeft(div: HTMLDivElement): [number, number] {
  const rect = div.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
  
  return [
    Math.ceil((rect.y || rect.top) + rect.height) + scrollTop + 1,
    Math.ceil(rect.left) + scrollLeft + 1
  ];
}

function computePosition(dropdownEl: HTMLDivElement | null | undefined, visible?: boolean, align?: string): IModelStateDropPosition {
  if (!visible) { // 不可见时
    if (dropdownEl) {
      const [t, l] = getTopLeft(dropdownEl);
      
      return {
        top: t + 10, // +10 是为了动画
        left: l
      };
    }
    
    return {
      top: '150%' // 为了可见时的动画
    };
  }
  
  if (!dropdownEl) {
    if (align === 'right') {
      return {
        top: '100%',
        right: 0
      };
    }
    
    return {
      top: '100%',
      left: 0
    };
  }
  
  // TODO align right 还有问题
  const [t, l] = getTopLeft(dropdownEl);
  
  return {
    top: t,
    left: l
  };
}

/**
 * 根据当前状态获取位置信息
 */
export default function useHandleRefreshDropPosition(): () => void {
  const {
    align,
    dropContainer = 'inside'
  } = useProps();
  const refDropdown = useRefDropdown();
  const visible = useVisible();
  const dispatchSetDropPosition = useDispatchSetDropPosition();
  const dropdownEl: HTMLDivElement | null | undefined = dropContainer === 'body' ? refDropdown.current : undefined; // 当 dropContainer 为 body 的时候，它才有用
  
  return useCallback(() => dispatchSetDropPosition(computePosition(dropdownEl, visible, align)), [align, dropdownEl, visible, dispatchSetDropPosition]);
}
