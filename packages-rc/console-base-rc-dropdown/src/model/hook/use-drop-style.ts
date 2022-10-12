import {
  CSSProperties,
  useMemo
} from 'react';

import {
  getRect
} from '@alicloud/mere-dom';

import useModelProps from './_use-model-props';
import useDomDropdown from './use-dom-dropdown';
import useDomDrop from './use-dom-drop';

/**
 * 计算 zIndex、top、left/right 等信息
 */
export default function useDropStyle(): CSSProperties {
  const {
    align,
    width,
    minWidth,
    maxWidth,
    zIndex,
    offset,
    dropContainer
  } = useModelProps();
  const domDropdown = useDomDropdown();
  const domDrop = useDomDrop();
  
  const alignIsRight = align === 'right';
  const [offsetX = 0, offsetY = 0] = offset;
  
  return useMemo(() => {
    const style: CSSProperties = {
      zIndex
    };
    
    if (width) {
      style.width = width;
    }
    
    if (minWidth) {
      style.minWidth = minWidth;
    }
    
    if (maxWidth) {
      style.maxWidth = maxWidth;
    }
    
    // compute position
    if (dropContainer === 'body') {
      const rect = domDropdown ? getRect(domDropdown, true) : null;
      
      if (rect) {
        style.top = rect.top + rect.height + offsetY;
        
        if (alignIsRight) {
          if (domDrop) {
            style.left = rect.left + rect.width - domDrop.getBoundingClientRect().width - offsetX;
          }
        } else {
          style.left = rect.left + offsetX;
        }
      }
    } else {
      style.top = '100%';
      
      if (alignIsRight) {
        style.right = offsetX;
      } else {
        style.left = offsetX;
      }
      
      if (offsetY) {
        style.marginTop = offsetY;
      }
    }
    
    return style;
  }, [alignIsRight, domDrop, domDropdown, dropContainer, maxWidth, minWidth, offsetX, offsetY, width, zIndex]);
}
