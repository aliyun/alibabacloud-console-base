import React from 'react';
import {
  render
} from 'react-dom';

import AttentionSeeker from '../rc-container';
import getSoloHolder from '../util/get-solo-holder';

import {
  get
} from './_items';
import clear from './clear';

/**
 * 添加或移除某个节点后需要调用，也可以手动调用（用以修正因 DOM 变化导致的错位）
 */
export default function refresh(): void {
  const items = get();
  
  if (items.length) {
    render(<AttentionSeeker {...{
      items,
      timestamp: Date.now(),
      onClose: clear
    }} />, getSoloHolder());
  } else {
    clear();
  }
}
