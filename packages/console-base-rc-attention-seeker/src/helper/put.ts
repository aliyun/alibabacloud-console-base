import {
  IAttentionSeekerOptions
} from '../model';

import {
  putItem,
  pullItem
} from './_items';
import refresh from './refresh';

export default function put(element: HTMLElement, options?: IAttentionSeekerOptions, prependMode?: boolean): () => void {
  putItem(element, options, prependMode);
  refresh();
  
  return function pull(): void {
    pullItem(element);
    refresh();
  };
}
