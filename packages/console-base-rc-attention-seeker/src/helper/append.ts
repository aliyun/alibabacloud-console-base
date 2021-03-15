import {
  IAttentionSeekerOptions
} from '../types';

import put from './put';

export default function append(element: HTMLElement, options?: IAttentionSeekerOptions): () => void {
  return put(element, options);
}
