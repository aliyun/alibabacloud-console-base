import update from 'immutability-helper';

import {
  IAttentionSeeker,
  IAttentionSeekerOptions
} from '../../model';

class AttentionItems {
  private items: IAttentionSeeker[] = [];
  
  getItems(): IAttentionSeeker[] {
    return this.items;
  }
  
  getIndex(element: HTMLElement): number {
    return this.items.findIndex(v => v.element === element);
  }
  
  addItem(element: HTMLElement, options?: IAttentionSeekerOptions, prependMode?: boolean): void {
    const index = this.getIndex(element);
    const item = {
      element,
      options
    };
    
    this.items = update(index >= 0 ? update(this.items, {
      $splice: [[index, 1]]
    }) : this.items, prependMode ? {
      $unshift: [item]
    } : {
      $push: [item]
    });
  }
  
  removeItem(element: HTMLElement): void {
    const index = this.getIndex(element);
    
    if (index < 0) {
      return;
    }
    
    this.items = update(this.items, {
      $splice: [[index, 1]]
    });
  }
  
  clear(): void {
    if (this.items.length) {
      this.items = [];
    }
  }
}

export default new AttentionItems();