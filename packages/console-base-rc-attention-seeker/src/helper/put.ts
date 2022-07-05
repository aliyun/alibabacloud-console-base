import {
  IAttentionSeekerOptions
} from '../model';

import {
  attentionItems
} from './util';
import refresh from './refresh';

export default function put(element: HTMLElement, options?: IAttentionSeekerOptions, prependMode?: boolean): () => void {
  attentionItems.addItem(element, options, prependMode);
  refresh();
  
  return (): void => {
    attentionItems.removeItem(element);
    refresh();
  };
}
