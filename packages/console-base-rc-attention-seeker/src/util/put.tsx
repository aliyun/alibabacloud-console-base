import React from 'react';
import {
  render
} from 'react-dom';
import update from 'immutability-helper';

import {
  IAttentionSeekerItem,
  IAttentionSeekerOptions
} from '../types';
import AttentionSeeker from '../rc-container';

import getSoloHolder from './get-solo-holder';
import removeSoloHolder from './remove-solo-holder';

let ITEMS: IAttentionSeekerItem[] = [];

function unmount(): void {
  removeSoloHolder();
  
  ITEMS.length = 0;
}

function getIndex(element: HTMLElement): number {
  return ITEMS.findIndex(v => v.element === element);
}

function put(element: HTMLElement, options?: IAttentionSeekerOptions, prependMode?: boolean): () => void {
  const index = getIndex(element);
  
  if (index >= 0) {
    ITEMS = update(ITEMS, {
      $splice: [[index, 1]]
    });
  }
  
  if (prependMode) {
    ITEMS = update(ITEMS, {
      $unshift: [{
        element,
        options
      }]
    });
  } else {
    ITEMS = update(ITEMS, {
      $push: [{
        element,
        options
      }]
    });
  }
  
  function refresh(items: IAttentionSeekerItem[]): void {
    if (items.length) {
      render(<AttentionSeeker {...{
        items,
        onClose: unmount
      }} />, getSoloHolder());
    } else {
      unmount();
    }
  }
  
  refresh(ITEMS);
  
  return function pull(): void {
    const index2 = getIndex(element);
    
    if (index2 < 0) { // 不太可能
      return;
    }
    
    ITEMS = update(ITEMS, {
      $splice: [[index2, 1]]
    });
    
    refresh(ITEMS);
  };
}

export function append(element: HTMLElement, options?: IAttentionSeekerOptions): () => void {
  return put(element, options);
}

export function prepend(element: HTMLElement, options?: IAttentionSeekerOptions): () => void {
  return put(element, options, true);
}
