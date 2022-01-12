import {
  CSSProperties
} from 'react';

import {
  getFixedRect
} from '@alicloud/mere-dom';

import useModelProps from './_use-model-props';
import useDomDropdown from './use-dom-dropdown';
import useDomDrop from './use-dom-drop';
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
  const domDropdown = useDomDropdown();
  const domDrop = useDomDrop();
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
      const rect = getFixedRect(domDropdown);
      
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
