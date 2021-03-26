import {
  CSSProperties
} from 'react';

import {
  getFixedRect
} from '@alicloud/mere-dom';

import useModelProps from './_use-model-props';
import useRefDropdown from './use-ref-dropdown';
import useRefDrop from './use-ref-drop';
import useDropVisible from './use-drop-visible';

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
  const refDropdown = useRefDropdown();
  const refDrop = useRefDrop();
  const dropVisible = useDropVisible();
  
  const alignIsRight = align === 'right';
  const [offsetX = 0, offsetY = 0] = offset;
  
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
    if (dropVisible) {
      const rect = getFixedRect(refDropdown.current);
      
      if (rect) {
        style.top = rect.top + rect.height + offsetY;
        
        if (alignIsRight) {
          if (refDrop.current) {
            style.left = rect.left + rect.width - refDrop.current.getBoundingClientRect().width - offsetX;
          }
        } else {
          style.left = rect.left + offsetX;
        }
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
}
