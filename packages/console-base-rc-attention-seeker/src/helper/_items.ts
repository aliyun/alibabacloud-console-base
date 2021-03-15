import update from 'immutability-helper';

import {
  IAttentionSeekerItem,
  IAttentionSeekerOptions
} from '../types';

let ITEMS: IAttentionSeekerItem[] = [];

function getIndex(element: HTMLElement): number {
  return ITEMS.findIndex(v => v.element === element);
}

export function get(): IAttentionSeekerItem[] {
  return ITEMS;
}

export function putItem(element: HTMLElement, options?: IAttentionSeekerOptions, prependMode?: boolean): IAttentionSeekerItem[] {
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
  
  return ITEMS;
}

export function pullItem(element: HTMLElement): IAttentionSeekerItem[] {
  const index = getIndex(element);
  
  if (index < 0) {
    return ITEMS;
  }
  
  ITEMS = update(ITEMS, {
    $splice: [[index, 1]]
  });
  
  return ITEMS;
}

export function removeAll(): void {
  ITEMS.length = 0;
}
