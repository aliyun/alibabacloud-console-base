import React from 'react';
import {
  render
} from 'react-dom';

import AttentionSeeker from '../rc-container';

import {
  attentionItems,
  getSoloHolder
} from './util';
import clear from './clear';

/**
 * 添加或移除某个节点后需要调用，也可以手动调用（用以修正因 DOM 变化导致的错位）
 */
export default function refresh(): void {
  const items = attentionItems.getItems();
  
  if (items.length) {
    render(<AttentionSeeker {...{
      items,
      onClose: clear
    }} />, getSoloHolder());
  } else {
    clear();
  }
}
